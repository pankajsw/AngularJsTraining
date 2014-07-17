using Demo_App.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Demo_App.Respository
{
    public class DataRepository
    {
        List<TEvent> events;
        public List<TEvent> Events
        {
            get { return events; }
        }

        public DataRepository()
        {
            events = new List<TEvent>();
            AddEvent(new TEvent()
            {
                id = 1,
                name = "Angular JS Fundamentals",
                date = new DateTime(2014, 6, 6),
                time = "9:00 am",
                imageUrl = "/Images/angularjs-logo.png",
                location = new Location()
                {
                    address = "Synechron",
                    city = "Pune",
                    state = "Maharashtra"
                },
                sessions = new List<TSession>()
                {
                    new TSession()
                    {
                        name="Directives",
                        creatorName="Manish Sharma",
                        duration=1,
                        level="Advanced",
                        summary="In this sesison you will learn the ins and outs of directives!",
                        upVoteCount=0
                    },

                    new TSession()
                    {
                        name="Angular Services",
                        creatorName="Manish Sharma",
                        duration=2,
                        level="Introductory",
                        summary="This session will take a closer look at scopes.  Learn what they do, how they do it, and how to get them to do it for you.",
                        upVoteCount=0
                    },
                    
                    new TSession()
                    {
                        name="Controllers",
                        creatorName="Manish Sharma",
                        duration=4,
                        level="Intermediate",
                        summary="Controllers are the beginning of everything Angular does.  Learn how to craft controllers that will win the respect of your friends and neighbors.",
                        upVoteCount=0
                    }
                }
            });

            AddEvent(new TEvent()
            {
                name = "ASP .Net",
                date = new DateTime(2014, 4, 12),
                time = "9:00 am",
                imageUrl = "/Images/ASP.jpg",
                location = new Location() { address = "Synechron", city = "Pune", state = "Maharashtra" },
                sessions = new List<TSession>()
                    {
                        new TSession()
                        {
                            name="ASP .Net Architecture",
                            creatorName="Manish Sharma",
                            duration=1,
                            level="Intermediate",
                            summary="In this sesison you will learn the ASP .Net Object Model!",
                            upVoteCount=0
                        },
                        new TSession()
                        {
                            name="ASP .Net Modules",
                            creatorName="Manish Sharma",
                            duration=2,
                            level="Intermediate",
                            summary="This session will take a closer look at Http Modules.  Learn what they do, how they do it, and how to get them to do it for you.",
                            upVoteCount=0
                        },
                        new TSession()
                        {
                            name="ASP .Net Handlers",
                            creatorName="Manish Sharma",
                            duration=3,
                            level="Advanced",
                            summary="Handlers are the component which handles a Http request.  Learn how to use inbuilt Handlers and craft Custom controllers that will help to handle a Custom request.",
                            upVoteCount=0
                        }
                    }
            });
        }

        int nextId = 1;

        public void AddEvent(TEvent tEvent)
        {
            tEvent.id = nextId++;
            events.Add(tEvent);
        }

        public TEvent GetDataById(int id)
        {
            return events.FirstOrDefault(i => i.id == id);
        }
    }
}