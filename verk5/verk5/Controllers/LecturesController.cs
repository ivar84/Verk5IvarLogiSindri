﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Security;
using verk5.Models;


namespace verk5.Controllers
{
    public class LecturesController : ApiController
    {
       // Get skilar lista af fyrirlestrum
        // post bætir við fyrirlestri
        // /api/v1/lectures

        // get skilar einum fyrirlestri
        // put uppfærir fyrirlestur
        // / api/v1/lectures/7

        // Get skilar lista af kommentum
        // Post bætir við kommenti

        // /api/v1/lectures/{id}/comments/7
        
        // GET api/lecture
		[HttpGet]
        public IEnumerable<Lecture> Get()
        {
            AppDataContext db = new AppDataContext();
/*
            var result = from Lecture in db.Lectures
                         select Lecture;
 */           
            return db.Lectures;
        }

        // GET api/lecture/5
        public Lecture Get(int id)
        {
            AppDataContext db = new AppDataContext();

            var result = (from lecture in db.Lectures
                           where lecture.ID == id
                           select lecture).SingleOrDefault();
            if (result == null)
            {
               // throw new HttpResponseException("villa");
            }

            return result;
                 
        }
        //  [Authorize(Roles = "Teachers")]
        // POST api/lecture
        public void Post(Lecture l)
        {
            AppDataContext db = new AppDataContext();
            string lectureURL = l.LectureURL;
            l.DatePublished = DateTime.Now;
            string title = l.Title;
            l.LectureOwner = User.Identity.Name;
            db.Lectures.Add(l);
            db.SaveChanges();


        }
      
      //  [Authorize(Roles = "Teachers")]
        // PUT api/lecture/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/lecture/5
        public void Delete(int id)
        {
        }
    }
}
