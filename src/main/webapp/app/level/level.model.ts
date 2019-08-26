import {Category} from "../category/category.model";
import {User} from "../user/user.model";

export class Level {
    id: number;
    title: string;
    description: string;
    category: Category;
    user: User;
    containers: LevelContainer[];
    dateCreated: Date;
    dateEdited: Date;
    comments: Comment[];
    evaluationPos: number;
    evaluationNeg: number;
}