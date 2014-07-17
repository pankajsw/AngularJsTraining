using Demo_App.Models;
using Demo_App.Respository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Demo_App.Controllers
{
    public class DataController : Controller
    {
        static DataRepository repObject = new DataRepository();

        public ActionResult GetAll()
        {
            return Json(repObject.Events, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetById(int id)
        {
            return Json(repObject.GetDataById(id), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public void Add(TEvent tEvent)
        {
            repObject.AddEvent(tEvent);
        }

    }
}
