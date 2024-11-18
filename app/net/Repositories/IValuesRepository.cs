using System.Collections.Generic;
using System.Threading.Tasks;
using net.Model;

namespace net.Repositories
{
    public interface IValuesRepository
    {
        Task<Agent> GetAgent(int userId); 
        Task<bool> Create(Agent agent); 
        Task<bool> Update(Agent agent); 
        Task<bool> Delete(int userId); 
        Task<IEnumerable<Agent>> ListAgent(int parentId); 
    }
}

