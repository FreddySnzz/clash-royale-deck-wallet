
import { DeleteResult, Repository } from "typeorm";
import { getDataSource } from "@/data-source";
import { UserEntity } from "@/data/entities/User.entity";
import { CreateUserDto } from "../dtos/User/create-user.dto";

export class UserRepository {
  private userRepository: Repository<UserEntity>;

  constructor(userRepository: Repository<UserEntity>) {
    this.userRepository = userRepository;
  };

  static async init() {
    const ds = await getDataSource();
    return new UserRepository(ds.getRepository(UserEntity));
  };

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  };

  async findById(id: number): Promise<UserEntity | null> {
    return this.userRepository.findOne({ where: { id } });
  };

  async findByTag(tag: string): Promise<UserEntity | null> {
    return this.userRepository.findOne({ where: { tag } });
  };

  async create(createUser: CreateUserDto): Promise<UserEntity> {
    const user = this.userRepository.create(createUser);
    return this.userRepository.save(user);
  };

  async delete(id: number): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
};
