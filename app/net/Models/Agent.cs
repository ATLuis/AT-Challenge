using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace net.Models
{
    public class Agent
    {
        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Phone { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public int ReferedByUserId { get; set; }
    }
}