export const SUNSIZE = 50;

export class Planet {
  size: [number, number, number];
  position: [number, number, number];
  texture: string;
  rotationSpeed: number;
  constructor(
    size: [number, number, number],
    position: [number, number, number],
    texture: string,
    rotationSpeed: number
  ) {
    this.size = size;
    this.position = position;
    this.texture = texture;
    this.rotationSpeed = rotationSpeed;
  }
}
