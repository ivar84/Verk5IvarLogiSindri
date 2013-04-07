using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace verk5.Models
{
    public class DefaultConnection : DbContext
    {

        public DefaultConnection() : base("DefaultConnection")
		{

		}

        public DbSet<Lecture> Lectures {get; set;}
        public DbSet<Comment> Comments {get;set;}
        //test
    }
}