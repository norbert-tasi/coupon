import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HttpService {
    constructor(private httpClient: HttpClient) { }

    post<T>(endpoint: string, item: any): Promise<T> {
        return this.httpClient.post<T>(`/api/${endpoint}`, item).toPromise();
    }

    put<T>(endpoint: string, item: any): Promise<T> {
        return this.httpClient.put<T>(`/api/${endpoint}/${item.id}`, item).toPromise();
    }

    get<T>(endpoint: string, id: number): Promise<T> {
        return this.httpClient.get<T>(`/api/${endpoint}/${id}`).toPromise();
    }

    query<T>(endpoint: string): Promise<any> {
        return this.httpClient.get<T[]>(`/api/${endpoint}`).toPromise();
    }

}
