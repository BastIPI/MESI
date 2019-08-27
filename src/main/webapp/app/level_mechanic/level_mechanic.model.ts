import { LevelElement } from './level_element.model';
import { Category } from '../category/category.model';
import { User } from '../user/user.model';

export class LevelMechanic {
    id: number;
    title: string;
    description: string;
    levelElements: LevelElement[];
    cssBase: string;
    cssToFind: string;
    category?: Category;
    user?: User;
    dateCreated?: Date;
    dateEdited?: Date;
}