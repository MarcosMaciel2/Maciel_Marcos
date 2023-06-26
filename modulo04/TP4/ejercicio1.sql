CREATE TABLE ALUMNO_
(
  cod_matricula INT NOT NULL,
  nombre INT NOT NULL,
  dni INT NOT NULL,
  fecha_nac INT NOT NULL,
  email INT NOT NULL,
  PRIMARY KEY (cod_matricula)
);

CREATE TABLE CURSO_
(
  cod_curso INT NOT NULL,
  nombre INT NOT NULL,
  PRIMARY KEY (cod_curso)
);

CREATE TABLE PROFESOR_
(
  profesor_id INT NOT NULL,
  nombre INT NOT NULL,
  especialidad INT NOT NULL,
  email INT NOT NULL,
  PRIMARY KEY (profesor_id)
);

CREATE TABLE X
(
  profesor_id INT NOT NULL,
  cod_curso INT NOT NULL,
  PRIMARY KEY (profesor_id, cod_curso),
  FOREIGN KEY (profesor_id) REFERENCES PROFESOR_(profesor_id),
  FOREIGN KEY (cod_curso) REFERENCES CURSO_(cod_curso)
);

CREATE TABLE de
(
  cod_matricula INT NOT NULL,
  cod_curso INT NOT NULL,
  PRIMARY KEY (cod_matricula, cod_curso),
  FOREIGN KEY (cod_matricula) REFERENCES ALUMNO_(cod_matricula),
  FOREIGN KEY (cod_curso) REFERENCES CURSO_(cod_curso)
);