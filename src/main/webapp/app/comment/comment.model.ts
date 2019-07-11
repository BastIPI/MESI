import { Level } from '../level/level.model';
import { User } from '../user/user.model';

export class Comment {
    id: number;
    user: User;
    level: Level;
    children? : Comment[];
    active: boolean;
    createdDate: Date;
    editedDate?: Date;
    editedBy?: User;
}