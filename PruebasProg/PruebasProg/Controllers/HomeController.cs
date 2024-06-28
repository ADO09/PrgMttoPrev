using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Mvc;
using OfficeOpenXml;
using PruebasProg.Models;
using System.Diagnostics;
using System.IO;
using Microsoft.AspNetCore.Hosting;


namespace PruebasProg.Controllers
{
    public class HomeController : Controller
    {
        private readonly IWebHostEnvironment _hostingEnvironment;

        private readonly ILogger<HomeController> _logger;

        


        public HomeController(ILogger<HomeController> logger, IWebHostEnvironment hostingEnvironment)
        {
            _logger = logger;
            _hostingEnvironment = hostingEnvironment;
        }

        public IActionResult Index()
        {


         
            // Verificar si el archivo existe
            // Ruta del archivo Excel
            string webRootPath = _hostingEnvironment.WebRootPath;
            string filePath = Path.Combine(webRootPath, "archivosMttos", "PROGRAMACION DE MANTENIMIENTOS MAYO.xlsx");
            Debug.WriteLine($"Ruta del archivo Excel: {filePath}");


            string nombreArchivo = "PRUEBAEXCEL_copiado.xlsx"; // Nombre del archivo duplicado
            string rutaDestino = Path.Combine(webRootPath, "archivosMttos", nombreArchivo);
            // Verificar si el archivo existe
            if (System.IO.File.Exists(filePath))
            {

                Debug.WriteLine("SI EXISTE LJAHDOIUAHDIOUAHDSOIU");
                try
                {

                    System.IO.File.Copy(filePath, rutaDestino, true);
                    ViewBag.Message = "Archivo duplicado correctamente.";

                    // Abrir el archivo Excel usando EPPlus
                    using (ExcelPackage package = new ExcelPackage(new FileInfo(filePath)))
                    {
                        // Obtener la hoja de trabajo (worksheet)
                        ExcelWorksheet worksheet = package.Workbook.Worksheets[0];

                        // Modificar el contenido según tus necesidades
                        worksheet.Cells["G18"].Value = "22";

                        // Guardar los cambios
                        package.Save();
                    }
                }
                catch (Exception ex)
                {
                    ViewBag.ErrorMessage = ex.Message;
                 
                }
            }
            else
            {
                // Manejar el caso en que el archivo no exista
                ViewBag.Error = "El archivo Excel no existe.";
            }

            return View();

        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }




    //    public IActionResult DuplicateFile()
    //    {
    //        string webRootPath = _hostingEnvironment.WebRootPath;
    //        string rutaOrigen = Path.Combine(webRootPath, "archivosMttos", "PRUEBAEXCEL.xlsx");
          

    //        try
    //        {
    //            if (System.IO.File.Exists(rutaOrigen))
    //            {
                  
    //            }
    //            else
    //            {
    //                ViewBag.Error = "El archivo de origen no existe.";
    //            }
    //        }
    //        catch (Exception ex)
    //        {
    //            ViewBag.Error = $"Error al duplicar el archivo: {ex.Message}";
    //        }

    //        return View();
    //    }


    }



}






















 
