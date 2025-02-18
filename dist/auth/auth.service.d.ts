import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignInOutput, SignUpOutput } from './interfaces/auth.interface';
import { SignUpDTO } from './dto/signup.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(username: string, pass: string): Promise<SignInOutput>;
    signUp(signUpDto: SignUpDTO): Promise<SignUpOutput>;
}
