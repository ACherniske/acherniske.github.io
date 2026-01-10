import { ExternalLink } from 'lucide-react';
import { articles } from '../data/articles';

const Featured = () => {
  return (
    <section id="featured" className="py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#F1F1F1] mb-4">
          Featured In
        </h2>
        <p className="text-[#A3A3A3] mb-12 text-lg max-w-2xl">
          Articles and stories where I've been featured
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1F1F1F] rounded-lg p-6 hover:bg-[#252525] transition-all duration-300 border-2 border-transparent hover:border-[#EF5B0C] group flex flex-col"
            >
              {article.imageUrl && (
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}
              
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-xl font-semibold text-[#F1F1F1] group-hover:text-[#EF5B0C] transition-colors duration-300 flex-1">
                  {article.title}
                </h3>
                <ExternalLink 
                  size={18} 
                  className="text-[#A3A3A3] group-hover:text-[#EF5B0C] transition-colors duration-300 shrink-0 mt-1"
                />
              </div>
              
              <p className="text-[#A3A3A3] mb-4 leading-relaxed text-sm grow">
                {article.description}
              </p>
              
              <div className="flex items-center justify-between text-sm mt-auto">
                <span className="text-[#EF5B0C] font-medium">
                  {article.source}
                </span>
                <span className="text-[#666666]">
                  {article.date}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
