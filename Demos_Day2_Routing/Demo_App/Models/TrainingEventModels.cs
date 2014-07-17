using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Demo_App.Models
{
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