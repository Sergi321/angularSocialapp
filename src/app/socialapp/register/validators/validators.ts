
import { FormGroup, FormControl, Validators } from '@angular/forms';
export class validar{
    static formularioContacto: any;
    formularioContacto = new FormGroup({
        nombre: new FormControl('', [Validators.required]),
        mail: new FormControl('', [Validators.required, Validators.email]),
        apellido: new FormControl('', [Validators.required]),
        edat: new FormControl('', [Validators.required]),
        mensaje: new FormControl('', [Validators.required, Validators.minLength(4)]),
        contra: new FormControl('', [Validators.required]),
        confirmar: new FormControl('', [Validators.required]),
    
    
        
      });





}