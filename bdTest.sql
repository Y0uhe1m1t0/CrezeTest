CREATE DATABASE CrezeTest CHARSET=latin1;

USE crezeTest;

CREATE TABLE dispensario (
  idDispensario int(11) NOT NULL AUTO_INCREMENT,
  marca varchar(50) DEFAULT NULL,
  modelo varchar(50) DEFAULT NULL,
  numSerie varchar(50) DEFAULT NULL,
  numAprob varchar(25) DEFAULT NULL,
  PRIMARY KEY (idDispensario),
  UNIQUE KEY idDispensario (idDispensario)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE manguera (
  idManguera int(11) NOT NULL AUTO_INCREMENT,
  idDispensario int(11) NOT NULL,
  lado char(1) DEFAULT NULL,
  combustible varchar(50) DEFAULT NULL,
  precinto varchar(50) DEFAULT NULL,
  holograma varchar(50) DEFAULT NULL,
  PRIMARY KEY (idManguera),
  UNIQUE KEY idManguera (idManguera),
  FOREIGN KEY (idDispensario) REFERENCES dispensario(idDispensario)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO dispensario (marca, modelo, numSerie, numAprob) 
VALUES ('Gilbarco', 'NA1 ENCORE 500S', 'FPEN801478', 'DGN.312.01.7042.2012'),
('Gilbarco', 'NA1 ENCORE 500S', 'FPEN489081', 'DGN.312.01.7042.2012'),
('Gilbarco', 'NA2 ENCORE 500S', 'FPEN475021', 'DGN.312.01.7043.2012'),
('TEAM', 'T2000.B.AC', 'T2000.B.AC.7016', 'DGN.312.01.1463.2015'),
('TEAM', 'T2000.B.AC', 'T2000.B.AC.4056', 'DGN.312.01.1463.2015'),
('TEAM', 'T2000.B.AC', 'T2000.B.AC.6010', 'DGN.312.01.1463.2015');

INSERT INTO manguera (idDispensario, lado, combustible, precinto, holograma)
VALUES (1, 'A', 'Premium', '0014785', 'PFC0174513'),
(1, 'B', 'Magna', '0014786', 'PFC0174514'),
(1, 'C', 'Premium', '0014789', 'PFC0174515'),
(1, 'D', 'Magna', '0014790', 'PFC0174516'),
(2, 'A', 'Diesel', '0014472', 'PFC0174652'),
(2, 'B', 'Diesel', '0014473', 'PFC0174653'),
(3, 'A', 'Premium', '0014419', 'PFC0174122'),
(3, 'B', 'Magna', '0014420', 'PFC0174123'),
(3, 'C', 'Premium', '0014801', 'PFC0178101'),
(3, 'D', 'Magna', '0014803', 'PFC0178102'),
(4, 'A', 'Premium', '0015741', 'PFC0201457'),
(4, 'B', 'Premium', '0015742', 'PFC0201458'),
(4, 'C', 'Magna', '0015743', 'PFC0201459'),
(4, 'D', 'Magna', '0015744', 'PFC0201460'),
(5, 'A', 'Premium', '0016842', 'PFC0107512'),
(5, 'B', 'Premium', '0016845', 'PFC0107513'),
(5, 'C', 'Magna', '0016846', 'PFC0301451'),
(5, 'D', 'Magna', '0016847', 'PFC0301452'),
(6, 'A', 'Diesel', '0019506', 'PFC0302475'),
(6, 'B', 'Diesel', '0019507', 'PFC0302476');