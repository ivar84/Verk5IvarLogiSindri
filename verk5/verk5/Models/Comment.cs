﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace verk5.Models
{
    public class Comment
    {
		public int ID { get; set; }
		public string UserName { get; set; }
		public string CommentText { get; set; }
		public DateTime DatePublished { get; set; }

        public virtual Lecture Lecture { get; set; }
    }
}