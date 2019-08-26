import { Level } from '../level/level.model';
import { User } from '../user/user.model';

export class Comment {
    id: number;
    user: User;
    children? : Comment[];
    active: boolean;
    dateCreated: Date;
    dateEdited?: Date;
    editedBy?: User;
}