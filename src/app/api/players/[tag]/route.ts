import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: Request, { params }: { params: { tag: string } }) {
  const playerTag = params.tag;

  try {
    const { data } = await axios.get(`https://api.clashroyale.com/v1/players/${playerTag}`, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    });
    
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Erro Clash Royale API:", error.response?.data || error.message);
    return NextResponse.json(
      { error: error.response?.data || "Erro interno" },
      { status: error.response?.status || 500 }
    );
  }
}
