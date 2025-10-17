import { NextResponse } from "next/server";
import { 
  getUserByTag, 
  UserServiceError 
} from "@/services/user.service";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const tag = searchParams.get("user_tag");
    const user = await getUserByTag(tag!);
  
    return NextResponse.json(
      user, { status: 200 }
    );
  } catch(error) {
    if (error instanceof UserServiceError) {
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