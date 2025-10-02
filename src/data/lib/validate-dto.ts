import { plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

export function validateDto<T>(cls: new () => T, obj: unknown): T {
  const dto = plainToInstance(cls, obj);
  const errors = validateSync(dto as any);
  if (errors.length > 0) {
    throw new Error(JSON.stringify(errors));
  };

  return dto;
};