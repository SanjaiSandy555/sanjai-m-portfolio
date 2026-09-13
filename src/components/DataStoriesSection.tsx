import React, { useState } from 'react';
import { BarChart3, LineChart, ScatterChart, Award, TrendingUp, Info } from 'lucide-react';
import { LeafIcon } from './LeafIcon';

export const DataStoriesSection: React.FC = () => {
  const [activeChartTab, setActiveChartTab] = useState<'kpi' | 'bar' | 'line' | 'scatter' | 'distribution'>('kpi');

  // SVG Chart Components with strict palette
  const renderBarChart = () => {
    const bars = [
      { label: 'Raw Ingestion', value: 38, pct: '38ms' },
      { label: 'Clean / Impute', value: 65, pct: '65ms' },
      { label: 'Feature Transform', value: 85, pct: '85ms' },
      { label: 'SQL Aggregation', value: 50, pct: '50ms' },
      { label: 'Inference Cycle', value: 24, pct: '24ms' },
    ];

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#68736C]">
          <span>Pipeline Stage</span>
          <span>Sample Latency (ms)</span>
        </div>
        <div className="space-y-3">
          {bars.map((bar) => (
            <div key={bar.label} className="space-y-1">
              <div className="flex justify-between text-xs font-semibold text-[#25302A]">
                <span>{bar.label}</span>
                <span className="text-[#285943]">{bar.pct}</span>
              </div>
              <div className="w-full h-3 rounded-full bg-[#ECEDE5] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#9CAF9A] to-[#285943] transition-all duration-700"
                  style={{ width: `${bar.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-[#68736C] italic pt-2">
          Illustrative comparative chart representing stage execution speeds in structured Python/SQL data processing.
        </p>
      </div>
    );
  };

  const renderLineChart = () => {
    return (
      <div className="space-y-3">
        <div className="flex justify-between items-center text-xs text-[#68736C]">
          <span>Model Training Epochs (1 → 50)</span>
          <span className="text-[#285943] font-semibold">Validation Convergence</span>
        </div>

        {/* SVG Line Chart */}
        <div className="w-full h-44 bg-[#F5F5F0] rounded-2xl p-4 border border-[#9CAF9A]/30 relative flex items-end">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 400 120">
            {/* Grid lines */}
            <line x1="0" y1="20" x2="400" y2="20" stroke="#ECEDE5" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="0" y1="60" x2="400" y2="60" stroke="#ECEDE5" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="0" y1="100" x2="400" y2="100" stroke="#ECEDE5" strokeWidth="1" strokeDasharray="3 3" />

            {/* Gradient area under line */}
            <defs>
              <linearGradient id="lineAreaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#285943" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#285943" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon
              points="0,110 40,88 90,62 150,44 210,32 280,24 350,20 400,18 400,120 0,120"
              fill="url(#lineAreaGrad)"
            />

            {/* Primary metric curve */}
            <path
              d="M 0,110 Q 70,75 140,48 T 280,25 T 400,18"
              fill="none"
              stroke="#285943"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Benchmark baseline */}
            <path
              d="M 0,115 Q 80,95 160,70 T 300,45 T 400,38"
              fill="none"
              stroke="#9CAF9A"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />

            {/* Key Data Nodes */}
            <circle cx="140" cy="48" r="3.5" fill="#285943" />
            <circle cx="280" cy="25" r="3.5" fill="#285943" />
            <circle cx="400" cy="18" r="4.5" fill="#285943" stroke="#FFFFFF" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="flex items-center justify-between text-[11px] text-[#68736C]">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-0.5 bg-[#285943] inline-block" />
            <span>Trained Model Metric</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-0.5 bg-[#9CAF9A] inline-block" />
            <span>Baseline Heuristic</span>
          </div>
        </div>
      </div>
    );
  };

  const renderScatterPlot = () => {
    // Deterministic points for sample scatter
    const points = [
      { x: 15, y: 80 }, { x: 22, y: 72 }, { x: 30, y: 65 }, { x: 38, y: 60 },
      { x: 45, y: 52 }, { x: 55, y: 45 }, { x: 62, y: 40 }, { x: 70, y: 32 },
      { x: 78, y: 28 }, { x: 85, y: 22 }, { x: 92, y: 16 }, { x: 28, y: 78 },
      { x: 40, y: 62 }, { x: 50, y: 48 }, { x: 65, y: 38 }, { x: 80, y: 24 }
    ];

    return (
      <div className="space-y-3">
        <div className="flex justify-between items-center text-xs text-[#68736C]">
          <span>Feature Correlation: Living Area vs. Log Unit Price</span>
          <span className="text-[#285943] font-semibold">r = 0.81 (Strong Positive)</span>
        </div>

        <div className="w-full h-44 bg-[#F5F5F0] rounded-2xl p-4 border border-[#9CAF9A]/30 relative flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 300 120">
            {/* Trend line */}
            <line x1="20" y1="100" x2="280" y2="20" stroke="#9CAF9A" strokeWidth="1.5" strokeDasharray="3 3" />
            {/* Scatter dots */}
            {points.map((pt, i) => (
              <circle
                key={i}
                cx={pt.x * 2.8 + 15}
                cy={pt.y * 1.1 + 10}
                r="3.5"
                fill="#285943"
                opacity={0.8}
                className="hover:r-5 transition-all"
              />
            ))}
          </svg>
        </div>
        <p className="text-[11px] text-[#68736C] italic">
          Sample bivariate scatter distribution representing feature linearity analysis during exploratory data modeling.
        </p>
      </div>
    );
  };

  const renderDistributionChart = () => {
    const bins = [12, 28, 55, 84, 110, 92, 64, 35, 18, 8];
    const maxVal = Math.max(...bins);

    return (
      <div className="space-y-3">
        <div className="flex justify-between items-center text-xs text-[#68736C]">
          <span>Histogram Distribution: Target Residuals</span>
          <span className="text-[#285943] font-semibold">Near-Gaussian (μ ≈ 0)</span>
        </div>

        <div className="w-full h-44 bg-[#F5F5F0] rounded-2xl p-4 border border-[#9CAF9A]/30 flex items-end justify-between gap-1.5">
          {bins.map((val, idx) => {
            const heightPct = (val / maxVal) * 100;
            return (
              <div key={idx} className="flex-1 flex flex-col items-center gap-1 group">
                <div className="w-full rounded-t-md bg-[#9CAF9A] group-hover:bg-[#285943] transition-colors" style={{ height: `${heightPct}%` }} />
                <span className="text-[9px] text-[#68736C]">{idx * 10}%</span>
              </div>
            );
          })}
        </div>
        <p className="text-[11px] text-[#68736C] italic">
          Standard normal distribution check verifying regression error residuals adhere to linear modeling assumptions.
        </p>
      </div>
    );
  };

  return (
    <section id="data-stories" className="py-20 md:py-28 bg-[#ECEDE5]/70 border-y border-[#285943]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#DCE6DC] border border-[#9CAF9A]/40 text-[#285943] text-xs font-semibold uppercase tracking-wider">
            <BarChart3 size={14} />
            <span>Data Presentation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#285943]">
            Turning Data Into Visual Stories
          </h2>
          <p className="text-[#68736C] text-base sm:text-lg">
            Subtle illustrative demonstrations illustrating how data cleansing, distribution diagnostics, and metric tracking inform strategic engineering decisions.
          </p>
        </div>

        {/* 4 KPI Metric Cards (Section 19: KPI card) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'Data Integrity Audit', value: '99.8%', note: 'Null imputation & bounds verification' },
            { label: 'Batch Processing Gain', value: '+42%', note: 'Vectorized operations over row loops' },
            { label: 'Records Handled', value: '1.2M+', note: 'Structured queries in relational DBs' },
            { label: 'Report Cycle Reduction', value: '-60%', note: 'Automated Power BI & SQL reporting' },
          ].map((kpi, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#285943]/15 shadow-xs flex flex-col justify-between"
            >
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#9CAF9A]">
                {kpi.label}
              </span>
              <div className="my-2">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#285943]">
                  {kpi.value}
                </span>
              </div>
              <p className="text-xs text-[#68736C]">
                {kpi.note}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Visualization Playground Container */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#285943]/15 shadow-sm">
          {/* Navigation Controls for visual tabs */}
          <div className="flex flex-wrap items-center justify-between border-b border-[#ECEDE5] pb-4 mb-6 gap-3">
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'kpi', label: 'Bar Chart (Latency)', icon: <BarChart3 size={14} /> },
                { id: 'line', label: 'Line Chart (Loss)', icon: <LineChart size={14} /> },
                { id: 'scatter', label: 'Scatter Plot (Correlation)', icon: <ScatterChart size={14} /> },
                { id: 'distribution', label: 'Distribution (Histogram)', icon: <TrendingUp size={14} /> },
              ].map((tab) => {
                const isSelected = activeChartTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveChartTab(tab.id as any)}
                    className={`inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#285943] text-[#F5F5F0] shadow-xs'
                        : 'bg-[#F5F5F0] text-[#25302A] hover:bg-[#DCE6DC] border border-[#9CAF9A]/30'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="inline-flex items-center space-x-1.5 text-xs text-[#68736C]">
              <Info size={14} className="text-[#9CAF9A]" />
              <span>Palette: Bottle Green • Sage • Ivory</span>
            </div>
          </div>

          {/* Active Chart Render */}
          <div className="pt-2">
            {activeChartTab === 'kpi' && renderBarChart()}
            {activeChartTab === 'line' && renderLineChart()}
            {activeChartTab === 'scatter' && renderScatterPlot()}
            {activeChartTab === 'distribution' && renderDistributionChart()}
          </div>

          {/* Clear Notice */}
          <div className="mt-6 pt-4 border-t border-[#ECEDE5] flex items-center justify-between text-[11px] text-[#68736C]">
            <span>Demonstration sample data adhering strictly to natural portfolio palette.</span>
            <span className="font-semibold text-[#285943]">Visual Data Storytelling</span>
          </div>
        </div>
      </div>
    </section>
  );
};
