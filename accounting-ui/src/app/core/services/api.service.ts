import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocumentItem } from '../contracts/contracts';
// import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = "https://76gdp7pzbb.execute-api.eu-central-1.amazonaws.com/prod"

  constructor(private http: HttpClient) { }

  getStatementTxs(statementId: string): Observable<DocumentItem> {
    const url = `${this.baseUrl}/status/${statementId}`
    return this.http.get<DocumentItem>(url);
  }

} 

// curl -X PUT https://76gdp7pzbb.execute-api.eu-central-1.amazonaws.com/prod/upload -H "Content-Type: application/pdf"  --data-binary @"/Users/ricardo/Downloads/RU-2-22SOLO.pdf"