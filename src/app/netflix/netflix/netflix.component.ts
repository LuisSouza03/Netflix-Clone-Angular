import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FilmesOriginais } from 'src/app/model/filmesOriginais.model';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-netflix',
  templateUrl: './netflix.component.html',
  styleUrls: ['./netflix.component.scss']
})
export class NetflixComponent implements OnInit {

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

  obterFilmesOriginais() {
    this.Tmdb.ObtendoOriginais().subscribe((data: FilmesOriginais) => {
      const filmes = data.results
      this.FilmesOriginais = filmes;
    }, (error: any) => {
      this.error = error
      console.log('ERROR:', this.error)
    })
  };

  ObterFilmesEmAlta() {
    this.Tmdb.ObtendoEmAlta().subscribe((data: FilmesOriginais) => {
      debugger;
      const EmAlta = data.results;
      let NumberAleatory = Math.floor(Math.random() * 19);
      this.FilmesEmAlta = EmAlta[NumberAleatory];
      console.log(this.FilmesEmAlta)
      this.FilmesEmAltaPoster = "https://image.tmdb.org/t/p/original/" + this.FilmesEmAlta.backdrop_path
      let DataLancamento = EmAlta[NumberAleatory].release_date
      if(DataLancamento == undefined) {
        DataLancamento = EmAlta[NumberAleatory].first_air_date
      }
      DataLancamento = new Date(DataLancamento);
      this.FilmesEmAltaDate = DataLancamento.getFullYear();
    }, (error: any) => {
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
