using PruebasProg.Models;
using Newtonsoft.Json;
using System.Net.Http.Headers;
using System.Text;
using System.Diagnostics;

namespace PruebasProg.services
{
    public class ServiceApi : IServiceApi
    {
        public async Task<bool> Guardar(MttoListModel objeto)
        {
            bool respuesta = false;
            //objeto.imagen = null;


            Console.WriteLine("service data : " + objeto.Comentarios);


            var cliente = new HttpClient();
            // cliente.BaseAddress = new Uri(_baseUrl);

            string json = JsonConvert.SerializeObject(objeto);

            // Define el contenido de la solicitud HTTP
            var content = new StringContent(json, System.Text.Encoding.UTF8, "application/json");


            // var content = new StringContent(JsonConvert.SerializeObject(objeto), Encoding.UTF8, "application/json");

            Debug.WriteLine("El valor de respuesta es: " + content);


            var response = await cliente.PostAsync("http://172.30.106.57:3001/mttosPost", content);



            if (response.IsSuccessStatusCode)
            {
                respuesta = true;
            }

            return respuesta;
        }

        public Task<bool> Liberar(MttoListModel objeto)
        {
            throw new NotImplementedException();
        }

        public async Task<List<MttoListModel>> Lista()
        {
            List<MttoListModel> lista = new List<MttoListModel>();



            var cliente = new HttpClient();
            // cliente.BaseAddress = new Uri("https://jsonplaceholder.typicode.com/todos");
            // var response = await cliente.GetAsync("https://jsonplaceholder.typicode.com/posts");
            var response = await cliente.GetAsync("http://172.30.106.57:3001/mttos");



            if (response.IsSuccessStatusCode)
            {

                var json_respuesta = await response.Content.ReadAsStringAsync();
                var resultado = JsonConvert.DeserializeObject<List<PruebasProg.Models.MttoListModel>>(json_respuesta);

                if (resultado != null)
                {
                    Console.WriteLine(resultado);
                    return resultado;
                }
                else
                {
                    // Manejar el escenario donde resultado es nulo, por ejemplo, lanzar una excepción o devolver una lista vacía
                    // Aquí un ejemplo de devolución de una lista vacía
                    return new List<PruebasProg.Models.MttoListModel>();
                }
            }
            else
            {
                return new List<PruebasProg.Models.MttoListModel>();
            }
        }
    }
}
