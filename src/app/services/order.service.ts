import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderRequest, OrderResponse } from '../models/order.model';
import { MemberStatusResponse } from '../models/member-status.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // API URL for the backend service
  // private apiUrl = 'http://localhost:8080/api'; // Local development URL
  private apiUrl = environment.apiUrl;
  private http = inject(HttpClient);

  // Constructor to inject HttpClient
  placeOrder(orderRequest: OrderRequest): Observable<OrderResponse> {
    return this.http.post<OrderResponse>(`${this.apiUrl}/orders`, orderRequest);
  }

  // Method to get the order status by order number
  calculateAndUpdateMemberStatus(userId: string, orderNumber: string): Observable<MemberStatusResponse> {
    return this.http.post<MemberStatusResponse>(`${this.apiUrl}/member-status/calculate`, {userId, orderNumber});
  }

}
