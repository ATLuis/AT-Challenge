using Microsoft.AspNetCore.Mvc;
using net.Repositories;

namespace net.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        private readonly ITestRepository _testRepository;
        public TestController(ITestRepository testRepository)
        {
            // Constructor logic here
            _testRepository = testRepository;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<string> Get()
        {
            return _testRepository.testCnn();
        }
    }
}
