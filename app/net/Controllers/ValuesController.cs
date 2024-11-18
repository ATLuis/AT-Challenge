using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using net.Model;
using net.Repositories;

namespace net.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
    private readonly IValuesRepository _valuesRepository;
        public ValuesController(IValuesRepository  valuesRepository)
        {
            // Constructor logic here
            _valuesRepository =  valuesRepository;
        }
        // GET api/values
        [HttpGet("{userId}")]
        public async Task<ActionResult> Get(int userId)
        {
            var rs = await _valuesRepository.GetAgent(userId);
            if(rs is null){
                return NotFound("agent not found");
            }
            return Ok(rs);

        }

        // GET api/values/5
        [HttpGet("child/{userId}")]
        public async Task<ActionResult<string>> GetChilds(int userId)
        {
            var rs = await _valuesRepository.ListAgent(userId);
            return Ok(rs);
        }

        // POST api/values
        [HttpPost]
        public async void Post([FromBody] Agent agent)
        {
            await _valuesRepository.Create(agent);
        }

        // PUT api/values/5
        [HttpPut("{userId}")]
        public async void Put(int userId, [FromBody] Agent agent)
        {
            agent.UserId=userId;
            await _valuesRepository.Update(agent);
        }

        // DELETE api/values/5
        [HttpDelete("{userId}")]
        public async void Delete(int userId)
        {
            await _valuesRepository.Delete(userId);
        }
    }
}
