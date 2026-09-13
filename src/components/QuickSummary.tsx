import React from 'react';
import { Code, PieChart, Database, Cpu } from 'lucide-react';
import { QUICK_SUMMARY_ITEMS } from '../portfolioConfig';

export const QuickSummary: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code size={20} className="text-[#285943]" />;
      case 1:
        return <PieChart size={20} className="text-[#285943]" />;
      case 2:
        return <Database size={20} className="text-[#285943]" />;
      case 3:
        return <Cpu size={20} className="text-[#285943]" />;
      default:
        return <Code size={20} className="text-[#285943]" />;
    }
  };

  return (
    <section className="py-12 bg-[#ECEDE5]/50 border-y border-[#285943]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUICK_SUMMARY_ITEMS.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#285943]/10 shadow-xs hover:shadow-sm transition-all hover:border-[#285943]/30 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#DCE6DC]/80 flex items-center justify-center">
                    {getIcon(index)}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#9CAF9A] block">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#25302A]">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-[#68736C] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
