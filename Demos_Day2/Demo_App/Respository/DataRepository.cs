using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Demo_App.Respository
{
    public class DataRepository
    {
        public TEvent GetDataById(int id)
        {
            return new TEvent()
            {
                id = id,
                name = "Angular JS Fundamentals",
                date = new DateTime(),
                time = "9:00 am",
                location = new Location
                {
                    address = "Synechron",
                    city = "Pune",
                    state = "Maharashtra"
                },
                imageUrl = "/Images/angularjs-logo.png",
                sessions = new List<TSession>(){
            new TSession()    
            {
                    name= "Introductory Directives",
                    creatorName= "Manish Sharma",
                    duration= 2,
                    level= "Advance",
                    summary= "In this sesison you will learn the ins and outs of directives!",
                    upVoteCount= 0
                },
            new TSession()
                {
                    name= "Angular Services",
                    creatorName= "Manish Sharma",
                    duration= 1,
                    level= "Introductory",
                    summary= "This session will take a closer look at scopes.  Learn what they do, how they do it, and how to get them to do it for you.",
                    upVoteCount= 0
                },
                new TSession()
                {
                    name= "Controllers",
                    creatorName= "Jane Doe",
                    duration= 3,
                    level= "Intermediate",
                    summary= "Controllers are the beginning of everything Angular does.  Learn how to craft controllers that will win the respect of your friends and neighbors.",
                    upVoteCount= 0
                }
            }
            };
        }
    }

    public class TEvent
    {
        public int id { get; set; }
        public string name { get; set; }
        public DateTime date { get; set; }
        public string time { get; set; }
        public string imageUrl { get; set; }
        public Location location { get; set; }
        public List<TSession> sessions { get; set; }
    }

    public class Location
    {
        public string address { get; set; }
        public string city { get; set; }
        public string state { get; set; }
    }

    public class TSession
    {
        public string name { get; set; }
        public string creatorName { get; set; }
        public int duration { get; set; }
        public string level { get; set; }
        public string summary { get; set; }
        public int upVoteCount { get; set; }
    }
}