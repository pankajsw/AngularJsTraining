﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Demo_App.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult NewEvent()
        {
            return View();
        }

        public ActionResult EventList()
        {
            return View();
        }

        public ActionResult EventDetails()
        {
            return View();
        }
    }
}
