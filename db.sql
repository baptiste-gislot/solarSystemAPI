USE solar_system;

CREATE TABLE IF NOT EXISTS `Bodies` (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  moons VARCHAR(255),
  semimajorAxis BIGINT ,
  periphelion INT ,
  aphelion INT ,
  eccentricity FLOAT ,
  inclination FLOAT NOT NULL,
  mass BIGINT NOT NULL,
  vol BIGINT,
  density FLOAT NOT NULL,
  gravity FLOAT NOT NULL,
  escape FLOAT NOT NULL,
  meanRadius INT NOT NULL,
  equaRadius INT NOT NULL,
  polarRadius INT NOT NULL,
  sideralOrbit FLOAT,
  sideralRotation FLOAT,
  discoveredBy VARCHAR(255),
  discoveryDate VARCHAR(255)
);