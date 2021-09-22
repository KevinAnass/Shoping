export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, disc: string, imagePath: string) {
    this.name = name;
    this.description = disc;
    this.imagePath = imagePath;
  }
}
