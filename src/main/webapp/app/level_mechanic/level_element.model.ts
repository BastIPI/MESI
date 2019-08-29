import { ElementImage } from '../element_image/element_image.model';

export class LevelElement {
    id: number;
    name: string;
    cssBase: string;
    cssToFind: string;
    elementImage: ElementImage;
    text: string;
    order: number;
}