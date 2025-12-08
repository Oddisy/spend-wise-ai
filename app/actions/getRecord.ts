'use server';
import { db } from '@/lib/db';
import { Record } from '@/types/Record';
import {checkUser} from "../../lib/checkuser";

async function getRecords(): Promise<{
  records?: Record[];
  error?: string;
}> {
const user =  await checkUser();
const userId = user?.clerkUserid;
  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    const g = await db.record.findMany();
    console.log('Database connection test, records count:', g);
    const records = await db.record.findMany({
      where: { userId },
      orderBy: {
        date: 'desc', // Sort by the `date` field in descending order
      },
      take: 10, // Limit the request to 10 records
    });
    console.log('Fetched records:', records);

    return { records };
  } catch (error) {
    console.error('Error fetching records:', error); // Log the error
    return { error: 'Database error' };
  }
}

export default getRecords;