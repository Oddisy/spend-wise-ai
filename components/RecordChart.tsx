import getRecords from '@/app/actions/getRecord';
import LineChart from './LineChart'

const RecordChart = async () => {
  const { records, error } = await getRecords();


  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-4 sm:p-6 rounded-2xl shadow-lg shadow-black/10 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition">
      {children}
    </div>
  );

  const Header = () => (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-9 h-9 bg-linear-to-br from-slate-800 via-slate-700 to-cyan-500 rounded-xl flex items-center justify-center shadow-md">
        <span className="text-white text-sm">📊</span>
      </div>
      <div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          Expenses Chart
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Visual representation of your spending
        </p>
      </div>
    </div>
  );

  if (error) {
    return (
      <Wrapper>
        <Header />
        <div className="bg-red-50/80 dark:bg-red-900/20 backdrop-blur-sm p-4 rounded-xl border-l-4 border-red-500">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm">⚠️</span>
            <p className="text-sm font-semibold text-red-700 dark:text-red-300">
              Error loading chart data
            </p>
          </div>
          <p className="text-xs text-red-600 dark:text-red-400 ml-6">
            {error}
          </p>
        </div>
      </Wrapper>
    );
  }

  if (!records || records.length === 0) {
    return (
      <Wrapper>
        <Header />
        <div className="text-center py-8">
          <div className="w-20 h-20 bg-linear-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
            <span className="text-3xl">📈</span>
          </div>
          <h4 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-1">
            No Data to Display
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            Start tracking your expenses to see insights visualized here.
          </p>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Header />
      <div className="overflow-x-auto">
        <LineChart
          records={records.map((record) => ({
            ...record,
            date: String(record.date),
          }))}
        />
      </div>
    </Wrapper>
  );
};

export default RecordChart;
