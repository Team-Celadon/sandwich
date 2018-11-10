DROP DATABASE IF EXISTS sandwiches_db;

CREATE DATABASE sandwiches_db;

USE sandwiches_db;

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    phone INT(10) NOT NULL,
    password VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE sandwich (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE toppings (
    id INT NOT NULL AUTO_INCREMENT,
    topping VARCHAR(100) NOT NULL,
    sandwich_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (sandwich_id) REFERENCES sandwich(id)
);

CREATE TABLE meat (
    id INT NOT NULL AUTO_INCREMENT,
    meat_type VARCHAR(50) NULL,
    sandwich_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (sandwich_id) REFERENCES sandwich(id)
);


CREATE TABLE ratings (
    id INT NOT NULL AUTO_INCREMENT,
    rating INT(2) NOT NULL,
    user_id INT NOT NULL,
    sandwich_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (sandwich_id) REFERENCES sandwich(id)
)