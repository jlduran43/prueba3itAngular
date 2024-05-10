import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../service/validators.service';
import { EstiloMusical } from '../../interfaces/estiloMusical';
import { EncuestaService } from '../../service/encuesta.service';
import { Encuesta } from '../../interfaces/encuesta';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  err: string = '';
  @ViewChild('form') form: any;

  constructor(private fb: FormBuilder,
              private validatorService: ValidatorsService,
              private encuestaService: EncuestaService,
              private snackbar: MatSnackBar,
              private router: Router){}

  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], ],
    estilo_musical: ['', Validators.required]
  })

  @Input() estilosMusicales: EstiloMusical[] = [
    {id: 'Rock', desc: 'Rock'},
    {id: 'Pop', desc: 'Pop'},
    {id: 'Clasica', desc: 'Clásica'},
    {id: 'Salsa', desc: 'Salsa'},
  ];

  get currentEncuesta(): Encuesta {
    const encuesta = this.myForm.value as Encuesta;
    return encuesta;
  }

  isValidField(field: string): boolean | null{
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  getFieldError(field: string): string | null{
    if( !this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for(const key of Object.keys(errors)){
      switch( key ){
        case 'required':
          return "Este campo es requerido";
        case 'minlength':
          return `Mínimo ${ errors['minlength'].requiredLength } caracters.`;
      }

      return null;
    }

    return "Hola Mundo";
  }

  onSave(): void{
    if(this.myForm.valid){
        this.encuestaService.addEncuesta(this.currentEncuesta)
        .subscribe(data => {
          this.router.navigate(['encuesta/resultados']);
            this.showSnackbar('Encuesta creada');
          }
        )
      this.form.resetForm();
      }
  }

  showSnackbar( message: string ):void {
    this.snackbar.open( message, 'Exitosamente', {
      duration: 2500,
    })
  }
}
