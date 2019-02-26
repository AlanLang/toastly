export class Shape {
  area: number;
  color: string;
  constructor ( name: string, width: number, height: number ) {
    this.area = width * height;
    this.color = "pink";
  };

  shoutout() {
      return "I'm " + this.color + " with an area of " + this.area + " cm squared.";
  }
}