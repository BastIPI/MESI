import {Category} from "../category/category.model";
import {User} from "../user/user.model";
import {Evaluation} from "../evaluation/evaluation.model";

export class Level {
    id: number;
    title: string;
    description: string;
    category: Category;
    user: User;
    dateCreation: Date;
    comments: Comment[];
    evaluations: Evaluation[];
}
