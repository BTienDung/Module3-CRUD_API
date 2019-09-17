import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Customer} from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  onNewCustomer = new Subject<any>();
  ApiUrl = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) { }
  addCustomer(customer: Customer): Observable<any> {
    return this.httpClient.post(`${this.ApiUrl}/customers/`, customer);
  }
  getListCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.ApiUrl}/customers/`);
  }
  deleteCustomer(id: number): Observable<any> {
    return this.httpClient.delete(`${this.ApiUrl}/customers/${id}`);
  }
  updateCustomer(customer: Customer): Observable<any> {
    return this.httpClient.put(`${this.ApiUrl}/customers/${customer.id}`, customer);
  }
  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.ApiUrl}/customers/${id}`);
  }

}
