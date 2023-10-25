import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  trendingMovies: any;
  popularMovies: any;
  allTimePopular: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getPopularMovies();
    this.getAllTimePopular();
  }

  getTrendingMovies() {
    this.http.get('http://localhost:4200/assets/data/trending-movie.json')
      .subscribe(data => {
        this.trendingMovies = data

      }
      )
  }
  getPopularMovies() {
    this.http.get('http://localhost:4200/assets/data/popular-movies.json')
      .subscribe(data => {
        this.popularMovies = data

      }
      )
  }

  getAllTimePopular() {
    this.http.get('http://localhost:4200/assets/data/theatre-movies.json')
      .subscribe(data => {
        this.allTimePopular = data

      }
      )
  }

  goToMoviePage(type: string, id: string) {
    this.router.navigate(['movie', type, id])
  }
}
