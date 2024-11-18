using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using net.Dtos;
using net.Models;
using net.Repositories;

namespace net.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AgentController : ControllerBase
    {

        private readonly IAgentRepository _agentRepository;

        public AgentController(IAgentRepository agentRepository)
        {
            _agentRepository = agentRepository;
        }

        [HttpGet("All")]
        public IActionResult GetAll()
        {
            return Ok(_agentRepository.GetAll());

        }

        [HttpPost]
        public IActionResult Post([FromBody] RegisterAgentDto registerAgentDto)
        {
            //Console log the registerAgentDto
            Console.WriteLine("Ejemplo de Console.WriteLine");
            Console.WriteLine(registerAgentDto.Firstname);
            if (registerAgentDto == null)
            {
                return BadRequest();
            }

            var agent = new Agent
            {
                Firstname = registerAgentDto.Firstname,
                Lastname = registerAgentDto.Lastname,
                Phone = registerAgentDto.Phone,
                Username = registerAgentDto.Username,
                Password = registerAgentDto.Password,
                ReferedByUserId = registerAgentDto.ReferedByUserId
            };
            return Ok(_agentRepository.Create(agent));
        }

        [HttpGet("FilterByReferedUserId/{referedUserId}")]
        public IActionResult FilterByReferedUserId(int referedUserId)
        {
            return Ok(_agentRepository.FilterByReferedUserId(referedUserId));
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (_agentRepository.Delete(id))
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }
    }
}