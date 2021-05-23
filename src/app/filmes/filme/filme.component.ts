import { Component, Input, OnInit } from '@angular/core';
import { Filme } from './filme.model';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  @Input() filme: Filme;

  constructor() { }

  ngOnInit(): void {
  }

}
