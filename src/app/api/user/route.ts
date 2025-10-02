import { NextResponse } from "next/server";
import { fail, success } from "@/data/lib/api-response";
import { validateDto } from "@/data/lib/validate-dto";

import { CreateUserDto } from "@/data/dtos/User/create-user.dto";
import { UserService } from "@/services/user.service";

export async function GET() {
  try {
    const service = await UserService.init();
    const users = await service.getAllUsers();
  
    return NextResponse.json(users);
  } catch(error: any) {
    return fail(error.message || "Erro interno", 500);
  };
};