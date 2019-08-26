import { LevelElement } from './level_element.model';

export class LevelMechanic {
    id: number;
    title: string;
    description: string;
    elements: LevelElement[];
    cssBase: string;
    cssToFind: string;
}