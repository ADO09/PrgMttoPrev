using PruebasProg.Models;

namespace PruebasProg.services
{
    public interface IServiceApi
    {
        Task<List<MttoListModel>> Lista();
        // Task<Tarea> Obtener(int idtarea);
        //Task<List<MttoListModel>> Filter(MttoListModel objeto);
        Task<bool> Guardar(MttoListModel objeto);
        Task<bool> Liberar(MttoListModel objeto);
    }
}
