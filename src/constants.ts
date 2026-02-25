const SMOOTHNESS = 50;
const SIZE_MULT = 1;
const DIST_MULT = 1;
const ROTATION_SPEED = 3.14;

const EARTH_SIZE = 50 * SIZE_MULT;
const EARTH_DIST = 9300 * DIST_MULT;
const EARTH_ROTATION_SPEED = 0.0001211 * ROTATION_SPEED;

const SUN_SIZE = 5450 * SIZE_MULT;
const SUN_DIST = 0 * DIST_MULT;
const SUN_ROTATION_SPEED = 0.0000953 * ROTATION_SPEED;

const MERCURY_SIZE = 19 * SIZE_MULT;
const MERCURY_DIST = 3600 * DIST_MULT;
const MERCURY_ROTATION_SPEED = 0.0000021 * ROTATION_SPEED;

const VENUS_SIZE = 47 * SIZE_MULT;
const VENUS_DIST = 6700 * DIST_MULT;
const VENUS_ROTATION_SPEED = -0.0000007 * ROTATION_SPEED;

const MARS_SIZE = 27 * SIZE_MULT;
const MARS_DIST = 14200 * DIST_MULT;
const MARS_ROTATION_SPEED = 0.0001176 * ROTATION_SPEED;

const JUPITER_SIZE = 560 * SIZE_MULT;
const JUPITER_DIST = 48400 * DIST_MULT;
const JUPITER_ROTATION_SPEED = 0.000293 * ROTATION_SPEED;

const SATURN_SIZE = 470 * SIZE_MULT;
const SATURN_DIST = 88800 * DIST_MULT;
const SATURN_ROTATION_SPEED = 0.000263 * ROTATION_SPEED;

const URANUS_SIZE = 200 * SIZE_MULT;
const URANUS_DIST = 178600 * DIST_MULT;
const URANUS_ROTATION_SPEED = -0.000101 * ROTATION_SPEED;

const NEPTUNE_SIZE = 194 * SIZE_MULT;
const NEPTUNE_DIST = 279900 * DIST_MULT;
const NEPTUNE_ROTATION_SPEED = 0.000112 * ROTATION_SPEED;

const STARS_SIZE = 5450000 * SIZE_MULT;
const STARS_DIST = 0 * DIST_MULT;
const STARS_ROTATION_SPEED = -0.0000953 * ROTATION_SPEED;

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

export const sunDetails = new Planet(
  [SUN_SIZE / 2, SMOOTHNESS, SMOOTHNESS],
  [SUN_DIST, 0, 0],
  "/planet-textures/Solarsystemscope_texture_2k_sun.jpg",
  SUN_ROTATION_SPEED
);

export const mercuryDetails = new Planet(
  [MERCURY_SIZE / 2, SMOOTHNESS, SMOOTHNESS],
  [MERCURY_DIST, 0, 0],
  "/planet-textures/Solarsystemscope_texture_2k_mercury.jpg",
  MERCURY_ROTATION_SPEED
);

export const venusDetails = new Planet(
  [VENUS_SIZE / 2, SMOOTHNESS, SMOOTHNESS],
  [VENUS_DIST, 0, 0],
  "/planet-textures/Solarsystemscope_texture_2k_venus_surface.jpg",
  VENUS_ROTATION_SPEED
);

export const earthDetails = new Planet(
  [EARTH_SIZE / 2, SMOOTHNESS, SMOOTHNESS],
  [EARTH_DIST, 0, 0],
  "/planet-textures/Solarsystemscope_texture_2k_earth_daymap.jpg",
  EARTH_ROTATION_SPEED
);

export const marsDetails = new Planet(
  [MARS_SIZE / 2, SMOOTHNESS, SMOOTHNESS],
  [MARS_DIST, 0, 0],
  "/planet-textures/Solarsystemscope_texture_2k_mars.jpg",
  MARS_ROTATION_SPEED
);

export const jupiterDetails = new Planet(
  [JUPITER_SIZE / 2, SMOOTHNESS, SMOOTHNESS],
  [JUPITER_DIST, 0, 0],
  "/planet-textures/Solarsystemscope_texture_2k_jupiter.jpg",
  JUPITER_ROTATION_SPEED
);

export const saturnDetails = new Planet(
  [SATURN_SIZE / 2, SMOOTHNESS, SMOOTHNESS],
  [SATURN_DIST, 0, 0],
  "/planet-textures/Solarsystemscope_texture_2k_saturn.jpg",
  SATURN_ROTATION_SPEED
);

export const uranusDetails = new Planet(
  [URANUS_SIZE / 2, SMOOTHNESS, SMOOTHNESS],
  [URANUS_DIST, 0, 0],
  "/planet-textures/Solarsystemscope_texture_2k_uranus.jpg",
  URANUS_ROTATION_SPEED
);

export const neptuneDetails = new Planet(
  [NEPTUNE_SIZE / 2, SMOOTHNESS, SMOOTHNESS],
  [NEPTUNE_DIST, 0, 0],
  "/planet-textures/Solarsystemscope_texture_2k_neptune.jpg",
  NEPTUNE_ROTATION_SPEED
);

export const starsDetails = new Planet(
  [STARS_SIZE / 2, SMOOTHNESS, SMOOTHNESS],
  [STARS_DIST, 0, 0],
  "/planet-textures/stars3.jpg",
  STARS_ROTATION_SPEED
);
