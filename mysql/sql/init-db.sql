USE fpadb;

CREATE TABLE modules(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255) NOT NULL, PRIMARY KEY(id));

INSERT INTO modules(name) VALUES ('Docker');
INSERT INTO modules(name) VALUES ('Fundamentos de Arquitetura de Software');
INSERT INTO modules(name) VALUES ('Comunicação');
INSERT INTO modules(name) VALUES ('RabbitMQ');
INSERT INTO modules(name) VALUES ('Autenticação e Keycloak');
INSERT INTO modules(name) VALUES ('Domain Driven Design e Arquitetura hexagonal');
INSERT INTO modules(name) VALUES ('Arquitetura do projeto prático - Codeflix');
INSERT INTO modules(name) VALUES ('Microsserviço: Catálogo de vídeos com Laravel ( Back-end )');
INSERT INTO modules(name) VALUES ('icrosserviço: Catálogo de vídeos com React ( Front-end )');
INSERT INTO modules(name) VALUES ('Microsserviço de Encoder de Vídeo com Go Lang');