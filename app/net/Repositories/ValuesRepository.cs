using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Dapper;
using net.Model;

namespace net.Repositories
{
    public class ValuesRepository: IValuesRepository
    {
        private const string connectionString = "Server=sqlserver;Database=master;User Id=sa;Password=ATChal1enge!;";

        public async Task<bool> Create(Agent agent)
        {
          Console.WriteLine($"agent {agent.UserId}");
          using(var connection = new SqlConnection(connectionString)){
            var sql = @"
                INSERT INTO agent (user_id, firstname, lastname, phone, parent_id)
                VALUES (@UserId, @Firstname, @Lastname, @Phone, @ParentId)";

            var rowsAffected = await connection.ExecuteAsync(sql, agent);
            return rowsAffected > 0;
          }
        }

        public async Task<bool> Delete(int userId)
        {
          using(var connection = new SqlConnection(connectionString)){
              var sql = "DELETE FROM agent WHERE user_id = @UserId";
              var rowsAffected = await connection.ExecuteAsync(sql, new { UserId = userId });
              return rowsAffected > 0;
          }
        }

        public async Task<Agent> GetAgent(int userId)
        {
          using(var connection = new SqlConnection(connectionString)){
            var sql = "SELECT user_id, firstname, lastname, phone, parent_id FROM agent";
            sql += " WHERE user_id = @UserId";
            return await connection.QueryFirstOrDefaultAsync<Agent>(sql, new { UserId = userId});
          }
        }

        public async Task<IEnumerable<Agent>> ListAgent(int parentId)
        {
          using(var connection = new SqlConnection(connectionString)){
            var sql = "SELECT user_id, firstname, lastname, phone, parent_id FROM agent";
            sql += " WHERE parent_id = @ParentId";
            return await connection.QueryAsync<Agent>(sql, new { ParentId = parentId });
          }
        }

        public async Task<bool> Update(Agent agent)
        {
          using(var connection = new SqlConnection(connectionString)){
            var sql = @"
                UPDATE agent
                SET firstname = @Firstname,
                    lastname = @Lastname,
                    phone = @Phone,
                    parent_id = @ParentId
                WHERE user_id = @UserId";

            var rowsAffected = await connection.ExecuteAsync(sql, agent);
            return rowsAffected > 0;
        }
        }
    }
}

