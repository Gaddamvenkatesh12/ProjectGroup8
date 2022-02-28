import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Medicine } from '../model/Medicine'

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  [x: string]: any;

  constructor(private httpClient: HttpClient) {
  }

  
  getMedicines() {
    return this.httpClient.get<Medicine[]>('http://localhost:8905/api/medicines');
  }

  addMedicine(newMedicine: any) {
    return this.httpClient.post<Medicine>('http://localhost:8905/api/medicines', newMedicine);
  }
 
  deleteMedicine(id) {
    return this.httpClient.delete<Medicine>('http://localhost:8905/api/' + id);
  }

  updateMedicine(updatedMedicine: Medicine) {
    return this.httpClient.put<Medicine>('http://localhost:8905/api/update', updatedMedicine);
  }
}