using Microsoft.AspNetCore.Mvc;
using net.Models;
using net.Repositories;
using System.Threading.Tasks;

namespace net.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AgentsController : ControllerBase
    {
        private readonly IAgentRepository _agentRepository;

        public AgentsController(IAgentRepository agentRepository)
        {
            _agentRepository = agentRepository;
        }

        [HttpPost]
        public async Task<IActionResult> CreateAgent([FromBody] Agent agent)
        {
            if (agent == null)
            {
                return BadRequest("Invalid agent data.");
            }

            var id = await _agentRepository.Create(agent);
            return Ok(new { Message = "Agent created successfully.", Id = id });
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAgents()
        {
            var agents = await _agentRepository.GetAll();

            return Ok(agents);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAgentById(int id)
        {
            var agent = await _agentRepository.GetById(id);
            if (agent == null)
            {
                return NotFound("Agente no encontrado.");
            }

            return Ok(agent);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAgent(int id)
        {
            await _agentRepository.DeleteAgent(id);
            return Ok(new { Message = "Agent deleted successfully." });
        }

        [HttpPost("{id}/relationships/{linkedId}")]
        public async Task<IActionResult> AddRelationship(int id, int linkedId)
        {
            await _agentRepository.AddAgentRelationship(id, linkedId);
            return Ok(new { Message = "Relationship added successfully." });
        }

        [HttpDelete("{id}/relationships/{linkedId}")]
        public async Task<IActionResult> RemoveRelationship(int id, int linkedId)
        {
            await _agentRepository.RemoveAgentRelationship(id, linkedId);
            return Ok(new { Message = "Relationship removed successfully." });
        }
    }
}
