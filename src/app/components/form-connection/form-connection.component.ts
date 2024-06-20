import { Component } from '@angular/core';

@Component({
  selector: 'form-connection-component',
  templateUrl: './form-connection.component.html',
  styleUrls: ['./form-connection.component.scss']
})
export class FormConnectionComponent  {

  public fields = {
    lastName: '',
    phone: '',
    name: '',
    email: '',
    fatherName: '',
  };

  public validate(): void {
    console.log(this.fields);

    if (this.fields.lastName === '' || this.fields.phone === '' || this.fields.name === '' || this.fields.email === '' || this.fields.fatherName === '') {
      alert('Все поля обязательны к заполнению!');
      return;
      if (!this.fields.email.match(/^\S+@\S+\.\S+$/)) {
        alert('неверная почта!');
        return;
      }
      return;
    }

    if (this.fields.lastName || this.fields.phone  || this.fields.name ||  this.fields.email ||  this.fields.fatherName ) {
      if (!this.fields.email.match(/^\S+@\S+\.\S+$/)) {
        alert('неверная почта!');
        return;
      }
    }

    alert('Вы оставили заявку, скоро с вами свяжутся!');
    localStorage.clear();
    this.fields = {
      lastName: '',
      phone: '',
      name: '',
      email: '',
      fatherName: '',
    };

  }

}
