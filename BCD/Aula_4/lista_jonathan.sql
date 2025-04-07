DROP DATABASE IF EXISTS sistema_treinamentos;
CREATE DATABASE sistema_treinamentos;
USE sistema_treinamentos;
-- INSTRUTORES
CREATE TABLE instrutores (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
especialidade VARCHAR(100)
) AUTO_INCREMENT=101;
-- MATÉRIAS
CREATE TABLE materias (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100)
) AUTO_INCREMENT=201;
-- TURMAS
CREATE TABLE turmas (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
data_inicio DATE,
data_fim DATE
) AUTO_INCREMENT=301;
-- ALUNOS
CREATE TABLE alunos (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
email VARCHAR(100),
turma_id INT,
FOREIGN KEY (turma_id) REFERENCES turmas(id)
) AUTO_INCREMENT=401;
-- INSTRUTOR x MATÉRIA
CREATE TABLE instrutor_materia (
instrutor_id INT,
materia_id INT,
PRIMARY KEY (instrutor_id, materia_id),
FOREIGN KEY (instrutor_id) REFERENCES instrutores(id),
FOREIGN KEY (materia_id) REFERENCES materias(id)

);
-- ATIVIDADES
CREATE TABLE atividades (
id INT PRIMARY KEY AUTO_INCREMENT,
descricao VARCHAR(255),
turma_id INT,
materia_id INT,
instrutor_id INT,
FOREIGN KEY (turma_id) REFERENCES turmas(id),
FOREIGN KEY (materia_id) REFERENCES materias(id),
FOREIGN KEY (instrutor_id) REFERENCES instrutores(id)
);
-- INSERÇÕES
INSERT INTO instrutores (nome, especialidade) VALUES
('Ana Souza', 'Excel'),
('Carlos Lima', 'Segurança'),
('Marina Costa', 'Liderança'),
('Eduardo Ramos', 'Comunicação'),
('Juliana Martins', 'Empreendedorismo'),
('Bruno Teixeira', 'Inovação');
INSERT INTO materias (nome) VALUES
('Excel Avançado'),
('Segurança no Ambiente Industrial'),
('Liderança e Trabalho em Equipe'),
('Comunicação Empresarial'),
('Empreendedorismo Digital'),
('Gestão da Inovação');
INSERT INTO turmas (nome, data_inicio, data_fim) VALUES
('Turma A', '2025-03-01', '2025-03-15'),
('Turma B', '2025-04-01', '2025-04-10'),
('Turma C', '2025-05-05', '2025-05-20'),
('Turma D', '2025-06-10', '2025-06-25'),
('Turma E', '2025-07-01', '2025-07-15'),
('Turma F', '2025-08-01', '2025-08-12');
-- Pegando os IDs reais gerados
-- Aqui é necessário fazer SELECTs para pegar os valores certos de cada ID
-- Mas pra facilitar, vamos continuar na mesma ordem da inserção (sabendo que começa em 101, 201, etc)
INSERT INTO alunos (nome, email, turma_id) VALUES
('Lucas Pereira', 'lucas.p@email.com', 301),
('Mariana Silva', 'mariana.s@email.com', 301),
('João Almeida', 'joao.a@email.com', 302),
('Beatriz Costa', 'beatriz.c@email.com', 303),
('Fernanda Rocha', 'fernanda.r@email.com', 303),
('Gabriel Nunes', 'gabriel.n@email.com', 304);
-- INSTRUTOR x MATÉRIA
INSERT INTO instrutor_materia (instrutor_id, materia_id) VALUES
(101, 201),
(102, 202),
(103, 203),
(104, 204),
(105, 205),
(106, 206);
-- ATIVIDADES
INSERT INTO atividades (descricao, turma_id, materia_id, instrutor_id) VALUES
('Oficina de Excel com dashboards', 301, 201, 101),
('Palestra sobre segurança no trabalho', 302, 202, 102),
('Workshop de liderança prática', 303, 203, 103),
('Atividade de simulação de atendimento', 304, 204, 104),
('Laboratório de inovação em startups', 305, 206, 106),
('Criação de plano de negócio digital', 306, 205, 105);

SELECT aluno.nome, turma.nome FROM aluno
INNER JOIN turma ON aluno.turma_id = turma.id;

SELECT atividade.descricao, turma.nome, materia.nome, instrutor.nome FROM atividade
INNER JOIN turma ON atividade.turma_id = turma.id
INNER JOIN materia ON atividade.materia_id = materia.id
INNER JOIN instrutor ON atividade.instrutor_id = instrutor.id;

SELECT instrutor.nome, materia.nome FROM instrutor
INNER JOIN instrutor_materia ON instrutor.id = instrutor_materia.instrutor_id
INNER JOIN materia ON instrutor_materia.materia_id = materia.id;

SELECT atividade.descricao, instrutor.nome, instrutor.especialidade FROM atividade
INNER JOIN instrutor ON atividade.instrutor_id = instrutor.id;

SELECT atividade.descricao, turma.data_inicio, turma.data_fim, materia.nome FROM atividade
INNER JOIN turma ON atividade.turma_id = turma.id
INNER JOIN materia ON atividade.materia_id = materia.id;

SELECT aluno.nome, turma.nome, atividade.descricao, materia.nome, instrutor.nome FROM aluno
INNER JOIN turma ON turma.id = turma.id
INNER JOIN atividade ON atividade.id = atividade.id
INNER JOIN materia ON materia.id = materia.id
INNER JOIN instrutor ON  instrutor.id = instrutor.id;