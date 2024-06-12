using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PruebasProg.Models;
using PruebasProg.services;
using System.Diagnostics;
using Newtonsoft.Json;

namespace PruebasProg.Controllers
{
    public class MttoController : Controller
    {

        private IServiceApi _serviceApi;
        // GET: MttoController




        public MttoController(IServiceApi serviceApi)
        {
            _serviceApi = serviceApi;
        }
        //public ActionResult Index()
        //{
        //    return View();
        //}

        public async Task<IActionResult> Index()
        {
            List<MttoListModel> lista = await _serviceApi.Lista();
            Console.WriteLine("valor " + lista);
            // Debug.WriteLine($"Datos recibidos del backend: {lista}");
            return View(lista);
            //return Json(lista);
        }

        //[HttpPost]
        //public async Task<IActionResult> Filter(LinePatrolFilter linePatrolFilter)
        //{
        //    List<LinePatrolListado> listaFilter = await _servicioApi.Filter(linePatrolFilter);
        //    return PartialView("filter", listaFilter);
        //}





















        // GET: MttoController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: MttoController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: MttoController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: MttoController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: MttoController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: MttoController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: MttoController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}




