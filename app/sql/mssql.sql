
/*

Put here all the scripts needed to create the database objects in SQL Server

*/
CREATE TABLE Agents (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    FirstName NVARCHAR(50) NOT NULL,
    LastName NVARCHAR(50) NOT NULL,
    Phone NVARCHAR(20),
    Username NVARCHAR(50) NOT NULL UNIQUE,
    Password NVARCHAR(255) NOT NULL,
    Active BIT NOT NULL DEFAULT 0
);

CREATE TABLE AgentRelationships (
    AgentId INT NOT NULL,
    LinkedAgentId INT NOT NULL,
    PRIMARY KEY (AgentId, LinkedAgentId),
    FOREIGN KEY (AgentId) REFERENCES Agents(Id) ON DELETE NO ACTION,
    FOREIGN KEY (LinkedAgentId) REFERENCES Agents(Id) ON DELETE NO ACTION
);
