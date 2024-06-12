-- CREATE TABLE mttosTable (
--     idMTTO INTEGER PRIMARY KEY AUTOINCREMENT,
--     idLinea INT,
--     idPlanta INT,
--     Nserie VARCHAR(20),
--     FechaPROG DATE,
--     FechaRealiz DATE,
--     RealizadoPor VARCHAR(20),
--     RevisadoPor VARCHAR(20),
--     AprobadoPor VARCHAR(20)
-- );


INSERT INTO MttosTable (idLinea, idPlanta, Nserie, FechaPROG, FechaRealiz, RealizadoPor, RevisadoPor, AprobadoPor)
VALUES
    ( 1, 101, 'ABC123', '2024-05-31', '2024-06-01', 'Juan', 'María', 'Pedro'),
    ( 3,102, 'XYZ456', '2024-06-02', '2024-06-03', 'Ana', 'Carlos', 'Luis');




--  DROP TABLE IF EXISTS mttosTable