import { AuthService } from './auth.service';
import { SignUpDTO } from './dto/signup.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: Record<string, any>): Promise<import("./interfaces/auth.interface").SignInOutput>;
    getProfile(req: any): any;
    signUp(signUpDTO: SignUpDTO): Promise<import("./interfaces/auth.interface").SignUpOutput>;
}
