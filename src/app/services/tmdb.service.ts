
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_KEY, API_URL } from 'src/environments/environment';
import { FilmesOriginais } from './../model/filmesOriginais.model'

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(
    private http: HttpClient
  ) { }

  public ObtendoOriginais() : Observable<any> {
    return this.http.get(`${API_URL}/movie/top_rated?language=pt-BR&api_key=${API_KEY}`);
  }

  public Obtendotrending() : Observable<any> {
    return this.http.get(`${API_URL}/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
  }

  public ObtendoEmAlta(): Observable<any> {
    return this.http.get(`${API_URL}/trending/all/day?language=pt-BR&api_key=${API_KEY}`)
  }

//   obterOriginais(){
//     return this.httpClient.get<any[]>(`${API_URL}/movie/top_rated?language=pt-BR&api_key=${API_KEY}`).toPromise()
// }

}



// @Injectable({
//     providedIn: 'root'
// })  

// export class Tmdb {

//     constructor(
//         private httpClient: HttpClient
//     ) { }

    

//     obterOriginais(){
//         return this.httpClient.get<any[]>(`${API_URL}/movie/top_rated?language=pt-BR&api_key=${API_KEY}`).toPromise()
//     }


//     getHomeList() {
//         return [
//             {
//                 slug: 'originals',
//                 title: 'Originais Netflix',
//                 items: this.httpClient.get<ITmdb[]>(`/discovery/tv?with_network=213&language=pt-BR&api_key${API_KEY}`).toPromise()
//             },
//             {
//                 slug: 'trending',
//                 title: 'Recomendado para Você',
//                 items: this.httpClient.get<ITmdb[]>(`/trending/all/week?language=pt-BR&api_key${API_KEY}`).toPromise()
//             },
//             {
//                 slug: 'toprated',
//                 title: 'Em Alta',
//                 items: this.httpClient.get<ITmdb[]>(`/movie/top_rated?language=pt-BR&api_key${API_KEY}`).toPromise()
//             },
//             {
//                 slug: 'action',
//                 title: 'Ação',
//                 items: this.httpClient.get<ITmdb[]>(`discovery/movie?with_genres=28&language=pt-BR&api_key${API_KEY}`).toPromise()
//             },
//             {
//                 slug: 'comedy',
//                 title: 'Comédia',
//                 items: this.httpClient.get<ITmdb[]>(`discovery/movie?with_genres=35&language=pt-BR&api_key${API_KEY}`).toPromise()
//             },
//             {
//                 slug: 'horror',
//                 title: 'Terror',
//                 items: this.httpClient.get<ITmdb[]>(`discovery/movie?with_genres=27&language=pt-BR&api_key${API_KEY}`).toPromise()
//             },
//             {
//                 slug: 'romance',
//                 title: 'Romance',
//                 items: this.httpClient.get<ITmdb[]>(`discovery/movie?with_genres=10749&language=pt-BR&api_key${API_KEY}`).toPromise()
//             },
//             {
//                 slug: 'documentary',
//                 title: 'Documentário',
//                 items: this.httpClient.get<ITmdb[]>(`discovery/movie?with_genres=99&language=pt-BR&api_key${API_KEY}`).toPromise()
//             }
//         ]
//     }

// }

