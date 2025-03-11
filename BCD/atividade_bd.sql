USE jonathan;

USE jonathan;

CREATE TABLE autores(
	id_autor INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    data_nascimento VARCHAR(50)
    );

CREATE TABLE livro(
    isbn CHAR(13) PRIMARY KEY NOT NULL,
    titulo VARCHAR(200) NOT NULL,
    descricao TEXT,
    categoria VARCHAR(200)
);

CREATE TABLE biblioteca(
	id_biblioteca INT PRIMARY KEY AUTO_INCREMENT,
    cnpj VARCHAR(200),
    nome VARCHAR(200) NOT NULL,
    bairo VARCHAR(200),
    rua VARCHAR(200),
    numero INT,
    estado VARCHAR(200),
    telefone VARCHAR(200)
);

CREATE TABLE usuarios(
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    bairo VARCHAR(200),
    rua VARCHAR(200),
    numero INT,
    data_registro DATE,
    email VARCHAR(200)
);

CREATE TABLE emprestimos(
	id_emprestimos INT PRIMARY KEY AUTO_INCREMENT,
	data_emprestimos DATE,
    data_retorno DATE
);

CREATE TABLE emprestimo_has_livro(
	id_emprestimo_livro INT PRIMARY KEY AUTO_INCREMENT,
    isbn varchar(200),
    id_usuario INT,
    FOREIGN KEY (isbn) REFERENCES livro(isbn),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE livro_has_autor(
	id_livro_autor INT PRIMARY KEY AUTO_INCREMENT,
    isbn varchar(200),
    id_autor INT,
    FOREIGN KEY (isbn) REFERENCES livro(isbn),
    FOREIGN KEY (id_autor) REFERENCES autores(id_autor)
);

INSERT INTO autores (nome, data_nascimento) VALUES 
('George Orwell', '25/06/1903'),
('J.K. Rowling', '31/07/1965'),
('J.R.R. Tolkien', '03/01/1892'),
('James Dashner', '26/11/1972'),
('Isaac Asimov', '02/01/1920'),
('Rick Riordan', '05/06/1964');

INSERT INTO livro (isbn, titulo, descricao, categoria) VALUES 
('9781451673319', 'Fahrenheit 451', 'Romance distópico sobre um futuro onde livros são proibidos.', 'Ficção Científica'),
('9780439139595', 'Harry Potter e o Prisioneiro de Azkaban', 'Terceiro livro da série Harry Potter.', 'Fantasia'),
('9780261103573', 'O Senhor dos Anéis: A Sociedade do Anel', 'Primeiro livro da trilogia O Senhor dos Anéis.', 'Fantasia'),
('9780385737951', 'Maze Runner: Correr ou Morrer', 'Jovens presos em um labirinto mortal precisam encontrar uma saída.', 'Ficção Científica'),
('9780553293357', 'Fundação', 'Início da saga Fundação.', 'Ficção Científica'),
('9781423103349', 'Percy Jackson e os Olimpianos: O Ladrão de Raios', 'Jovem descobre ser filho de um deus grego e embarca em uma aventura.', 'Fantasia');

INSERT INTO livro_has_autor (isbn, id_autor) VALUES 
('9781451673319', 1),
('9780439139595', 2),
('9780261103573', 3),
('9780385737951', 4),
('9780553293357', 5),
('9781423103349', 6);

INSERT INTO biblioteca (cnpj, nome, bairo, rua, numero, estado, telefone) VALUES 
('12.345.678/0001-99', 'Biblioteca Central', 'Centro', 'Av. Principal', 100, 'SP', '(11) 1234-5678'),
('98.765.432/0001-88', 'Biblioteca do Saber', 'Bairro Novo', 'Rua das Letras', 200, 'RJ', '(21) 9876-5432'),
('45.678.912/0001-77', 'Biblioteca do Conhecimento', 'Zona Norte', 'Rua da Educação', 150, 'MG', '(31) 3456-7890');

INSERT INTO usuarios (bairo, rua, numero, data_registro, email) VALUES 
('Centro', 'Av. Principal', 101, '2023-05-10', 'joao@email.com'),
('Bairro Novo', 'Rua das Letras', 202, '2023-06-15', 'maria@email.com'),
('Zona Norte', 'Rua da Educação', 303, '2023-07-20', 'carlos@email.com'),
('Centro', 'Av. Secundária', 404, '2023-08-25', 'ana@email.com'),
('Bairro Novo', 'Rua do Aprendizado', 505, '2023-09-30', 'pedro@email.com');

INSERT INTO emprestimos (data_emprestimos, data_retorno) VALUES 
('2024-03-01', '2024-03-15'),
('2024-03-05', '2024-03-20'),
('2024-03-10', '2024-03-25'),
('2024-03-15', '2024-03-30'),
('2024-03-20', '2024-04-05');

INSERT INTO emprestimo_has_livro (isbn, id_usuario) VALUES 
('9781451673319', 1),
('9780439139595', 2), 
('9780261103573', 3), 
('9780385737951', 4),
('9780553293357', 5), 
('9781423103349', 1);
