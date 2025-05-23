import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../model/customer.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  public getCustomers():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>("http://localhost:8085/customers")
  }
  public searchCustomers(keyword:String):Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>("http://localhost:8085/customers/search?keyword="+keyword)
  }

  public saveCustomers(customer:Customer):Observable<Customer>{

    return this.http.post<Customer>("http://localhost:8085/customers",customer);
  }
  public deleteCustomers(id:number){

    // @ts-ignore
    return this.http.delete("http://localhost:8085/customers"+id);
  }

}
