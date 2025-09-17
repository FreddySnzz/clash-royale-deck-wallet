import { NextResponse } from "next/server"; 
import axios from "axios"; 

export async function GET() { 
  try { 
    const { data } = await axios.get(
      "https://api.clashroyale.com/v1/cards", { 
        headers: { 
          Authorization: `Bearer ${process.env.API_KEY}`, 
        }
      }
    ); 
      
    return NextResponse.json(data); 
  } catch (error: any) { 
    return NextResponse.json(
      { error: error.message }, 
      { status: 500 }
    );
  };
};