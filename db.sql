USE solar_system;

CREATE TABLE IF NOT EXISTS `Bodies` (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  moons VARCHAR(255),
  semimajorAxis BIGINT,
  periphelion BIGINT,
  aphelion BIGINT,
  eccentricity FLOAT,
  inclination FLOAT,
  mass BIGINT,
  vol BIGINT,
  density FLOAT,
  gravity FLOAT,
  escape FLOAT,
  meanRadius INT ,
  equaRadius INT ,
  polarRadius INT ,
  sideralOrbit FLOAT,
  sideralRotation FLOAT,
  discoveredBy VARCHAR(255),
  discoveryDate VARCHAR(255)
);