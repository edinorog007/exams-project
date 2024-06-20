import { Component} from '@angular/core';

@Component({
  selector: 'signup-component',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent{
  public fields = {
    name: '',
    email: '',
    login: '',
    password: '',
    repeatPassword: ''
  };

  public validate(): void {
    console.log(this.fields);

    if ((this.fields.password && this.fields.repeatPassword) && (this.fields.repeatPassword !== this.fields.password)) {
      alert('Неправильно повторили пароль!');
      return;
    }
    if (!this.fields.email.match(/^\S+@\S+\.\S+$/)) {
      alert('неверная почта!');
      return;
    }
    if (this.fields.email === '' || this.fields.login === '' || this.fields.name === '' || this.fields.password === '' || this.fields.repeatPassword === '') {
      alert('Все поля обязательны к заполнению!');
      return;
    }

    alert('Вы зарегистрировались!');
    this.fields = {
      name: '',
      email: '',
      login: '',
      password: '',
      repeatPassword: ''
    };

  }

}
