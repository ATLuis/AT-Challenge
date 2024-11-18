using Dapper;
using net.Models;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace net.Repositories
{
    public class AgentRepository : IAgentRepository
    {
        private readonly string _connectionString = "Server=sqlserver;Database=master;User Id=sa;Password=ATChal1enge!;";

        public async Task<int> Create(Agent agent)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                const string sql = @"
                    INSERT INTO Agents (FirstName, LastName, Phone, Username, Password, Active)
                    VALUES (@FirstName, @LastName, @Phone, @Username, @Password, @Active);
                    SELECT CAST(SCOPE_IDENTITY() as int);";

                return await connection.ExecuteScalarAsync<int>(sql, agent);
            }
        }

        public async Task<IEnumerable<Agent>> GetAll()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                const string sql = "SELECT * FROM Agents;";
                return await connection.QueryAsync<Agent>(sql);
            }
        }

        public async Task<Agent> GetById(int id)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                const string sql = "SELECT * FROM Agents WHERE Id = @Id;";
                return await connection.QueryFirstOrDefaultAsync<Agent>(sql, new { Id = id });
            }
        }

        public async Task DeleteAgent(int id)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                const string sql = "DELETE FROM Agents WHERE Id = @Id;";
                await connection.ExecuteAsync(sql, new { Id = id });
            }
        }

        public async Task AddAgentRelationship(int agentId, int linkedAgentId)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                const string sql = @"
                    INSERT INTO AgentRelationships (AgentId, LinkedAgentId)
                    VALUES (@AgentId, @LinkedAgentId);";
                await connection.ExecuteAsync(sql, new { AgentId = agentId, LinkedAgentId = linkedAgentId });
            }
        }

        public async Task RemoveAgentRelationship(int agentId, int linkedAgentId)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                const string sql = @"
                    DELETE FROM AgentRelationships
                    WHERE AgentId = @AgentId AND LinkedAgentId = @LinkedAgentId;";
                await connection.ExecuteAsync(sql, new { AgentId = agentId, LinkedAgentId = linkedAgentId });
            }
        }
    }
}
