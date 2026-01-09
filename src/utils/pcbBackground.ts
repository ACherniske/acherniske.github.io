interface Point {
    x: number;
    y: number;
}

interface LineSegment {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}

interface PCBConfig {
    gridSpacing: number;
    lineWidth: number;
    lineColor: string;
    padColor: string;
    padSize: number;
    branchProbability: number; // probability of continuing a branch
}

class CircuitGenerator {
    private svg: SVGSVGElement;
    private config: PCBConfig;

    private width: number;
    private height: number;
    private gridState: boolean[][];
    private drawnLines: LineSegment[];

    constructor(svgID: string, config?: Partial<PCBConfig>) {
        const svgElement = document.getElementById(svgID);
        if (!svgElement || !(svgElement instanceof SVGSVGElement)) {
            throw new Error(`SVG element with id "${svgID}" not found`);
        }
        this.svg = svgElement;

        this.config = {
            gridSpacing: 10,
            lineWidth: 2.5,
            lineColor: '#EF5B0C',
            padColor: '#DC4E08',
            padSize: 6,
            branchProbability: 0.7,
            ...config,
        };

        this.width = 0;
        this.height = 0;
        this.gridState = [];
        this.drawnLines = [];
    }

    private initializeGrid(): void {
        const rect = this.svg.getBoundingClientRect();
        this.width = Math.floor(rect.width / this.config.gridSpacing);
        this.height = Math.floor(rect.height / this.config.gridSpacing);

        this.gridState = [];
        this.drawnLines = [];
        for (let x = 0; x < this.width; x++) {
            this.gridState.push(Array(this.height).fill(false));
        }
    }

