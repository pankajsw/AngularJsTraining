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
        DataRepository repObject = new DataRepository();

        public ActionResult Get(int id)
        {
            return Json(repObject.GetDataById(id), 
                JsonRequestBehavior.AllowGet);
        }

    }
}
