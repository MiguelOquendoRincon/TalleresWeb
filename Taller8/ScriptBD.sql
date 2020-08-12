CREATE DATABASE taller8web;
USE taller8web;
CREATE TABLE tipoDocumento(
id integer NOT NULL,
nombre varchar(10),
descripcion varchar(20),
PRIMARY KEY(id)
);
CREATE TABLE ciudad(
id integer NOT NULL,
nombre varchar(60) NOT NULL,
descripcion varchar(60),
PRIMARY KEY(id)
);
CREATE TABLE persona(
id integer NOT NULL,
nombres varchar(60) NOT NULL,
apellidos varchar(60) NOT NULL,
fk_id_tipoDocumento integer NOT NULL,
documento integer NOT NULL,
fk_id_ciudad integer NOT NULL,
fechaNacimiento date NOT NULL,
email varchar(60) NOT NULL,
telefono integer NOT NULL,
usuario varchar(60) NOT NULL,
contrasena varchar(60) NOT NULL,
CONSTRAINT fk_persona_documento FOREIGN KEY(fk_id_tipoDocumento) REFERENCES tipoDocumento(id),
CONSTRAINT fk_persona_ciudad FOREIGN KEY(fk_id_ciudad) REFERENCES ciudad(id),
PRIMARY KEY(id)
)
