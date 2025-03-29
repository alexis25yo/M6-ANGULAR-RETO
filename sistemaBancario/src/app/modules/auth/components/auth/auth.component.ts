import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StateLoginService } from 'src/app/states/stateLogin/state-login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  alertMessage: string = '';
  alertType: string = ''; 
  showAlert: boolean = false;

  constructor(private fb: FormBuilder, private state: StateLoginService, private router: Router) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm(): void{
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  submit() {
    if (this.loginForm.valid) {
      const usuario = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      if(usuario === 'alexis' && password === '12345') {
        this.state.userEmail = 'alexis@gmail.com';
        this.router.navigate(['/auth/boards']);
      }else {      
        this.showAlertMessage('Usuario o contraseña incorrectos', 'danger');
      }
    } 
  }

  showAlertMessage(message: string, type: string) {
    this.alertMessage = message;
    this.alertType = type;
    this.showAlert = true;

    setTimeout(() => {
      this.showAlert = false;
    }, 3000); // La alerta desaparece después de 3 segundos
  }

  showSweetalert2() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Funcionalidad no disponible en este momento",
      confirmButtonColor: "#fdda24"
    });
  }
}
