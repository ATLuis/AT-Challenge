
/*

Put here all the scripts needed to create the database objects in SQL Server

*/

CREATE TABLE agents (
    id INT PRIMARY KEY IDENTITY(1,1),
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    phone VARCHAR(20),
    username VARCHAR(255),
    password VARCHAR(255),
    referedByUserId INT
);