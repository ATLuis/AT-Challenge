using net.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace net.Repositories
{
    public interface IAgentRepository
    {
        Task<int> Create(Agent agent);
        Task<IEnumerable<Agent>> GetAll();
        Task<Agent> GetById(int id);
        Task DeleteAgent(int id);
        Task AddAgentRelationship(int agentId, int linkedAgentId);
        Task RemoveAgentRelationship(int agentId, int linkedAgentId);
    }
}
