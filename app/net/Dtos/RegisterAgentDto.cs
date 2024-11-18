using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace net.Dtos
{
    public class RegisterAgentDto
    {
        public RegisterAgentDto(string firstname, string lastname, string phone, string username, string password, int referedByUserId)
        {
            Firstname = firstname;
            Lastname = lastname;
            Phone = phone;
            Username = username;
            Password = password;
            ReferedByUserId = referedByUserId;
        }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Phone { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public int ReferedByUserId { get; set; }
    }
}