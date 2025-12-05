import {NextResponse} from "next/server";
import {categorizeExpense} from "../../../lib/ai"
export async function POST(req: Request) {
    try{
        const {description} = await req.json()
        const category = await categorizeExpense(description)
        return NextResponse.json({category})
    }catch (error) {
        console.error('❌ Error in suggest-category route:', error);
        return NextResponse.json(
          {
            category: 'Other',
            error: 'Unable to suggest category at this time',
          },
          { status: 500 }
        );
      }}
