using Microsoft.AspNetCore.Mvc;
using PruebasProg.Models;
using System.Diagnostics;
using Aspose.Cells;
using System.IO;

namespace PruebasProg.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {

            // Ruta del archivo Excel existente
            string filePath = Path.Combine(Directory.GetCurrentDirectory(), "App_Data", "C: /Users/jaime.cardenas/DocumentsPRUEBAEXCEL.xlsx");

            // Cargar el archivo Excel existente
            Workbook workbook = new Workbook(filePath);

            // Acceder a la hoja de trabajo (worksheet) que deseas modificar
            Worksheet worksheet = workbook.Worksheets[0];

            // Modificar una celda específica
            worksheet.Cells["A1"].PutValue("Nuevo valor");

            // Guardar los cambios de vuelta al mismo archivo (sobrescribir)
            workbook.Save(filePath, SaveFormat.Xlsx);

            // Opcional: Puedes devolver un archivo descargable
            // byte[] fileBytes = System.IO.File.ReadAllBytes(filePath);
            // return File(fileBytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "tu_archivo_modificado.xlsx");

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

     


    }
}
