'use client';

import { useEffect, useState } from 'react';
import { getAIInsights } from '@/app/actions/getAllAiInsights';
import { generateInsightAnswer } from '@/app/actions/generateInsightAnswer';

interface InsightData {
  id: string;
  type: 'warning' | 'info' | 'success' | 'tip';
  title: string;
  message: string;
  action?: string;
}

type AnswerState = {
  loading: boolean;
  text: string;
};

export default function AIInsights() {
  const [insights, setInsights] = useState<InsightData[]>([]);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadInsights();
  }, []);

  const loadInsights = async () => {
    setLoading(true);
    try {
      const data = await getAIInsights();
      setInsights(data);
    } finally {
      setLoading(false);
    }
  };

  const toggleInsight = async (insight: InsightData) => {
    if (!insight.action) return;

    if (expanded === insight.id) {
      setExpanded(null);
      return;
    }

    setExpanded(insight.id);

    if (answers[insight.id]) return;

    setAnswers(prev => ({
      ...prev,
      [insight.id]: { loading: true, text: '' },
    }));

    try {
      const res = await generateInsightAnswer(
        `${insight.title}: ${insight.action}`
      );

      setAnswers(prev => ({
        ...prev,
        [insight.id]: { loading: false, text: res },
      }));
    } catch {
      setAnswers(prev => ({
        ...prev,
        [insight.id]: {
          loading: false,
          text: 'Unable to generate insight.',
        },
      }));
    }
  };

  const colorMap = (type: string) => {
    switch (type) {
      case 'warning':
        return 'border-amber-500';
      case 'success':
      case 'tip':
        return 'border-cyan-500';
      default:
        return 'border-slate-500';
    }
  };

  /* ---------- LOADING STATE ---------- */
  if (loading) {
    return (
      <div className="rounded-2xl p-6 bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700 shadow-lg">
        <div className="h-6 w-40 bg-slate-200 dark:bg-slate-700 animate-pulse rounded mb-6" />
        <div className="space-y-3">
          {[1, 2, 3].map(i => (
            <div
              key={i}
              className="h-16 rounded-xl bg-slate-100 dark:bg-slate-800 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-xl shadow-lg p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-slate-800 via-slate-700 to-cyan-500 flex items-center justify-center text-white shadow">
            🤖
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100">
              AI Insights
            </h3>
            <p className="text-xs text-slate-500">
              Insight timeline & activity
            </p>
          </div>
        </div>

        <button
          onClick={loadInsights}
          className="px-3 py-1.5 text-xs rounded-lg bg-linear-to-r from-slate-800 via-slate-700 to-cyan-500 text-white shadow"
        >
          Refresh
        </button>
      </div>

      {/* TIMELINE */}
      <div className="space-y-3">
        {insights.map((insight, index) => {
          const isOpen = expanded === insight.id;
          const answer = answers[insight.id];

          return (
            <div
              key={insight.id}
              className="relative pl-6"
            >
              {/* Timeline dot */}
              <span className="absolute left-0 top-6 w-2 h-2 bg-cyan-500 rounded-full" />
              {index !== insights.length - 1 && (
                <span className="absolute left-[3px] top-8 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />
              )}

              <div
                className={`rounded-xl p-4 border-l-4 cursor-pointer transition hover:bg-slate-50 dark:hover:bg-slate-800/60 ${colorMap(
                  insight.type
                )}`}
                onClick={() => toggleInsight(insight)}
              >
                <div className="flex justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {insight.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      {insight.message}
                    </p>
                  </div>

                  <span className="text-xs text-cyan-600 self-start">
                    {isOpen ? 'Hide' : 'View'}
                  </span>
                </div>

                {/* EXPANDED AI ANSWER */}
                {isOpen && (
                  <div className="mt-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4">
                    {answer?.loading && (
                      <div className="space-y-2">
                        <div className="h-2 bg-slate-200 dark:bg-slate-700 animate-pulse rounded" />
                        <div className="h-2 w-3/4 bg-slate-200 dark:bg-slate-700 animate-pulse rounded" />
                      </div>
                    )}

                    {!answer?.loading && answer?.text && (
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        {answer.text}
                      </p>
                    )}

                    {!answer && (
                      <p className="text-xs text-slate-400">
                        Click again to generate AI response.
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
