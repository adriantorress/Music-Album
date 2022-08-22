CREATE DATABASE `music-album-bd`;
USE `music-album-bd`;

CREATE TABLE `usuario` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `sobrenome` varchar(45) NOT NULL,
  `nomeUsuario` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `celular` varchar(45) NOT NULL,
  `senha` varchar(16) NOT NULL,
  `genero` varchar(20) NOT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE KEY `nomeUsuario_UNIQUE` (`nomeUsuario`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `celular_UNIQUE` (`celular`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

SELECT * FROM `music-album-bd`.usuario;
TRUNCATE TABLE  `music-album-bd`.usuario;