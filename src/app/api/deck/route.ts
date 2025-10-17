import { NextResponse } from "next/server";
import { 
  createDeck, 
  DeckServiceError, 
  deleteDeck, 
  getDecks, 
  updateDeck
} from "@/services/deck.service";

export async function GET() {
  try {
    const decks = await getDecks();
  
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

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const deck = await createDeck(data);
  
    return NextResponse.json(
      deck, { status: 201 }
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
  }
};

export async function PATCH(req: Request) {
  try {
    const data = await req.json();
    await updateDeck(data);
  
    return NextResponse.json(
      { 
        message: "Deck updated",
        status: 200 
      }
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
  }
};

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const deckId = searchParams.get("deck_id");
    const response = await deleteDeck(deckId!);

    return NextResponse.json(
      { 
        message: "Deck deleted successfully!",
        status: 200
      }
    );
  } catch (error) {
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
}