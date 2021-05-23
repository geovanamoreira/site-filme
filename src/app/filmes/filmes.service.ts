import { Injectable } from '@angular/core';
import { Filme } from './filme/filme.model';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  films: Filme[] = [
    {
      id: "filme1",
      nome: "O Estranho Mundo de Jack",
      categoria: "Animação",
      avaliacao: 4.9,
      imagem: "assets/img/filmes/filme1.jpg"
    },

    {
      id: "filme2",
      nome: "Coraline",
      categoria: "Animação",
      avaliacao: 5.0,
      imagem: "assets/img/filmes/filme2.jpg"
    },

    {
      id: "filme3",
      nome: "Noiva Cadáver",
      categoria: "Animação",
      avaliacao: 4.7,
      imagem: "assets/img/filmes/filme3.jpg"
    },

    {
      id: "filme4",
      nome: "Sexta-Feira 13",
      categoria: "Terror",
      avaliacao: 4.5,
      imagem: "assets/img/filmes/filme4.jpg"
    },

    {
      id: "filme5",
      nome: "O Exorcista",
      categoria: "Terror",
      avaliacao: 4.8,
      imagem: "assets/img/filmes/filme5.jpg"
    },

    {
      id: "filme6",
      nome: "Jogos Mortais",
      categoria: "Terror",
      avaliacao: 4.5,
      imagem: "assets/img/filmes/filme6.jpg"
    },

    {
      id: "filme7",
      nome: "Velozes e Furiosos 5",
      categoria: "Ação",
      avaliacao: 4.8,
      imagem: "assets/img/filmes/filme7.jpg"
    },

    {
      id: "filme8",
      nome: "Uma Noite de Crime",
      categoria: "Terror/suspense",
      avaliacao: 4.6,
      imagem: "assets/img/filmes/filme8.jpg"
    },
  ]

  constructor() { }

  filmes(): Filme[]{
  return this.films;
}
}
