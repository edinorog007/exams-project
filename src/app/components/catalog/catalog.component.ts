import { Component,} from '@angular/core';
import {Book} from "../../types/book.type";

@Component({
  selector: 'catalog-component',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {

  public bookOge: Book[] = [
    {
      name: 'Сборник заданий ОГЭ по математике',
      image: 'image1_oge.png',
      desc: 'Серия подготовлена разработчиками контрольных измерительных материалов (КИМ) основного государственного экзамена.',
      amount: 593
    },
    {
      name: 'Сборник заданий ОГЭ по обществознанию',
      image: 'image2_oge.png',
      desc: 'Будущие юристы оценят, подробные варианты, подробные ответы, требуется хорошая память.',
      amount: 356
    },
    {
      name: 'Сборник заданий ОГЭ по физике',
      image: 'image3_oge.png',
      desc: 'Физика сложная штука, лучше считать, что все вокруг это магия, вжух, вжух!',
      amount: 546
    },
    {
      name: 'Сборник заданий ОГЭ по русскому языку',
      image: 'image4_oge.png',
      desc: 'Тесты по русскому языку от данного автора лучший выбор и сложно и понятно одновременно!',
      amount: 313
    },
    {
      name: 'Сборник заданий ОГЭ по истории',
      image: 'image5_oge.png',
      desc: 'Данный вариант тестов представлен для людей “книжных червей”, мез досуга и достаточно творческих...',
      amount: 593
    },
    {
      name: 'Сборник заданий ОГЭ по английскому языку',
      image: 'image6_oge.png',
      desc: 'Серия подготовлена разработчиками для того, чтобы дети стали немного более общительными в играх.',
      amount: 593
    },
  ];
  public bookEge: Book[] = [
    {
      name: 'Сборник заданий ОГЭ по физике',
      image: 'image1_ege.png',
      desc: 'Данный сборник тестов предназначен для подготовки к Физике, сложные варианты и развернутые ответы ждут Вас!',
      amount: 593
    },
    {
      name: 'Сборник заданий ОГЭ по литературе',
      image: 'image2_ege.png',
      desc: 'Серия подготовлена для творческих людей, которые хотят стать частью искусства.',
      amount: 600
    },
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

  public setLocalStorage(data:  Book): void {
    let obj = {
      name: data.name,
      image: data.image,
      desc: data.desc,
      amount: data.amount
    }
    localStorage.setItem(data.name, JSON.stringify(obj));
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

}
