import { User } from '../user/user.model';

export class Comment {
    id: number;
    user: User;
    children? : Comment[];
    levelId: number;
    parentId?: number;
    message: string;
    active: boolean;
    dateCreated: Date;
    dateEdited?: Date;
}