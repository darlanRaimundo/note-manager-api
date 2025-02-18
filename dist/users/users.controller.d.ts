import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDTO: CreateUserDTO): Promise<import("mongoose").Document<unknown, {}, import("./interfaces/user.interface").User> & import("./interfaces/user.interface").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): string;
    findOne(email: string): Promise<import("./interfaces/user.interface").User>;
    remove(id: string): Promise<string>;
}
