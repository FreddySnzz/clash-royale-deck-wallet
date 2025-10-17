import { NextResponse } from "next/server";
import { 
  DeckServiceError, 
  getDecksByUser,
} from "@/services/deck.service";

export async function GET(
  req: Request
) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("user_id");
    
    const decks = await getDecksByUser(userId!);
  
    return NextResponse.json(
      decks, { status: 200 }
    );
  } catch(error) {
    if (error instanceof DeckServiceError) {
      return NextResponse.json(
        { error: error.message }, 
        { status: error.status }
      );
    };

    return NextResponse.json(
      { error: "Internal Server Error" }, 
      { status: 500 }
    );
  };
};