import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const { data } = await axios.get("https://cdn.statsroyale.com/v2/texts/pt.json");
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Erro Stats Royale JSON:", error.response?.data || error.message);
    return NextResponse.json(
      { error: error.response?.data || "Erro interno" },
      { status: error.response?.status || 500 }
    );
  }
}
