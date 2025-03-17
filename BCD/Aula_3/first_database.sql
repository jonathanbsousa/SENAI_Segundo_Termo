CREATE DATABASE jonathan;
USE jonathan;

CREATE TABLE autores(
	id_autor INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    data_nascimento VARCHAR(50)
    );

CREATE TABLE livro(
	id_livro INT PRIMARY KEY AUTO_INCREMENT,
    isbn CHAR(13) NOT NULL,
    titulo VARCHAR(200) NOT NULL,
    descricao TEXT,
    categoria VARCHAR(200)
);

CREATE TABLE biblioteca(
	id_biblioteca INT PRIMARY KEY AUTO_INCREMENT,
    
);