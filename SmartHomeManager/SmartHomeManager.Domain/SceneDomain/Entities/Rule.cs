﻿using SmartHomeManager.Domain.DeviceDomain.Entities;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SmartHomeManager.Domain.SceneDomain.Entities
{
    public class Rule
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid RuleId { get; set; }

        [Required]
        public Guid ScenarioId { get; set; }

        [Required]
        public string ConfigurationKey { get; set; }
        [Required]
        public int ConfigurationValue { get; set; }

        public string? ActionTrigger { get; set; }

        [Required] 
        public string RuleName { get; set; }

        public DateTime? StartTime { get; set; }

        public DateTime? EndTime { get; set; }

        public Guid DeviceId { get; set; }

        public string? APIKey { get; set; }

        public string? ApiValue { get; set; }

        [ForeignKey("ScenarioId")]
        public Scenario Scenario { get; set; }

        [ForeignKey("DeviceId")]
        public Device Device { get; set; }
    }
}
