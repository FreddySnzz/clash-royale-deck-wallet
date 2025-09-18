import "reflect-metadata";
import { DataSource } from "typeorm";
// import { UserEntity } from "./app/api/user/entities/user.entity";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: false, 
  logging: true,
  // entities: [UserEntity],
});
