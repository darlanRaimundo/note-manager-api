import { User } from 'src/users/interfaces/user.interface';
export interface SignInOutput {
    access_token: string;
}
export interface SignUpOutput {
    access_token: string;
    user: User;
}
