using System.ComponentModel.DataAnnotations;

namespace PruebasProg.Models
{
    public class MttoListModel
    {
        public int? IdMTTO { get; set; }

        public int? IdLinea { get; set; }

        public int? IdPlanta { get; set; }

        public string? Nserie { get; set; }

        public string? Comentarios { get; set; }

        public string? ProblemasEncontrados { get; set; }

        public string? CambiosRealizados { get; set; }

        public string? Path_IMG { get; set; }

        [Display(Name = "Fecha Programada")]
        public string? FechaPROG { get; set; }

        [Display(Name = "Fecha Realizada")]
        public string? FechaRealiz { get; set; }

        [Display(Name = "Realizado Por")]
        public string? RealizadoPor { get; set; }

        [Display(Name = "Revisado Por")]
        public string? RevisadoPor { get; set; }

        [Display(Name = "Aprobado Por")]
        public string? AprobadoPor { get; set; }

        public string? Estatus { get; set; }

        public string? Estacion { get; set; }

        public string? SupIs { get; set; }
        public string? GteIs { get; set; }

        public string? planta { get; set; }

        public string? mesName { get; set; }    


    }

  
}
