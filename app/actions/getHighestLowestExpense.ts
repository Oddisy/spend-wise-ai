'use server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';

type ExpenseStatsResponse = {
  highestExpense: number;
  lowestExpense: number;
  error?: string;
};

async function getHighestLowestExpense(): Promise<ExpenseStatsResponse> {
  const {userId} = await auth();
  if (!userId) {
    return {
      highestExpense: 0,
      lowestExpense: 0,
      error: 'User not found',
    };
  }

  try {
    // Fetch all records for the authenticated user
    const records = await db.record.findMany({
      where:  {userId},
      select: { amount: true },
    });
    console.log('Fetched records for expense calculation:', records);

    if (!records || records.length === 0) {
      return { highestExpense: 0, lowestExpense: 0 }; // Return 0 if no records exist
    }

    const amounts = records.map((record) => record.amount);

    // Calculate best and worst expense amounts
    const highestExpense = Math.max(...amounts); // Highest amount
    const lowestExpense = Math.min(...amounts); // Lowest amount

    return { highestExpense, lowestExpense };
  } catch (error) {
    console.error('Error fetching expense amounts:', error); // Log the error
    return {   highestExpense: 0,
      lowestExpense: 0,
      error: 'User not found', };
  }
}

export default getHighestLowestExpense;