using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using verk5.Models;

namespace verk5.Controllers
{
    public class CommentController : ApiController
    {
        // GET api/comment
		[HttpGet]
		public IEnumerable<Comment> GetComments(int LectureID)
		{
			AppDataContext db = new AppDataContext();

			var lect = (from lec in db.Lectures
						where lec.ID == LectureID
						select lec).SingleOrDefault();


			var result = (from comment in db.Comments
						  where comment.Lecture.ID == LectureID
						  select comment);

			//            return new string[] { "value1", "value2" };
			return result;
		}

        //// GET api/comment/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST api/comment
        public void Post(Comment c)
        {
            AppDataContext db = new AppDataContext();

            string CommentText = c.CommentText;
            c.DatePublished = DateTime.Now;
            c.UserName = User.Identity.Name;
            int id = c.Lecture.ID;

            db.Comments.Add(c);
            db.SaveChanges();

        }

        // PUT api/comment/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/comment/5
        public void Delete(int id)
        {
        }
    }
}
