using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PruebasProg.Models;
using PruebasProg.services;
using System.Diagnostics;
using Newtonsoft.Json;
using OfficeOpenXml;
using System.Globalization;
namespace PruebasProg.Controllers
{
    public class MttoController : Controller
    {

        private IServiceApi _serviceApi;
        // GET: MttoController
        private readonly IWebHostEnvironment _hostingEnvironment;



        public MttoController(IServiceApi serviceApi, ILogger<HomeController> logger, IWebHostEnvironment hostingEnvironment)
        {
            _serviceApi = serviceApi;
            
            _hostingEnvironment = hostingEnvironment;
        }
        //public ActionResult Index()
        //{
        //    return View();
        //}

        public async Task<IActionResult> Index()
        {
            List<MttoListModel> lista = await _serviceApi.Lista();
            //Console.WriteLine("valor " + lista);
            // Debug.WriteLine($"Datos recibidos del backend: {lista}");
            return View(lista);
            //return Json(lista);
        }

        public async Task<IActionResult> JIndex()
        {
            List<MttoListModel> lista = await _serviceApi.Lista();
            //Console.WriteLine("valor " + lista);
            // Debug.WriteLine($"Datos recibidos del backend: {lista}");
            return Json(lista);
            //return Json(lista);
        }




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
        public async Task<IActionResult> AddMtto(MttoListModel mtoModel)
        {


            //Debug.WriteLine("1 :" + mtoModel.GteIs);
            //Debug.WriteLine("2 :" + mtoModel.SupIs);
            Debug.WriteLine("3 :" + mtoModel.FechaPROG);
            Debug.WriteLine("4 :" + mtoModel.planta);
            //Debug.WriteLine("4 :" + mtoModel.AprobadoPor);
            //Debug.WriteLine("5 :" + mtoModel.RevisadoPor);
            //Debug.WriteLine("6 :" + mtoModel.RealizadoPor);
            //Debug.WriteLine("7 :" + mtoModel.semana);

            string fechaActual = mtoModel.FechaPROG;
            DateTime fechaDateTime = DateTime.ParseExact(fechaActual, "yyyy-MM-dd", CultureInfo.InvariantCulture);
            string nombreMesEspanol = fechaDateTime.ToString("MMMM", CultureInfo.CreateSpecificCulture("es-ES"));

            // FECHA DIVIDIDA EN YYYY,MM,DD
            int añoP = fechaDateTime.Year;
            int mesP = fechaDateTime.Month;
            int diaP = fechaDateTime.Day;


            nombreMesEspanol  = nombreMesEspanol.ToUpper();
         


            Debug.WriteLine($"El nombre del mes es: {nombreMesEspanol}");
            Debug.WriteLine($"El año es: {añoP}");
            Debug.WriteLine($"El mes es: {mesP}");
            Debug.WriteLine($"El dia es: {diaP}");


            //using (var client = new HttpClient())
            //{
            //    // Crea un objeto FormUrlEncodedContent con los datos del formulario
            //    var formData = new FormUrlEncodedContent(new[]
            //    {
            //    //new KeyValuePair<string, string>("Fecha1", mtoModel.GteIs),
            //    //new KeyValuePair<string, string>("Fecha2", mtoModel.SupIs),
            //    new KeyValuePair<string, string>("Planta", mtoModel.FechaPROG),
            //    new KeyValuePair<string, string>("Perfil", mtoModel.AprobadoPor),
            //    new KeyValuePair<string, string>("Reloj", mtoModel.RevisadoPor),
            //    new KeyValuePair<string, string>("Reloj", mtoModel.RealizadoPor),
            //    //new KeyValuePair<string, string>("Reloj", mtoModel.semana),

            //});

            //    // Envía la solicitud POST con el contenido del formulario
            //    var response = await client.PostAsync(apiUrl, formData);

            //    if (response.IsSuccessStatusCode)
            //    {
            //        var htmlTable = await response.Content.ReadAsStringAsync();
            //        return Content(htmlTable, "text/html");
            //    }
            //    else
            //    {
            //        // Maneja el error en caso de que la solicitud a la API falle
            //        return StatusCode((int)response.StatusCode, "Error al obtener datos de la API");
            //    }
            //}



     
            // Ruta del archivo Excel
            string webRootPath = _hostingEnvironment.WebRootPath;
          
            string filePath = Path.Combine(webRootPath, "archivosMttos/master", "progMM.xlsx");
            Debug.WriteLine($"Ruta del archivo Excel: {filePath}");

            string nombreArchivo = "Programa-MttoExel-"+nombreMesEspanol+".xlsx"; // Nombre del archivo duplicado

            string rutayearPlanta = Path.Combine(webRootPath, "archivosMttos", añoP.ToString()+"/"+mtoModel.planta);
            if (!Directory.Exists(rutayearPlanta))
            {
                Directory.CreateDirectory(rutayearPlanta);
                //Debug.WriteLine($"Directorio '{rutaAñoFile}' creado exitosamente.");
            }

            string rutaDestino = Path.Combine(webRootPath, rutayearPlanta +"/"+nombreArchivo);
      
                if (System.IO.File.Exists(filePath))
            {

                Debug.WriteLine("SI EXISTE LJAHDOIUAHDIOUAHDSOIU");
                try
                {
                    DateTime fecha = new DateTime(añoP, mesP, 1);

                    int numeroSemana = CultureInfo.InvariantCulture.Calendar.GetWeekOfYear(fecha, CalendarWeekRule.FirstFourDayWeek, DayOfWeek.Monday);
                    Debug.WriteLine(numeroSemana + "  ESTA ES LA SEMANA");


                    DateTime now = new DateTime(añoP, mesP, 1);
                    var startDate = new DateTime(now.Year, now.Month, 1); // Iniciar con el primer día del mes
                    var endDate = startDate.AddMonths(1).AddDays(-1); // Obtener el último día del mes actual
                    var primerLunes = startDate;
                    while (primerLunes.DayOfWeek != DayOfWeek.Monday)
                    {
                        primerLunes = primerLunes.AddDays(1);
                    }

                    int FechaPrimerLunes = primerLunes.Day;
                    Debug.WriteLine(primerLunes.Day + "Este es el primer lunes del mes");

                    // // Supongamos que el 24 de noviembre está en la semana 47
                    //int anio = 2024;

                    //DateTime primerDiaSemana = GetPrimerDiaSemana(numeroSemana, añoP,mesP);
                    //Debug.WriteLine($"El primer día de la semana {numeroSemana} del año {añoP} es el {primerDiaSemana:dd/MM/yyyy}.");

                    //int diaPrimeroInt = primerDiaSemana;

                    //Debug.WriteLine(diaPrimeroInt + "Este es e dia primero de la semana actual si");
                    //int weekNumber = CultureInfo.CurrentCulture.Calendar.GetWeekOfYear(DateTime.Now, CalendarWeekRule.FirstFourDayWeek, DayOfWeek.Monday);

                    //Debug.WriteLine(weekNumber);
                    System.IO.File.Copy(filePath, rutaDestino, true);
                    ViewBag.Message = "Archivo duplicado correctamente.";

                    // Abrir el archivo Excel usando EPPlus
                    using (ExcelPackage package = new ExcelPackage(new FileInfo(rutaDestino)))
                    {
                        // Obtener la hoja de trabajo (worksheet)
                        ExcelWorksheet worksheet = package.Workbook.Worksheets[0];

                        // revisado, realizado, aprovado,PLANTA
                        worksheet.Cells["AI4"].Value = mtoModel.RealizadoPor;
                        worksheet.Cells["AO4"].Value = mtoModel.RevisadoPor;
                        worksheet.Cells["AU4"].Value = mtoModel.AprobadoPor;
                        worksheet.Cells["D3"].Value = mtoModel.planta;
                        worksheet.Cells["D5"].Value = nombreMesEspanol;

                        //SEMANAS 
                        worksheet.Cells["E8"].Value = "SEMANA #" + (numeroSemana);
                        worksheet.Cells["Q8"].Value = "SEMANA #" + (numeroSemana + 1);
                        worksheet.Cells["AC8"].Value = "SEMANA #" + (numeroSemana + 2);
                        worksheet.Cells["AO8"].Value = "SEMANA #" + (numeroSemana + 3);

                        //gte,sup
                        worksheet.Cells["E59"].Value = mtoModel.GteIs;
                        worksheet.Cells["E58"].Value = mtoModel.SupIs;


                        //dias
                        worksheet.Cells["E9"].Value = (FechaPrimerLunes);
                        worksheet.Cells["G8"].Value = (FechaPrimerLunes + 1);
                        worksheet.Cells["IC9"].Value = (FechaPrimerLunes + 2);
                        worksheet.Cells["K9"].Value = (FechaPrimerLunes + 3);
                        worksheet.Cells["M9"].Value = (FechaPrimerLunes + 4);
                        worksheet.Cells["O9"].Value = (FechaPrimerLunes + 5);
                        worksheet.Cells["Q9"].Value = (FechaPrimerLunes + 7);
                        worksheet.Cells["S9"].Value = (FechaPrimerLunes + 8);
                        worksheet.Cells["U9"].Value = (FechaPrimerLunes + 9);
                        worksheet.Cells["W9"].Value = (FechaPrimerLunes + 10);
                        worksheet.Cells["Y9"].Value = (FechaPrimerLunes + 11);
                        worksheet.Cells["AA9"].Value = (FechaPrimerLunes + 12);
                        worksheet.Cells["AC9"].Value =  (FechaPrimerLunes + 14);
                        worksheet.Cells["AE9"].Value = (FechaPrimerLunes + 15);
                        worksheet.Cells["AG9"].Value = (FechaPrimerLunes + 16);
                        worksheet.Cells["AI9"].Value = (FechaPrimerLunes + 17);
                        worksheet.Cells["AK9"].Value = (FechaPrimerLunes + 18);
                        worksheet.Cells["AM9"].Value = (FechaPrimerLunes + 19);
                        worksheet.Cells["AO9"].Value =  (FechaPrimerLunes + 21);
                        worksheet.Cells["AQ9"].Value =   (FechaPrimerLunes + 22);
                        worksheet.Cells["AS9"].Value = (FechaPrimerLunes + 23);
                        worksheet.Cells["AU9"].Value = (FechaPrimerLunes + 24);
                        worksheet.Cells["AW9"].Value =  (FechaPrimerLunes + 25);
                        worksheet.Cells["AY9"].Value =  (FechaPrimerLunes + 26);

                        // Guardar los cambios
                        package.Save();
                    }
                    List<MttoListModel> lista = await _serviceApi.Lista();
                   

                 
                     
                        return NoContent();
                }
                catch (Exception ex)
                {
                    Debug.WriteLine("SI algo sale mal");
                    ViewBag.ErrorMessage = ex.Message;

                }
            }
            else
            {
                // Manejar el caso en que el archivo no exista
                ViewBag.Error = "El archivo Excel no existe.";
            }

            return NoContent();
            //try
            //{


            //return RedirectToAction(nameof(Index));
            //}
            //catch
            //{
            //return View();
            //}
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




        static DateTime GetPrimerDiaSemana(int numeroSemana, int anio,int mes)
        {
            DateTime fecha = new DateTime(anio, 1, 1);
            while (CultureInfo.InvariantCulture.Calendar.GetWeekOfYear(fecha, CalendarWeekRule.FirstFourDayWeek, DayOfWeek.Monday) != numeroSemana)
            {
                fecha = fecha.AddDays(1);
            }
            return fecha;
        }
    }
}




