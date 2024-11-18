
/*

Put here all the scripts needed to create the database objects in PostgreSQL

*/

CREATE TABLE user (
    id INT PRIMARY KEY IDENTITY(1,1),
    username VARCHAR(255),
    password VARCHAR(255),
    status VARCHAR(20),
);