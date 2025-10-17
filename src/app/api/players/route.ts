import { NextResponse } from "next/server";
import { 
  createUser, 
  getUsers,
  UserServiceError, 
} from "@/services/user.service";

export async function GET() {
  try {
    const users = await getUsers();
  
    return NextResponse.json(
      users, { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" }, 
      { status: 500 }
    );
  };
};

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const user = await createUser(data);

    return NextResponse.json(
      user, { status: 201 }
    );
  } catch (error) {
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
