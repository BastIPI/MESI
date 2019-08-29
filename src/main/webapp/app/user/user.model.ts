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

    /*constructor(d: any){
        this.id = d.id;
        this.userName = d.userName;
        this.password = d.password;
        this.firstName = d.firstName;
        this.lastName = d.lastName;
        this.email = d.email;
        this.activated = d.activated;
        this.token = d.token;
        this.createdDate = d.createdDate;
        this.rememberMe = d.rememberMe;
        this.authorities = d.authorities;
    }*/
}