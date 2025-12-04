'use client';
import { useRef, useState } from 'react';
import addExpenseRecord from '@/app/actions/addExpenseRecord';
import { suggestCategory } from '@/app/actions/suggestCategory';

const AddRecord = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [amount, setAmount] = useState(50); // Default value for expense amount
  const [alertMessage, setAlertMessage] = useState<string | null>(null); // State for alert message
  const [alertType, setAlertType] = useState<'success' | 'error' | null>(null); // State for alert type
  const [isLoading, setIsLoading] = useState(false); // State for loading spinner
  const [category, setCategory] = useState(''); // State for selected expense category
  const [description, setDescription] = useState(''); // State for expense description
  const [isCategorizingAI, setIsCategorizingAI] = useState(false); // State for AI categorization loading

  const clientAction = async (formData: FormData) => {
    setIsLoading(true); // Show spinner
    setAlertMessage(null); // Clear previous messages

    formData.set('amount', amount.toString()); // Add the amount value to the form data
    formData.set('category', category); // Add the selected category to the form data

    const { error } = await addExpenseRecord(formData); // Removed `data` since it's unused

    if (error) {
      setAlertMessage(`Error: ${error}`);
      setAlertType('error'); // Set alert type to error
    } else {
      setAlertMessage('Expense record added successfully!');
      setAlertType('success'); // Set alert type to success
      formRef.current?.reset();
      setAmount(50); // Reset the amount to the default value
      setCategory(''); // Reset the category
      setDescription(''); // Reset the description
    }

    setIsLoading(false); // Hide spinner
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
      const result = await suggestCategory(description);
      if (result.error) {
        setAlertMessage(`AI Suggestion: ${result.error}`);
        setAlertType('error');
      } else {
        setCategory(result.category);
        setAlertMessage(`AI suggested category: ${result.category}`);
        setAlertType('success');
      }
    } catch {
      setAlertMessage('Failed to get AI category suggestion');
      setAlertType('error');
    } finally {
      setIsCategorizingAI(false);
    }
  };

   return (
    <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl
    shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-cyan-500/10 transition">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-linear-to-br from-slate-800 via-slate-700 to-cyan-500
        rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-white text-lg">💳</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Add New Expense
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Track your spending with AI assistance
          </p>
        </div>
      </div>

      {/* Form */}
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(formRef.current!);
          handleSubmit(data);
        }}
        className="space-y-8"
      >

        {/* Description & Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4
        bg-gradient-to-r from-slate-50/80 to-cyan-50/50
        dark:from-slate-800/30 dark:to-cyan-900/10
        rounded-xl border border-slate-200/50 dark:border-slate-700/50">

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
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Coffee, groceries, gas..."
                className="w-full pl-3 pr-12 py-2.5 bg-white/80 dark:bg-slate-800/70
                border-2 border-slate-200/80 dark:border-slate-600/80 rounded-xl
                focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400
                text-slate-900 dark:text-white placeholder-slate-400
                shadow-sm hover:shadow-md transition"
                required
              />

              <button
                type="button"
                onClick={handleAISuggestCategory}
                disabled={isCategorizingAI || !description.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2
                w-8 h-7 bg-gradient-to-r from-slate-700 to-cyan-500
                hover:from-slate-800 hover:to-cyan-600
                text-white rounded-lg text-xs shadow-md transition disabled:opacity-50"
              >
                {isCategorizingAI ? (
                  <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "✨"
                )}
              </button>
            </div>

            {isCategorizingAI && (
              <p className="text-xs text-cyan-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
                AI is analyzing your description...
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
              className="w-full px-3 py-2.5 bg-white/80 dark:bg-slate-800/70
              border-2 border-slate-200/80 dark:border-slate-600/80 rounded-xl
              focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400
              text-slate-900 dark:text-white shadow-sm hover:shadow-md transition"
              required
            />
          </div>
        </div>

        {/* Category & Amount */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4
        bg-gradient-to-r from-cyan-50/40 to-slate-50/60
        dark:from-cyan-900/10 dark:to-slate-900/30
        rounded-xl border border-cyan-200/30 dark:border-slate-700/50">

          {/* Category */}
          <div className="space-y-1.5">
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
              Category
            </label>

            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2.5 bg-white/80 dark:bg-slate-800/70
              border-2 border-slate-200/80 dark:border-slate-600/80 rounded-xl
              focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400
              text-slate-900 dark:text-white shadow-sm transition"
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
          <div className="space-y-1.5">
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
                onChange={(e) => setAmount(Number(e.target.value) || 0)}
                placeholder="0.00"
                className="w-full pl-6 pr-3 py-2.5 bg-white/80 dark:bg-slate-800/70
                border-2 border-slate-200/80 dark:border-slate-600/80 rounded-xl
                focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400
                text-slate-900 dark:text-white font-semibold shadow-sm transition"
                required
              />
            </div>
          </div>

        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-slate-800 via-slate-700 to-cyan-500
          hover:from-slate-900 hover:to-cyan-600 text-white py-3 rounded-xl
          font-semibold shadow-xl hover:shadow-cyan-500/20 transition"
        >
          {isLoading ? "Processing..." : "Add Expense"}
        </button>

      </form>

      {/* Alert */}
      {alertMessage && (
        <div className={`mt-4 p-3 rounded-xl border-l-4
        ${alertType === "success"
            ? "bg-cyan-50/70 border-cyan-500 text-cyan-700"
            : "bg-red-50 border-red-500 text-red-700"
          }`}
        >
          <p className="text-sm font-medium">{alertMessage}</p>
        </div>
      )}

    </div>
  );
};

export default AddRecord;