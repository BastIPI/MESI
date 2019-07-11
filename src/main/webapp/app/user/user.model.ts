export class User {
    id: number;
    userName: string;
    password?: string;
    firstName: string;
    lastName: string;
    email: string;
    activated: boolean;
    token?: string;
    createdDate: Date;
    rememberMe?: boolean;
    authorities?: any[];
}