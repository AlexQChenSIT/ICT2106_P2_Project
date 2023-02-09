﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SmartHomeManager.Domain.AccountDomain.Entities;

namespace SmartHomeManager.Domain.AccountDomain.Interfaces
{
    public interface IProfileRepository
    {
        public Task<bool> AddAsync(Profile profile);
        public Task<Profile?> GetByIdAsync(Guid id);
        public Task<IEnumerable<Profile>> GetAllAsync();
        public Task<bool> UpdateAsync(Profile profile);
        public Task<bool> DeleteAsync(Profile profile);
        public Task<bool> DeleteByIdAsync(Guid id);
        public Task<int> SaveAsync();
    }
}
