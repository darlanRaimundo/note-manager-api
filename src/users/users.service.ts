import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDTO) {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(email: string) {
    const users = await this.userModel.find({ email: email });
    return users[0] as User;
  }

  async remove(id: string) {
    await this.userModel.findByIdAndDelete(id);
    return `This action removes a #${id} user`;
  }
}
