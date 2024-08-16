import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public codigo?: number;
  public nome?: string;
  public aluno?: string;


  constructor() { }

  ngOnInit(): void {
    this.olaHome();
  }

   olaHome() {
    this.nome = "Jota"
    console.log('Olá console')
    let i;
    for(i=0; i < 10; i++){
      console.log(i)
      this.codigo = i;
    }
   }

}
