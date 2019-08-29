import { Level } from '../level/level.model';
import { User } from '../user/user.model';

export class Comment {
    id: number;
    user: User;
    children? : Comment[];
    message: string;
    active: boolean;
    dateCreated: Date;
    dateEdited?: Date;

    constructor(d: any){
        this.id = d.id;
        this.user = d.user;
        this.children = d.children;
        this.message = d.message;
        this.dateCreated = d.dateCreated;
        this.dateEdited = d.dateEdited;
    }
}