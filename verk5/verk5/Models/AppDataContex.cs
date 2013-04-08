using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace verk5.Models
{
    public class AppDataContex : DbContext
    {
        public DbSet<Lecture> Lecture { get; set; }
    }
}