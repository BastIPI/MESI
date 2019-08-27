import {Category} from "../category/category.model";
import {User} from "../user/user.model";
import {Comment} from "../comment/comment.model";

export class Level {
    id: number;
    title: string;
    description: string;
    category: Category;
    user: User;
    dateCreated: Date;
    dateEdited: Date;
    comments: Comment[];
    evaluationPos: number;
    evaluationNeg: number;
    
    constructor(d: any){
        this.id = d.id;
        this.title = d.title;
        this.description = d.description;
        this.dateCreated = d.dateCreated;
        this.dateEdited = d.dateEdited;
        this.category = d.category;
        this.evaluationPos = d.evaluationPos;
        this.evaluationNeg = d.evaluationNeg;
    }
}