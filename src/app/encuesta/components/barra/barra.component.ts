import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartData, ChartType, registerables, ChartEvent} from 'chart.js';
import { EncuestaService } from '../../service/encuesta.service';
import { Router } from '@angular/router';
import { Encuesta } from '../../interfaces/encuesta';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrl: './barra.component.css'
})
export class BarraComponent{
  public encuestas: Encuesta[] = [];

  // Doughnut
  @Input('labels')
  public doughnutChartLabels: any[] = [];
  public result: number[] = [];

  public getEncuestas(): void{
    this.encuestaService.getEncuestas()
      .subscribe(rsp => {
        this.encuestas = rsp;
        this.doughnutChartLabels = rsp.map(a => a.estilo_musical);

        this.doughnutChartLabels.forEach((value) =>{
          this.result[value] = (this.result[value] || 0) + 1;
        })

        console.log(Object.values(this.result));


         this.doughnutChartData = {
          labels: this.doughnutChartLabels,
          datasets: [{
            data: Object.values(this.result),
            backgroundColor: ['#6857E6','#009FEE','#F02059', '#A053056'],
          },
        ],
        };
     });
  }

  constructor(private encuestaService: EncuestaService,
              private router: Router) {
    Chart.register(...registerables);
    this.getEncuestas();
  }

  @Input('data')
  public doughnutChartData: any = [];

  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }
}