    private shuffle<T>(array: T[]): T[] {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    private isEmpty(x: number, y: number): boolean {
        return x >= 0 && x < this.width && y >= 0 && y < this.height && !this.gridState[x][y];
    }

    private linesIntersect(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): boolean {
        // Check if line segments (x1,y1)-(x2,y2) and (x3,y3)-(x4,y4) intersect
        const denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if (Math.abs(denom) < 0.0001) return false; // Parallel lines

        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denom;
        const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / denom;

        // Check if intersection point is within both line segments
        return t > 0.01 && t < 0.99 && u > 0.01 && u < 0.99;
    }

    private wouldCrossExistingLine(x1: number, y1: number, x2: number, y2: number): boolean {
        // Check if new line would intersect with any existing lines
        for (const line of this.drawnLines) {
            if (this.linesIntersect(x1, y1, x2, y2, line.x1, line.y1, line.x2, line.y2)) {
                return true;
            }
        }
        return false;
    }

    private renderLine(x1: number, y1: number, x2: number, y2: number): void {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', ((x1 + 0.5) * this.config.gridSpacing).toString());
        line.setAttribute('y1', ((y1 + 0.5) * this.config.gridSpacing).toString());
        line.setAttribute('x2', ((x2 + 0.5) * this.config.gridSpacing).toString());
        line.setAttribute('y2', ((y2 + 0.5) * this.config.gridSpacing).toString());
        line.setAttribute('stroke', this.config.lineColor);
        line.setAttribute('stroke-width', this.config.lineWidth.toString());
        line.setAttribute('stroke-linecap', 'round');
        this.svg.appendChild(line);
    }

    private renderPad(x: number, y: number): void {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', ((x + 0.5) * this.config.gridSpacing).toString());
        circle.setAttribute('cy', ((y + 0.5) * this.config.gridSpacing).toString());
        circle.setAttribute('r', (this.config.padSize / 2).toString());
        circle.setAttribute('stroke', this.config.padColor);
        circle.setAttribute('stroke-width', '2');
        circle.setAttribute('fill', 'none');
        this.svg.appendChild(circle);
    }

    private doLine(x0: number, y0: number, x1: number, y1: number): boolean {
        const midX = Math.round((x0 + x1) / 2);
        const midY = Math.round((y0 + y1) / 2);

        if (!this.isEmpty(x1, y1) || !this.isEmpty(midX, midY)) {
            return true;
        }

        // Check if this line would cross any existing lines
        if (this.wouldCrossExistingLine(x0, y0, x1, y1)) {
            return true;
        }

        this.gridState[x1][y1] = true;
        this.gridState[midX][midY] = true;
        this.renderLine(x0, y0, x1, y1);
        
        // Store this line segment
        this.drawnLines.push({ x1: x0, y1: y0, x2: x1, y2: y1 });

        let deadEnd = true;
        const angle = Math.atan2(x1 - x0, y1 - y0);

        // Try continuing in maximum 2 directions (straight, +45° OR -45°)
        const angleOffsets = this.shuffle([0, Math.PI / 4, -Math.PI / 4]).slice(0, 2);

        angleOffsets.forEach((da) => {
            if (Math.random() > this.config.branchProbability) {
                return;
            }

            const x2 = x1 + Math.round(Math.sin(angle + da)) * 2;
            const y2 = y1 + Math.round(Math.cos(angle + da)) * 2;

            deadEnd = this.doLine(x1, y1, x2, y2) && deadEnd;
        });

        if (deadEnd) {
            // Draw via first, then pad on top so trace doesn't end in center of via
            if (Math.random() < 0.3) {
                const viaCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                viaCircle.setAttribute('cx', ((x1 + 0.5) * this.config.gridSpacing).toString());
                viaCircle.setAttribute('cy', ((y1 + 0.5) * this.config.gridSpacing).toString());
                viaCircle.setAttribute('r', '3');
                viaCircle.setAttribute('fill', this.config.padColor);
                viaCircle.setAttribute('opacity', '0.6');
                this.svg.appendChild(viaCircle);
            }
            this.renderPad(x1, y1);
        }

        return false;
    }

    public generate(startPointCount: number = 5): void {
        // Clear existing content
        while (this.svg.firstChild) {
            this.svg.removeChild(this.svg.firstChild);
        }

        this.initializeGrid();

        // Create start points
        const startPoints: Point[] = [
            { x: 0, y: 0 },
            { x: this.width - 1, y: 0 },
            { x: 0, y: this.height - 1 },
            { x: this.width - 1, y: this.height - 1 },
            { x: Math.floor(this.width / 2), y: Math.floor(this.height / 2) },
        ];

        // Add random start points
        for (let i = 0; i < startPointCount; i++) {
            startPoints.push({
                x: Math.floor(Math.random() * this.width),
                y: Math.floor(Math.random() * this.height),
            });
        }

        // Generate from each start point
        startPoints.forEach((point) => {
            const { x, y } = point;
            if (!this.isEmpty(x, y)) return;

            this.gridState[x][y] = true;

            // Generate lines in multiple directions
            for (let i = 0; i < 4; i++) {
                const angle = Math.random() * Math.PI * 2;
                const endX = x + Math.round(Math.sin(angle)) * 2;
                const endY = y + Math.round(Math.cos(angle)) * 2;

                if (this.isEmpty(endX, endY)) {
                    this.doLine(x, y, endX, endY);
                }
            }
        });

        // Add more random branches from existing points
        const additionalBranches = Math.floor(this.width * this.height * 0.01);
        for (let i = 0; i < additionalBranches; i++) {
            let startX: number, startY: number;
            let attempts = 0;

            do {
                startX = Math.floor(Math.random() * this.width);
                startY = Math.floor(Math.random() * this.height);
                attempts++;
            } while (attempts < 50 && !this.gridState[startX][startY]);

            if (this.gridState[startX][startY]) {
                const angle = Math.random() * Math.PI * 2;
                const endX = startX + Math.round(Math.sin(angle)) * 2;
                const endY = startY + Math.round(Math.cos(angle)) * 2;

                if (this.isEmpty(endX, endY)) {
                    this.doLine(startX, startY, endX, endY);
                }
            }
        }
    }
}

export default CircuitGenerator;
