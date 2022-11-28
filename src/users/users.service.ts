import { Injectable } from "@nestjs/common";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./schemas/user.schema";
import { UsersRepository } from "./users.repository";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}

    async getUserById(user_id: string): Promise<User> {
        return this.usersRepository.findOne({ user_id })
    }

    async getUsers(): Promise<User[]> {
        return this.usersRepository.find({});
    }

    async createUser(user: User): Promise<User> {
        let hashPassword: string = await bcrypt.hash(user.password, 10);
        user.password = hashPassword;
        return this.usersRepository.create(
            user
        )
    }

    async updateUser(user_id: string, userUpdates: UpdateUserDto): Promise<User> {
        return this.usersRepository.findOneAndUpdate({ user_id }, userUpdates);
    }

    async findOneByEmail(email: string): Promise<User> {
        return this.usersRepository.findOneByEmail(email);
    }
}