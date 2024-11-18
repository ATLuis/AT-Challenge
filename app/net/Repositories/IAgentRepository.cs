using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using net.Models;

namespace net.Repositories
{
    public interface IAgentRepository
    {
        List<Agent> GetAll();
        Agent Create(Agent agent);
        List<Agent> FilterByReferedUserId(int referedUserId);
        bool Delete(int id);
    }
}