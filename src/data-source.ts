import "reflect-metadata";
import { DataSource } from "typeorm";
import { UserEntity } from "@/data/entities/User.entity";

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./db/deck-royale-wallet.database.sqlite",
  synchronize: true,
  logging: true,
  entities: [UserEntity],
});

export const getDataSource = async () => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  };
  
  return AppDataSource;
};
