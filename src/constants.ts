export const EARTH_SIZE = 50;
export const EARTH_DIST = 9300;
export const EARTH_ROTATION_SPEED = 0.000001211;

export const SUN_SIZE = 5450;
export const SUN_DIST = 0;
export const SUN_ROTATION_SPEED = 0.000000953;

export const MERCURY_SIZE = 19;
export const MERCURY_DIST = 3600;
export const MERCURY_ROTATION_SPEED = 0.000000021;

export const VENUS_SIZE = 47;
export const VENUS_DIST = 6700;
export const VENUS_ROTATION_SPEED = -0.000000007;

export const MARS_SIZE = 27;
export const MARS_DIST = 14200;
export const MARS_ROTATION_SPEED = 0.000001176;

export const JUPITER_SIZE = 560;
export const JUPITER_DIST = 48400;
export const JUPITER_ROTATION_SPEED = 0.00000293;

export const SATURN_SIZE = 470;
export const SATURN_DIST = 88800;
export const SATURN_ROTATION_SPEED = 0.00000263;

export const URANUS_SIZE = 200;
export const URANUS_DIST = 178600;
export const URANUS_ROTATION_SPEED = -0.00000101;

export const NEPTUNE_SIZE = 194;
export const NEPTUNE_DIST = 279900;
export const NEPTUNE_ROTATION_SPEED = 0.00000112;

export class Planet {
  public size: [number, number, number];
  public position: [number, number, number];
  public texture: string;
  public rotationSpeed: number;

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

export const sunDetails = new Planet(
  [SUN_SIZE, SUN_SIZE, SUN_SIZE],
  [SUN_DIST, 0, 0],
  "/public/planet-textures/Solarsystemscope_texture_2k_sun.jpg",
  SUN_ROTATION_SPEED
);

export const mercuryDetails = new Planet(
  [MERCURY_SIZE, MERCURY_SIZE, MERCURY_SIZE],
  [MERCURY_DIST, 0, 0],
  "/public/planet-textures/Solarsystemscope_texture_2k_mercury.jpg",
  MERCURY_ROTATION_SPEED
);

export const venusDetails = new Planet(
  [VENUS_SIZE, VENUS_SIZE, VENUS_SIZE],
  [VENUS_DIST, 0, 0],
  "/public/planet-textures/Solarsystemscope_texture_2k_venus_surface.jpg",
  VENUS_ROTATION_SPEED
);

export const earthDetails = new Planet(
  [EARTH_SIZE, EARTH_SIZE, EARTH_SIZE],
  [EARTH_DIST, 0, 0],
  "/public/planet-textures/Solarsystemscope_texture_2k_earth_daymap.jpg",
  EARTH_ROTATION_SPEED
);

export const marsDetails = new Planet(
  [MARS_SIZE, MARS_SIZE, MARS_SIZE],
  [MARS_DIST, 0, 0],
  "/public/planet-textures/Solarsystemscope_texture_2k_mars.jpg",
  MARS_ROTATION_SPEED
);

export const jupiterDetails = new Planet(
  [JUPITER_SIZE, JUPITER_SIZE, JUPITER_SIZE],
  [JUPITER_DIST, 0, 0],
  "/public/planet-textures/Solarsystemscope_texture_2k_jupiter.jpg",
  JUPITER_ROTATION_SPEED
);

export const saturnDetails = new Planet(
  [SATURN_SIZE, SATURN_SIZE, SATURN_SIZE],
  [SATURN_DIST, 0, 0],
  "/public/planet-textures/Solarsystemscope_texture_2k_saturn.jpg",
  SATURN_ROTATION_SPEED
);

export const uranusDetails = new Planet(
  [URANUS_SIZE, URANUS_SIZE, URANUS_SIZE],
  [URANUS_DIST, 0, 0],
  "/public/planet-textures/Solarsystemscope_texture_2k_uranus.jpg",
  URANUS_ROTATION_SPEED
);

export const neptuneDetails = new Planet(
  [NEPTUNE_SIZE, NEPTUNE_SIZE, NEPTUNE_SIZE],
  [NEPTUNE_DIST, 0, 0],
  "/public/planet-textures/Solarsystemscope_texture_2k_neptune.jpg",
  NEPTUNE_ROTATION_SPEED
);
