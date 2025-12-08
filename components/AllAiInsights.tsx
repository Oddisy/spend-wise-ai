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
  typing: boolean;
  text: string;
};

const typeWriter = (
  text: string,
  onUpdate: (value: string) => void,
  speed = 18
) => {
  let index = 0;
  const write = () => {
    if (index <= text.length) {
      onUpdate(text.slice(0, index));
      index++;
      setTimeout(write, speed);
    }
  };
  write();
};

// Map insight type to emoji
const typeEmoji = (type: string) => {
  switch (type) {
    case 'warning':
      return '⚠️';
    case 'success':
      return '✅';
    case 'tip':
      return '💡';
    case 'info':
      return 'ℹ️';
    default:
      return '💭';
  }
};

export default function AIInsights() {
  const [insights, setInsights] = useState<InsightData[]>([]);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({});
  const [messages, setMessages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      loadInsights();
    }
  }, []);

  const loadInsights = async () => {
    setLoading(true);
    try {
      const data = await getAIInsights();
      if (!data || data.length === 0) return;

      setInsights(data);

      setTimeout(() => {
        data.forEach((insight) => {
          typeWriter(insight.message, (text) => {
            setMessages((prev) => ({ ...prev, [insight.id]: text }));
          }, 20);
        });
      }, 0);
    } catch (err) {
      console.error('Failed to load insights:', err);
    } finally {
      setLoading(false);
    }
  };

  const toggleInsight = async (insight: InsightData) => {
    if (!insight.action) return;
    if (expanded === insight.id) return setExpanded(null);
    setExpanded(insight.id);

    if (answers[insight.id]) return;

    setAnswers((prev) => ({
      ...prev,
      [insight.id]: { loading: true, typing: false, text: '' },
    }));

    try {
      const res = await generateInsightAnswer(
        `${insight.title}: ${insight.action}`
      );

      setAnswers((prev) => ({
        ...prev,
        [insight.id]: { loading: false, typing: true, text: '' },
      }));

      typeWriter(res, (value) => {
        setAnswers((prev) => ({
          ...prev,
          [insight.id]: {
            loading: false,
            typing: value.length < res.length,
            text: value,
          },
        }));
      });
    } catch {
      setAnswers((prev) => ({
        ...prev,
        [insight.id]: {
          loading: false,
          typing: false,
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

  const renderSkeleton = (count: number) => {
    return Array.from({ length: count }).map((_, idx) => (
      <div key={idx} className="relative pl-6 animate-pulse">
        <span className="absolute left-0 top-6 w-6 h-6 text-center text-xs rounded-full bg-slate-300 flex items-center justify-center" />
        <span className="absolute left-[11px] top-8 bottom-0 w-px bg-slate-200" />
        <div className="rounded-xl border-l-4 border-slate-300 p-4 bg-slate-100 dark:bg-slate-800/50">
          <div className="h-4 w-3/4 bg-slate-300 rounded mb-2" />
          <div className="h-3 w-1/2 bg-slate-300 rounded" />
        </div>
      </div>
    ));
  };

  return (
    <section className="rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-xl p-6 shadow-lg">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-slate-800 via-slate-700 to-cyan-500 text-white flex items-center justify-center shadow">
            🤖
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              🤖 AI Insight Timeline
            </h3>
            <p className="text-xs text-slate-500">
              Real-time financial intelligence
            </p>
          </div>
        </div>

        <button
          onClick={loadInsights}
          disabled={loading}
          className={`px-3 py-1.5 text-xs rounded-lg bg-linear-to-r from-slate-800 via-slate-700 to-cyan-500 text-white shadow flex items-center gap-2 ${
            loading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {loading && (
            <svg
              className="animate-spin h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          )}
          Refresh
        </button>
      </div>

      {/* TIMELINE */}
      <div className="space-y-3">
        {loading
          ? renderSkeleton(5)
          : insights.map((insight, index) => {
              const isOpen = expanded === insight.id;
              const answer = answers[insight.id];
              const message = messages[insight.id] || '';
              const emoji = typeEmoji(insight.type);

              return (
                <div key={insight.id} className="relative pl-10">
                  {/* timeline emoji dot */}
                  <span className="absolute left-0 top-4 w-8 h-8 flex items-center justify-center text-xl">
                    {emoji}
                  </span>
                  {index !== insights.length - 1 && (
                    <span className="absolute left-3 top-10 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />
                  )}

                  <div
                    onClick={() => toggleInsight(insight)}
                    className={`rounded-xl border-l-4 p-4 cursor-pointer transition hover:bg-slate-50 dark:hover:bg-slate-800/60 ${colorMap(
                      insight.type
                    )}`}
                  >
                    <div className="flex justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          {emoji} {insight.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1 whitespace-pre-line">
                          {message}
                          <span className="inline-block w-1 ml-1 bg-cyan-500 animate-pulse rounded-sm" />
                        </p>
                      </div>
                      <span className="text-xs text-cyan-600">
                        {isOpen ? 'Hide' : 'View'}
                      </span>
                    </div>

                    {isOpen && (
                      <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                        {answer?.loading && (
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <span className="animate-pulse">AI is thinking</span>
                            <span className="inline-block w-[2px] h-4 bg-white animate-ping rounded-sm" />
                          </div>
                        )}

                        {answer?.text && (
                          <p className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-line">
                            {answer.text}
                            {answer.typing && (
                              <span className="inline-block w-1 ml-1 bg-cyan-500 animate-pulse rounded-sm" />
                            )}
                          </p>
                        )}

                        {!answer && (
                          <p className="text-xs text-slate-400">
                            Click to generate AI explanation.
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
