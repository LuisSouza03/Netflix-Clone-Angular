import { Component, OnInit } from '@angular/core';
import { TmdbService } from './services/tmdb.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FilmesOriginais } from './model/filmesOriginais.model'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Netflix-Clone';

  FilmesOriginais!: any;
  FilmesOrigi !: any[]
  FilmesEmAlta !: any;
  FilmesEmAltaPoster !: string;
  FilmesEmAltaDate !: Date
  
  error !: any

  constructor(
    private Tmdb: TmdbService,
    private http: HttpClient
  ) { 
    this.obterFilmesOriginais();
    this.ObterFilmesEmAlta();
    // this.ObterFilmesTrending()
   }

  ngOnInit(): void {

  }

  obterFilmesOriginais(){
    this.Tmdb.ObtendoOriginais().subscribe((data : FilmesOriginais) => {
      const filmes = data.results
      this.FilmesOriginais = filmes;
      console.log('Variavel filmes', this.FilmesOriginais)
    }, (error : any) => {
      this.error = error
      console.log('ERROR:', this.error)
    })
  };

  ObterFilmesEmAlta() {
    this.Tmdb.ObtendoEmAlta().subscribe((data : FilmesOriginais) => {
      const EmAlta = data.results;
      let NumberAleatory = Math.floor(Math.random() * 19);
      this.FilmesEmAlta = EmAlta[NumberAleatory];
      this.FilmesEmAltaPoster = "https://image.tmdb.org/t/p/original/" + this.FilmesEmAlta.backdrop_path
      let DataLancamento = EmAlta[NumberAleatory].release_date
      DataLancamento = new Date(DataLancamento);
      this.FilmesEmAltaDate = DataLancamento.getFullYear();
    }, (error : any) => {
      this.error = error
    })
  }

  // ObterFilmesTrending() {
  //   this.Tmdb.Obtendotrending().subscribe((data : FilmesOriginais) => {
  //     this.FilmesOriginais = data
  //     console.log('Filmes Tranding', this.FilmesOriginais.results)
  //   }, (error : any) => {
  //     this.error = error
  //     console.log('ERROR:', this.error)
  //   })
  // }

  

}
