import { NextResponse } from "next/server";
import { UserService } from "@/services/user.service";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const service = await UserService.init();
  const user = await service.getUserById(Number(params.id));

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  };

  return NextResponse.json(user);
};

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const service = await UserService.init();
  const user = await service.getUserById(Number(params.id));

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  };
  
  await service.deleteUserById(user.id);

  return NextResponse.json({ message: "User deleted" });
};