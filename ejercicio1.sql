create table estudiantes (
    estudiantes_id int primary key,
    nombre varchar(100),
    apellido varchar(100),
    color varchar(100),
    cedula varchar(8),
    pelicula fav varchar(100)
);
insert into estudiantes
(estudiantes_id, nombre, apellido, color, cedula, pelicula),

values 
(1, diego, cogollo, vino, 30605426, avengers),
(2, sebastian, jerez, turquesa, 34576161, thor_ragnarok),
(3, nicolas, ramirez, verde,33409128, petter_rabbit),
(4, ernesto, flores, azul, 33116908, deadpool),
(5, paul, delgado, azul, 32570008, john_wick);