export class User {
    id: number;
    login: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    activated: boolean;
    token?: string;
    createdDate: Date;
}