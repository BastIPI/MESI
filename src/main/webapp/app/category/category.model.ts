export class Category {
  id: number;
  title: string;
  description: string;

  constructor(d: any){
    this.id = d.id;
    this.title = d.title;
    this.description = d.description;
}
}
