DROP DATABASE IF EXISTS situacao_aprendizagem2;
CREATE DATABASE IF NOT EXISTS situacao_aprendizagem2;
USE situacao_aprendizagem2;

CREATE TABLE Funcionario (
	id_funcionario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    setor VARCHAR(255),
    cargo VARCHAR(255)
);

CREATE TABLE Cracha (
	id_cracha INT PRIMARY KEY AUTO_INCREMENT,
    qr_code VARCHAR(255),
    data_emissao DATETIME,
    id_funcionario INT,
    FOREIGN KEY (id_funcionario) REFERENCES Funcionario(id_funcionario)
);

CREATE TABLE Instrutor (
	id_instrutor INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    email VARCHAR(255)
);

CREATE TABLE Sala (
	id_sala INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    capacidade INT,
    recursos TEXT
);

CREATE TABLE Evento (
	id_evento INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255),
    descricao TEXT,
    data_realizacao DATE,
    horario TIME,
    id_sala INT,
    FOREIGN KEY (id_sala) REFERENCES Sala(id_sala)
);

CREATE TABLE Instrutor_Evento (
	id_instrutor_evento INT PRIMARY KEY AUTO_INCREMENT,
    id_instrutor INT,
    id_evento INT,
    FOREIGN KEY (id_instrutor) REFERENCES Instrutor(id_instrutor),
    FOREIGN KEY (id_evento) REFERENCES Evento(id_evento)
);

CREATE TABLE Funcionario_Evento (
	id_funcionario_evento INT PRIMARY KEY AUTO_INCREMENT,
    id_funcionario INT,
    id_evento INT,
    FOREIGN KEY (id_funcionario) REFERENCES Funcionario(id_funcionario),
    FOREIGN KEY (id_evento) REFERENCES Evento(id_evento)
);

INSERT INTO Sala (nome, capacidade, recursos) VALUES 
("CA300", 100, "Uma Sala capaz de conter 100 pessoa com espaço para coffe break um telão"),
("Centro de Eventos", 300, "Um espaço próprio para eventos grandes.");

INSERT INTO Evento (titulo, descricao, data_realizacao, horario, id_sala) VALUES 
("ETS Land", "Evento que deve acontecer a cada 5 anos em comemoração a ETS", "2025-08-11", "16:30", 1),
("Bosch Land", "Evento que deve acontecer a cada 5 anos em comemoração a Bosch Brasil", "2025-08-11", "08:30", 2);

INSERT INTO Funcionario (nome, setor, cargo) VALUES 
("Jonathan","BD","Back-End Developer "),
("Nicole","BISB","UI/UX Designer"),
("Allison","BISB","Full-Stack Developer"),
("Vinicus","GS","Data Base Analyst"),
("Deborah","GS","Front-End Developer"),
("Geovana","BD","Full-Stack Developer"),
("Joaozinho","PT","Marketing"),
("Pedrinho","TEF","Auxiliar Piso 2"),
("Gabrielzinho","PM","Gerente Geral"),
("José","SO","Suporte SAP");

INSERT INTO Instrutor (nome, email) VALUES 
("Paulinho", "paulo.junior@bosch.com"),
("Camila", "camila.gomes@bosch.com"),
("Agatha", "agatha.freitas@bosch.com"),
("Vanessa", "vanessa.silva@bosch.com"),
("Luca", "luca.neves@bosch.com"),
("Francis", "francis.almeida@bosch.com"),
("Clebinho", "cleber.augusto@bosch.com"),
("Wilson", "vinicius.ferreira@bosch.com"),
("Leonardo", "leonardo.alves@bosch.com"),
("Giovana", "giovana.pedro@bosch.com"),
("Plinio", "gabriel.plinio@bosch.com"),
("Fuzzari", "matheus.fuzzari@bosch.com");

INSERT INTO Cracha (qr_code, data_emissao, id_funcionario) VALUES
("123A321", "2021-01-01 07:30:00", 1),
("123B321", "2021-01-01 07:30:00", 2),
("123C321", "2021-01-01 07:30:00", 3),
("123D321", "2021-01-01 07:30:00", 4),
("123E321", "2021-01-01 07:30:00", 5),
("123F321", "2021-01-01 07:30:00", 6),
("123G321", "2021-01-01 07:30:00", 7),
("123H321", "2021-01-01 07:30:00", 8),
("123I321", "2021-01-01 07:30:00", 9),
("123J321", "2021-01-01 07:30:00", 10);

INSERT INTO Instrutor_Evento (id_instrutor, id_evento) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 2),
(7, 2),
(8, 2),
(9, 2),
(10, 2);

INSERT INTO Funcionario_Evento (id_funcionario, id_evento) VALUES 
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 2),
(7, 2),
(8, 2),
(9, 2),
(10, 2);

/*SELECT * FROM Funcionario;
SELECT * FROM Sala;
SELECT * FROM Instrutor;
SELECT * FROM Cracha;
SELECT * FROM Evento;
SELECT * FROM Instrutor_Evento;
SELECT * FROM Funcionario_Evento;*/

SELECT Funcionario.nome, Funcionario.setor, Funcionario.cargo, Evento.titulo FROM Funcionario
INNER JOIN Funcionario_Evento ON Funcionario.id_funcionario = Funcionario_Evento.id_funcionario_evento
INNER JOIN Evento ON Funcionario_Evento.id_funcionario_evento = Evento.id_evento
WHERE Evento.titulo = ("Bosch Land");

SELECT Instrutor.nome, Instrutor.email, Evento.titulo FROM Instrutor
INNER JOIN Instrutor_Evento ON Instrutor.id_instrutor = Instrutor_Evento.id_instrutor_evento
INNER JOIN Evento ON Instrutor_Evento.id_instrutor_evento = Evento.id_evento;

SELECT Evento.titulo, Evento.data_realizacao, Evento.horario, Sala.nome From Evento
INNER JOIN Sala ON Evento.id_sala = Sala.id_sala;