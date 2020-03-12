USE solar_system;

CREATE TABLE IF NOT EXISTS `Planets` (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  mass INT NOT NULL,
  gravity FLOAT NOT NULL,
  radius INT NOT NULL
);

CREATE TABLE IF NOT EXISTS `Moons` (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  mass INT NOT NULL,
  gravity FLOAT NOT NULL,
  radius INT NOT NULL,
  fk_planet_id INT,
  FOREIGN KEY (fk_planet_id) REFERENCES Planets(id)
);