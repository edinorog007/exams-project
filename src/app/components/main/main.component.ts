import { Component } from '@angular/core';
import {Book} from "../../types/book.type";

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  public bookOge: Book[] = [
    {
      name: 'Сборник заданий ОГЭ по физике',
      image: 'image3_oge.png',
      desc: 'Физика сложная штука, лучше считать, что все вокруг это магия, вжух, вжух!',
      amount: 546
    },
  ];

  public bookEge: Book[] = [
    {
      name: 'Сборник заданий ОГЭ по химии',
      image: 'image3_ege.png',
      desc: 'Данный сборник тестов предназначен для тех, кто решил, что достаточно интересно работать с реагентами.',
      amount: 400
    },
    {
      name: 'Сборник заданий ОГЭ по математике',
      image: 'image4_ege.png',
      desc: 'Данный сборник был создан для тех кто не выходит из дома, иначе не поймешь.',
      amount: 593
    },
    {
      name: 'Сборник заданий ОГЭ по русскому языку',
      image: 'image5_ege.png',
      desc: 'Сборник тестовых вариантов по Русскому языку от автора Н.А. Сенина лучшее что случалось при всей этой суматохе с экзаменами!',
      amount: 593
    },
  ];

}
