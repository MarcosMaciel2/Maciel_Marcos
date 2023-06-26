CREATE TABLE PAIS
(
  pais_id INT NOT NULL,
  nombre_pais INT NOT NULL,
  PRIMARY KEY (pais_id),
  UNIQUE (nombre_pais)
);

CREATE TABLE PROVINCIA_
(
  provincia_id INT NOT NULL,
  nombre_provincia INT NOT NULL,
  pais_id INT NOT NULL,
  PRIMARY KEY (provincia_id),
  FOREIGN KEY (pais_id) REFERENCES PAIS(pais_id)
);

CREATE TABLE LOCALIDAD_
(
  codigo_localidad INT NOT NULL,
  nombre INT NOT NULL,
  codigo_postal INT NOT NULL,
  provincia_id INT NOT NULL,
  PRIMARY KEY (codigo_localidad),
  FOREIGN KEY (provincia_id) REFERENCES PROVINCIA_(provincia_id)
);

CREATE TABLE EMPLEADO_
(
  empleado_id INT NOT NULL,
  dni INT NOT NULL,
  nombre INT NOT NULL,
  telefono INT NOT NULL,
  email INT NOT NULL,
  fecha_alta INT NOT NULL,
  codigo_localidad INT NOT NULL,
  PRIMARY KEY (empleado_id),
  FOREIGN KEY (codigo_localidad) REFERENCES LOCALIDAD_(codigo_localidad)
);