import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    create(createUserDto: CreateUserDTO): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): string;
    findOne(email: string): Promise<User>;
    remove(id: string): Promise<string>;
}
