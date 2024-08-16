import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public codigo?: number;
  public nome?: string;
  public aluno: string = "Gustavo";
  public num1: number[] = [];

  canShow: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.olaHome();
  }

   olaHome() {
    this.nome = "João"
    console.log('Olá console')
    this.num1 = [];
    for(let i=0; i < 2; i++){
      console.log(i);
      this.num1.push(i);
      this.codigo = i;
    }
   }

}
