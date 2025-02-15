import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignInOutput, SignUpOutput } from './interfaces/auth.interface';
import { SignUpDTO } from './dto/signup.dto';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<SignInOutput> {
    const user = await this.usersService.findOne(username);

    if (!user || !(await bcrypt.compare(pass, user.password))) {
      throw new UnauthorizedException('Verifique suas credenciais');
    }

    const payload = { sub: user._id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(signUpDto: SignUpDTO): Promise<SignUpOutput> {
    const { name, email, password } = signUpDto;

    if (await this.usersService.findOne(email)) {
      throw new UnauthorizedException('Usuário já cadastrado');
    }

    const hashedPassword: string = await bcrypt.hash(password, 10);

    const user: User = await this.usersService.create({
      name,
      email,
      password: hashedPassword,
    });

    const payload = { sub: user._id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user,
    };
  }
}
