import getUserRecord from '@/app/actions/getUserRecord';
import getHighestLowestExpense from '@/app/actions/getHighestLowestExpense';

const ExpenseStats = async () => {
  try {
    const [userRecordResult, rangeResult] = await Promise.all([
      getUserRecord(),
      getHighestLowestExpense(),
    ]);

    const { record, daysWithRecords } = userRecordResult;
    const { highestExpense, lowestExpense } = rangeResult;
    console.log('record:', record, 'daysWithRecords:', daysWithRecords);
    console.log('highestExpense:', highestExpense, 'lowestExpense:', lowestExpense);

    const validRecord = record || 0;
    const validDays = daysWithRecords && daysWithRecords > 0 ? daysWithRecords : 1;
    const averageExpense = validRecord / validDays;

    return (
      <div className="space-y-6 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center text-2xl text-cyan-600 dark:text-cyan-400">
            📊
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Expense Overview
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Track your spending habits and ranges
            </p>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Average Spending */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow hover:shadow-lg transition-shadow flex flex-col justify-between">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-700 rounded-lg flex items-center justify-center text-cyan-600 dark:text-cyan-300 text-xl">
                💸
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase">
                  Average Daily Spending
                </p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                  ${averageExpense.toFixed(2)}
                </h3>
              </div>
            </div>
            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-500 dark:bg-cyan-400 transition-all"
                style={{ width: `${Math.min(averageExpense / 1000, 100)}%` }}
              ></div>
            </div>
          </div>

          {/* Highest Expense */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow hover:shadow-lg transition-shadow flex flex-col justify-between border-l-4 border-red-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-700 rounded-lg flex items-center justify-center text-red-600 dark:text-red-300 text-xl">
                ↑
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase">
                  Highest Expense
                </p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                  {highestExpense !== undefined ? `$${highestExpense}` : 'No data'}
                </h3>
              </div>
            </div>
            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-red-500 dark:bg-red-400 transition-all"
                style={{ width: `${Math.min(highestExpense / 1000, 100)}%` }}
              ></div>
            </div>
          </div>

          {/* Lowest Expense */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow hover:shadow-lg transition-shadow flex flex-col justify-between border-l-4 border-cyan-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-700 rounded-lg flex items-center justify-center text-cyan-600 dark:text-cyan-300 text-xl">
                ↓
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase">
                  Lowest Expense
                </p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                  {lowestExpense !== undefined ? `$${lowestExpense}` : 'No data'}
                </h3>
              </div>
            </div>
            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-500 dark:bg-cyan-400 transition-all"
                style={{ width: `${Math.min(lowestExpense / 1000, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching expense statistics:', error);
    return (
      <div className="p-6">
        <div className="bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-300 p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-800 rounded-lg flex items-center justify-center text-xl">
              ⚠️
            </div>
            <div>
              <h2 className="font-bold text-lg">Error Loading Data</h2>
              <p className="text-sm mt-1">
                Unable to fetch expense statistics. Please try again later.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ExpenseStats;
