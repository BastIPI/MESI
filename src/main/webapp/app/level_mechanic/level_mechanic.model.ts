import { LevelElement } from './level_element.model';
import { Category } from '../category/category.model';
import { User } from '../user/user.model';

export class LevelMechanic {
    id: number;
    title: string;
    description: string;
    levelElements: LevelElement[];
    containerCssBase: string;
    containerCssToFind: string;
    category?: Category;
    user?: User;
    dateCreated?: Date;
    dateEdited?: Date;
    active?: boolean;
    split: boolean;
}