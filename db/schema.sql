CREATE DATABASE burgers_db;

USE DATABASE burgers_db;

CREATE TABLE burgers {
    id INTEGER NOT NULL AUTO INCREMENT,
    burger_name VARCHAR(50),
    devoured BOOLEAN
};