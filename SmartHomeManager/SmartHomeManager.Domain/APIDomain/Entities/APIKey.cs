﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartHomeManager.Domain.APIDomain.Entities
{
    public class APIKey
    {
        [Key]
        public string APIKeyType { get; set; }

        [Required] public string APILabelText { get; set; }
    }
}
