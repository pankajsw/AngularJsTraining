using Demo_App.Respository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Demo_App.Controllers
{
    public class JustController : ApiController
    {
        DataRepository repObject = new DataRepository();

        public TEvent Get(int id)
        {
            return repObject.GetDataById(id);
        }
    }
}
