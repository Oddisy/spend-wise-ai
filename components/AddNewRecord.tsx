'use client';
import { useRef, useState } from 'react';
import addExpenseRecord from '@/app/actions/addExpensesRecord';

const AddNewRecord = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [amount, setAmount] = useState<string>("");
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<'success' | 'error' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [isCategorizingAI, setIsCategorizingAI] = useState(false);

  const clientAction = async (formData: FormData) => {
    setIsLoading(true);
    setAlertMessage(null);
    formData.set('amount', amount.toString());
    formData.set('category', category);

    const { error } = await addExpenseRecord(formData);

    if (error) {
      setAlertMessage(`Error: ${error}`);
      setAlertType('error');
    } else {
      setAlertMessage('you have added new expense successfully!');
      setAlertType('success');
      formRef.current?.reset();
      setAmount("");
      setCategory('');
      setDescription('');
    }

    setIsLoading(false);
  };

  const handleAISuggestCategory = async () => {
    if (!description.trim()) {
      setAlertMessage('Please enter a description first');
      setAlertType('error');
      return;
    }

    setIsCategorizingAI(true);
    setAlertMessage(null);

    try {
      const res = await fetch('api/suggest-category', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description }),
      });

      const data = await res.json();

      if (data.error) {
        setAlertMessage(data.error);
        setAlertType('error');
      } else {
        setCategory(data.category);
        setAlertMessage(`AI suggests: ${data.category}`);
        setAlertType('success');
      }
    } catch {
      setAlertMessage('Failed to get AI suggestion');
      setAlertType('error');
    } finally {
      setIsCategorizingAI(false);
    }
  };

  return (
    <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-cyan-500/10 transition">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-linear-to-br from-slate-800 via-slate-700 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-white text-lg">💳</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Add New Expense
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Let AI help you categorize expenses faster
          </p>
        </div>
      </div>

      {/* Form */}
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(formRef.current!);
          const dateInput = formRef.current?.querySelector<HTMLInputElement>('input[name="date"]');
if (dateInput?.value) {
  formData.set('date', dateInput.value);
}

          clientAction(formData);
        }}
        className="space-y-8"
      >

        {/* Description & Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gradient-to-r from-slate-50/80 to-cyan-50/50 dark:from-slate-800/30 dark:to-cyan-900/10 rounded-xl border border-slate-200/50 dark:border-slate-700/50">

          {/* Description */}
          <div className="space-y-1.5">
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
              Expense Description
            </label>

            <div className="relative">
              <input
                type="text"
                name="text"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder="e.g, Uber ride to airport"
                className="w-full pl-3 pr-12 py-2.5 bg-white/80 dark:bg-slate-800/70 border-2 border-slate-200/80 dark:border-slate-600/80 rounded-xl focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 text-slate-900 dark:text-white placeholder-slate-400 shadow-sm hover:shadow-md transition"
                required
              />

              <button
                type="button"
                onClick={handleAISuggestCategory}
                disabled={isCategorizingAI || !description.trim()}
                title="Let AI choose the correct category"
                className=" flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 w-9 h-7 bg-linear-to-r from-slate-700 to-cyan-500 hover:from-slate-800 hover:to-cyan-600 text-white rounded-lg text-xs shadow-md transition disabled:opacity-50"
              >
                {isCategorizingAI ? (
                  <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <div className={`${description ? 'animate-pulse text-cyan-200 text-center' : 'opacity-40'}`}>
                    🤖AI
                  </div>
                )}
              </button>
            </div>

            {isCategorizingAI && (
              <p className="text-xs text-cyan-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
                AI is choosing the best category for you...
              </p>
            )}

          </div>

          {/* Date */}
          <div className="space-y-1.5">
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
              Expense Date
            </label>
            <input
              type="date"
              name="date"
              onFocus={(e) => e.target.showPicker()}
              className="w-full px-3 py-2.5 bg-white/80 dark:bg-slate-800/70 border-2 border-slate-200/80 dark:border-slate-600/80 rounded-xl focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 text-slate-900 dark:text-white shadow-sm hover:shadow-md transition"
              required
            />
          </div>
        </div>

        {/* Category & Amount */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gradient-to-r from-cyan-50/40 to-slate-50/60 dark:from-cyan-900/10 dark:to-slate-900/30 rounded-xl border border-cyan-200/30 dark:border-slate-700/50">

          {/* Category */}
          <div className="space-y-1.5">
            <div className="">
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
              Category
            </label>
            <span className='text-[10px] font-semibold text-yellow-700'>use the button above for AI suggestion</span>
            </div>

            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2.5 bg-white/80 dark:bg-slate-800/70 border-2 border-slate-200/80 dark:border-slate-600/80 rounded-xl focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 text-slate-900 dark:text-white shadow-sm transition"
              required
            >
              <option value="" disabled>Select category...</option>
              <option value="Food">🍔 Food & Dining</option>
              <option value="Transportation">🚗 Transportation</option>
              <option value="Shopping">🛒 Shopping</option>
              <option value="Entertainment">🎬 Entertainment</option>
              <option value="Bills">💡 Bills & Utilities</option>
              <option value="Healthcare">🏥 Healthcare</option>
              <option value="Other">📦 Other</option>
            </select>
          </div>

          {/* Amount */}
          <div className="space-y-7">
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
              Amount
            </label>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">
                $
              </span>
              <input
                type="number"
                name="amount"
                min="0"
                step="0.01"
                value={amount}
                 onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full pl-6 pr-3 py-2.5 bg-white/80 dark:bg-slate-800/70 border-2 border-slate-200/80 dark:border-slate-600/80 rounded-xl focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 text-slate-900 dark:text-white font-semibold shadow-sm transition"
                required
              />
            </div>
          </div>

        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-slate-800 via-slate-700 to-cyan-500 hover:from-slate-900 hover:to-cyan-600 text-white py-3 rounded-xl font-semibold shadow-xl hover:shadow-cyan-500/20 transition"
        >
          {isLoading ? "Processing..." : "Add Expense"}
        </button>

      </form>

      {/* Alert */}
      {alertMessage && (
        <div className={`mt-4 p-3 rounded-xl border-l-4 ${
          alertType === "success"
            ? "bg-cyan-50/10 border-cyan-500 text-green-500"
            : "bg-red-50 border-red-500 text-red-700"
          }`}
        >
          <p className="text-sm font-medium">{alertMessage}</p>
        </div>
      )}

    </div>
  );
};

export default AddNewRecord;
