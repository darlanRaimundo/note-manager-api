import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id);
    return user;
  }

  async remove(id: string) {
    await this.userModel.findByIdAndDelete(id);
    return `This action removes a #${id} user`;
  }
}
