using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using net.Models;

namespace net.Repositories
{
    public class AgentRepository : IAgentRepository
    {

        public List<Agent> GetAll()
        {
            string connectionString = "Server=sqlserver;Database=master;User Id=sa;Password=ATChal1enge!;";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                try
                {
                    return connection.Query<Agent>("SELECT * FROM Agents").ToList();
                }
                catch (Exception ex)
                {
                    return new List<Agent>();
                }
            }
        }

        public Agent Create(Agent agent)
        {
            string connectionString = "Server=sqlserver;Database=master;User Id=sa;Password=ATChal1enge!;";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                try
                {
                    connection.Execute("INSERT INTO agents (firstname, lastname, phone, username, password, referedByUserId) VALUES (@Firstname, @Lastname, @Phone, @Username, @Password, @ReferedByUserId)",
                    new { Firstname = agent.Firstname, Lastname = agent.Lastname, Phone = agent.Phone, Username = agent.Username, Password = agent.Password, ReferedByUserId = agent.ReferedByUserId }
                    );
                    return agent;
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"An error occurred: {ex.Message}");
                    return null;
                }
            }

        }

        public List<Agent> FilterByReferedUserId(int referedUserId)
        {
            string connectionString = "Server=sqlserver;Database=master;User Id=sa;Password=ATChal1enge!;";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                try
                {
                    return connection.Query<Agent>("SELECT * FROM Agents WHERE ReferedByUserId = @ReferedByUserId", new { ReferedByUserId = referedUserId }).ToList();
                }
                catch (Exception ex)
                {
                    return new List<Agent>();
                }
            }
        }

        public bool Delete(int id)
        {
            string connectionString = "Server=sqlserver;Database=master;User Id=sa;Password=ATChal1enge!;";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                try
                {
                    connection.Execute("DELETE FROM Agents WHERE Id = @Id", new { Id = id });
                    return true;
                }
                catch (Exception ex)
                {
                    return false;
                }
            }
        }
    }
}