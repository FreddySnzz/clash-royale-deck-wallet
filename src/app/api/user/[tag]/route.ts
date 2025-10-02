import { NextResponse } from "next/server";
import { UserService } from "@/services/user.service";

export async function GET(
  req: Request,
  { params }: { params: { tag: string } }
) {
  const service = await UserService.init();
  const user = await service.getUserByTag(params.tag);

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  };

  return NextResponse.json(user);
};