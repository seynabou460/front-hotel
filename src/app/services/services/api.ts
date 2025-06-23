import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // 🔐 Génère les headers avec le token si présent
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: token ? `Bearer ${token}` : ''
    });
  }

  // ✅ GET : Liste des hôtels
  getHotels(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/hotels`, {
      headers: this.getAuthHeaders()
    });
  }

  // ✅ GET : Détail d’un hôtel
  getHotelById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/hotels/${id}`, {
      headers: this.getAuthHeaders()
    });
  }

  // ✅ POST : Ajouter un hôtel
  createHotel(data: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/hotels`, data, {
      headers: this.getAuthHeaders()
    });
  }

  // ✅ PUT : Modifier un hôtel
  modifierHotel(id: string, data: FormData): Observable<any> {
    return this.http.put(`${this.apiUrl}/hotels/${id}`, data, {
      headers: this.getAuthHeaders()
    });
  }

  // ✅ DELETE : Supprimer un hôtel
  supprimerHotel(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/hotels/${id}`, {
      headers: this.getAuthHeaders()
    });
  }
}