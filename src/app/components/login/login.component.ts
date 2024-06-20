import { Component } from '@angular/core';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public fields = {
    password: '',
    email: '',
    login: '',
  };
  constructor() { }

  public validate(): void {
    console.log(this.fields);

    if (!this.fields.email.match(/^\S+@\S+\.\S+$/)) {
      alert('неверная почта!');
      return;
    }
    if (this.fields.email === '' || this.fields.login === '' ||  this.fields.password === '' ) {
      alert('Все поля обязательны к заполнению!');
      return;
    }

    alert('Успешно прошли аутентификацию!');
    this.fields = {
      email: '',
      login: '',
      password: '',
    };

  }

}
