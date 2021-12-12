import axiosPackage from 'axios';

export const axios = axiosPackage.create({
    baseURL: 'http://localhost:5000/api/',
    headers: {
        accept: 'application/json',
        'content-type': 'application/json; charset=utf-8',
     
        // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxY…zQ5fQ.Nf4PbkXTlDH95AbzR46_F5A-0114Nkxm_HDAoc3C52M`,
    }
  });