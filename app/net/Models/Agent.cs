using System.Collections.Generic;

namespace net.Models
{
    public class Agent
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public bool Active { get; set; } = false;

        public List<Agent> LinkedAgents { get; set; } = new List<Agent>();
    }
    public class AgentRelationship
    {
        public int AgentId { get; set; }
        public Agent Agent { get; set; }

        public int LinkedAgentId { get; set; }
        public Agent LinkedAgent { get; set; }
    }
}
