import { Component } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  passwordVisible: boolean = false;
  _signInForm: FormGroup;
  isLoading: boolean = false;  // Indicador de carregamento

  constructor(
    private _themeService: ThemeService,
    private _authService: AuthService,
    private _fb: FormBuilder,
    private _router: Router,
  ) {
    this._signInForm = this._fb.group({
      email: ['saudefacil@gmail.com', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  toggleDarkMode(): void {
    this._themeService.toggleDarkMode();
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    const passwordField = document.getElementById('password') as HTMLInputElement;
    if (passwordField) {
      passwordField.type = this.passwordVisible ? 'text' : 'password';
    }
  }

  isDarkMode(): boolean {
    return this._themeService.isDarkMode();
  }

  async _signInNgSubmit() {
    if (this._signInForm.invalid) {
      this._signInForm.markAllAsTouched(); // Marca todos os campos como tocados para mostrar erros
      return;
    }

    this.isLoading = true; // Inicia o carregamento

    const email = this._signInForm.get('email')?.value;
    const password = this._signInForm.get('password')?.value;

    try {
      const response = await this._authService.signIn(email, password);
      console.log(response);

      // Redireciona o usuário para a página após login bem-sucedido
      this._router.navigate(['/saude-facil/']);
    } catch (error) {
      console.error('Erro ao fazer login', error);


    } finally {
      this.isLoading = false; // Finaliza o carregamento
    }
  }
}
