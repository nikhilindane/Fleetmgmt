using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Fleeman.Models
{
    public partial class Booking_Header
    {

    }
    public class Booking_Header_Validation
    {
        [Key]
        public int Booking_Id { get; set; }

        [Column(TypeName = "date")]
        public DateTime? Date { get; set; }

        public int? Customer_Id { get; set; }

        
        [Column("Start _Date", TypeName = "date")]
        [Required]
        public DateTime? Start__Date { get; set; }
       
        [Column(TypeName = "date")]
        [Required]
        public DateTime? End_Date { get; set; }

        public int? Cartype_Id { get; set; }

        public string Customer_Details { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Booking_Details> Booking_Details { get; set; }

        public virtual CarType_Master CarType_Master { get; set; }

        public virtual Customer_Master Customer_Master { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Invoice_Header> Invoice_Header { get; set; }
    }
}