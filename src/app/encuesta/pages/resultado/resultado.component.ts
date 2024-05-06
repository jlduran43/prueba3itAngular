import { Component, OnInit, ViewChild } from '@angular/core';
import { Encuesta } from '../../interfaces/encuesta';
import { EncuestaService } from '../../service/encuesta.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css'
})
export class ResultadoComponent implements OnInit{

  encuestas!: Encuesta[];

  constructor(private encuestaService: EncuestaService){}

  ngOnInit(): void {
    this.getEncuestas();
  }

  public getEncuestas(){
    this.encuestaService.getEncuestas().subscribe(data => {
      this.encuestas = data;
    });
  }
}
