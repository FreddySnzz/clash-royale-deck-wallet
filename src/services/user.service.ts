import { DeleteResult } from "typeorm";
import { UserEntity } from "@/data/entities/User.entity";
import { UserRepository } from "@/data/repositories/user.repository";

import { CreateUserDto } from "@/data/dtos/User/create-user.dto";

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  };

  static async init() {
    const userRepository = await UserRepository.init();
    return new UserService(userRepository);
  };

  async getAllUsers(): Promise<UserEntity[]> {
    return this.userRepository.findAll();
  };

  async getUserById(id: number): Promise<UserEntity | null> {
    return this.userRepository.findById(id);
  };

  async getUserByTag(tag: string): Promise<UserEntity | null> {
    return this.userRepository.findByTag(tag);
  };

  async createUser(createUser: CreateUserDto): Promise<UserEntity> {
    const user = this.getUserByTag(createUser.tag)
    return this.userRepository.create(createUser);
  };

  async deleteUserById(id: number): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  };
};
