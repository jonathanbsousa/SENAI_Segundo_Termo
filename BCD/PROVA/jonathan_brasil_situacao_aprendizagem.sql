DROP DATABASE jonathan_situacao_aprendizagem;
CREATE DATABASE jonathan_situacao_aprendizagem;
USE jonathan_situacao_aprendizagem;

CREATE TABLE Instrutores (
    ni BIGINT PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255),
    telefone VARCHAR(255),
    endereco VARCHAR(255)
);

CREATE TABLE Atividades (
    id_atividade INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao VARCHAR(255),
    data_realizacao DATE
);

CREATE TABLE Turmas (
    id_turma INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    qtd_alunos INT,
    capacidade INT
);

CREATE TABLE Aula (
	id_AULA INT PRIMARY KEY AUTO_INCREMENT,
    fk_Instrutores_ni BIGINT,
    fk_Turmas_id_turma INT,
    FOREIGN KEY (fk_Instrutores_ni) REFERENCES Instrutores(ni),
    FOREIGN KEY (fk_Turmas_id_turma) REFERENCES Turmas(id_turma)
);

CREATE TABLE Trabalho (
	id_trabalho INT PRIMARY KEY AUTO_INCREMENT,
    fk_Turmas_id_turma INT,
    fk_Atividades_id_atividade INT,
    FOREIGN KEY (fk_Turmas_id_turma) REFERENCES Turmas(id_turma),
    FOREIGN KEY (fk_Atividades_id_atividade) REFERENCES Atividades(id_atividade)
);

INSERT INTO Instrutores (ni, nome, email, telefone, endereco) VALUES 
('12345678','Marcia Scanacapra', 'marcia@marcia.com', '(00)12345-6789', 'rua 1 nº123, bairro vila insdutrial'),
('23456789','Lindomar Batistão', 'lindomar@lindomar.com', '(99)87654-3210', 'rua 1 nº124, bairro vila industrial'),
('34567891','Fernanda Militão', 'fernanda@fernanda.com', '(00)98765-4321', 'rua 1 nº125, bairro vila industrial'),
('45678912','Dorival Alves', 'dorival@dorival.com', '(99)12345-6789', 'rua 1 nº126, bairro vila industrial'),
('56789123','Israel Gomes', 'israel@israel.com', '(00)56123-9876', 'rua 1 nº127, bairro vila industrial'),
('67891234','Michel Modesto', 'modesto@modesto.com', '(99)54987-1234', 'rua 1 nº128, bairro vila industrial');

INSERT INTO Atividades (nome, descricao, data_realizacao) VALUES
('Realizar 5S', 'Em dias designados realizar os 5 principos do 5s', '2025-03-17'),
('Fazer atividade em sala', 'Realiza atividade proposta por instrutor em aula', '2025-03-17'),
('Resolução de Exercício', 'Apresentar sua resolução para os demais colegas', '2025-03-17'),
('Aula Invertida', 'Explicar conseitos passados em aula para os colegas', '2025-03-17'),
('Realizar Prova', 'Realizar Provas sobre asssunto passados em aula', '2025-03-17'),
('Realizar Intervalo', 'Realizar 15 minutos de intervalo garantido por lei', '2025-03-17');

INSERT INTO Turmas (nome, qtd_alunos, capacidade) VALUES
('3DS-TB-11', 16, 16),
('2DS-TB-12', 14, 16),
('2DS-TB-13', 16, 16),
('2DS-TB-14', 16, 16),
('2DS-TB-15', 16, 16),
('2DS-TB-16', 16, 16);

INSERT INTO Aula (fk_Instrutores_ni, fk_Turmas_id_turma) VALUES
(12345678, 1),
(23456789, 2),
(34567891, 3),
(45678912, 4),
(56789123, 5),
(67891234, 6);

INSERT INTO Trabalho (fk_Turmas_id_turma, fk_Atividades_id_atividade) VALUES
(1,1),
(2,2),
(3,3),
(4,4),
(5,5),
(6,6);

SELECT * FROM Turmas;
SELECT * FROM Atividades;
SELECT * FROM Instrutores;
SELECT * FROM Aula;
SELECT * FROM Trabalho;

