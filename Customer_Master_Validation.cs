using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Fleeman.Models
{
    [MetadataType(typeof(Customer_Master_Validation))]
    public partial class Customer_Master
    {

    }
    public partial class Customer_Master_Validation
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
       

        [Key]
        public int Customer_Id { get; set; }

        [StringLength(15, MinimumLength = 8)]
        [Required]
        [DataType(DataType.Password)] //input type="Password"

        public string Password { get; set; }

        [Required]
        [DisplayName("First Name")]

        public string First_Name { get; set; }

        [StringLength(50)]
        public string Middle_Name { get; set; }

        [Required]
        [DisplayName("Last Name")]
        public string Last_Name { get; set; }

        [Required]

        [DataType(DataType.MultilineText)] //Textarea

        public string Current_Address { get; set; }

        [Required]

        [DataType(DataType.MultilineText)] //Textarea

        public string Permanant_Address { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)] //input type ="Email"
        [RegularExpression(@"^[\w-\._\+%]+@(?:[\w-]+\.)+[\w]{2,6}$", ErrorMessage = "Please enter a valid email address")]
        public string Email_Id { get; set; }

        [Required]
        [DisplayName("City")]
        public string City { get; set; }

        [Column(TypeName = "numeric")]
        public decimal? Zipcode { get; set; }

        [RegularExpression("[0-9]{10}", ErrorMessage = "Please enter a valid mobile address")]
        [Required(ErrorMessage = "Please enter your phone number")]
        [DataType(DataType.PhoneNumber)] //type="tel"
        public int Mobile_Number { get; set; }

        public int? Phone_Number { get; set; }

        [Required]
        [RegularExpression(@"^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$", ErrorMessage = "Please enter valid Licence number")]
        public string Driving_License { get; set; }

        [Required]
        [StringLength(50)]
        public string Issued_By { get; set; }

        public DateTime License_Valid_Date { get; set; }

        public DateTime DOB { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Booking_Header> Booking_Header { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Invoice_Header> Invoice_Header { get; set; }
    }
}