import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  type = '';
  id = '';
  url = ''
  movies: any;
  movieDetails: any;

  constructor(private router: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.router.params.subscribe(data => {
      this.type = data['type']
      this.id = data['id']
    })
   
    if (this.type === 'trending') {
      this.url = 'http://localhost:4200/assets/data/trending-movie.json'
    }
    else if (this.type === 'popular') {
      this.url = 'http://localhost:4200/assets/data/popular-movies.json'
    }
    else if (this.type === 'all time popular') {
      this.url = 'http://localhost:4200/assets/data/theatre-movies.json'
    }
    this.getMovieDetails()

  }

  getMovieDetails() {
    this.http.get(this.url).subscribe(movies => {
     
      this.movies = movies
      let index = this.movies.findIndex((movie: { id: string }) => String(movie.id) === this.id)
      if (index > -1) {
        this.movieDetails = this.movies[index]
      }
    
     
    })
  }
}
