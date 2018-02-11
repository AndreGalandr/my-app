// Очень понятно расписано про работу директив
// https://angular.io/guide/attribute-directives#bind-to-an-input-alias
// разбирать и применять другие темы по текущим задачам

// директивы атрибута ( разобрался на официальном API)

// 1-й пример использования директивы cоздания простой директивы атрибута

// import { Directive, ElementRef } from '@angular/core';
//
// @Directive({
//     selector: '[appHighlight]'
// })
// export class HighlightDirective {
//     constructor(el: ElementRef) {
//         el.nativeElement.style.backgroundColor = 'yellow';
//     }
// }
// import Оператор определяет дополнительный ElementRef символ из ангуляр core библиотек:

    // Вы используете ElementRef конструктор директивы для вставки ссылки на элемент DOM узла,
    // элемент, к которому вы применили appHighlight.

    // ElementRef предоставляет прямой доступ к элементу DOM хоста через его nativeElement свойство.

    // Эта первая реализация устанавливает цвет фона элемента хоста желтым.



// 2-й пример использования директивы

// Ответ на инициируемые пользователем события
// В настоящее время appHighlight просто задается цвет элемента.
// Директива может быть более динамичной. Он может обнаруживать,
// когда пользователь вводит в элемент или выходит из него и отвечает,
// установив или очистив цвет подсветки.

// 1-е Начинаю с добавления HostListener в список импортированных символов.
// 2-е Затем добавляю два обработчика событий, которые реагируют,
// когда мышь входит или уходит, каждый украшенный HostListener декоратором.


// import { Directive, ElementRef, HostListener } from '@angular/core';
//
// @Directive({
//     selector: '[appHighlight]'
// })
// export class HighlightDirective {
//     constructor(private el: ElementRef) {
//         el.nativeElement.style.backgroundColor = 'yellow';
//     }
//     @HostListener('mouseenter') onMouseEnter() {
//         this.highlight('yellow');
//     }
//
//     @HostListener('mouseleave') onMouseLeave() {
//         this.highlight(null);
//     }
//
//     private highlight(color: string) {
//         this.el.nativeElement.style.backgroundColor = color;
//     }
//
// }


// 3-e The @HostListener decorator lets you subscribe to events of the DOM element
// that hosts an attribute directive, the <p> in this case.
// Декоратор @HostListener позволяет подписаться на события элемента DOM,
// который размещен директива атрибута, то в этом случае - @HostListener будет у <p>
// соответственно будет выполнятся событие наведения и т.д. описывал выше

// 4-e Конечно, вы можете связаться с DOM со стандартным JavaScript и подключить прослушиватели
// событий вручную. С этим подходом существует как минимум три проблемы :

    // Вы должны правильно писать слушателей.
    // Код должен отсоединять слушателя, когда директива уничтожается,
    // чтобы избежать утечек памяти.
    // Говорить с DOM API напрямую не рекомендуется.

// 5-е The handlers delegate to a helper method that sets the color on the host DOM element, el.
//     The helper method, highlight, was extracted from the constructor.
//     The revised constructor simply declares the injected el: ElementRef.
//     Обработчики делегируют вспомогательный метод, который устанавливает цвет на элемент DOM
//     хоста el.
//     Метод-помощник highlight был извлечен из конструктора. Пересмотренный конструктор просто
//     объявляет введенный .el: ElementRef - вот так constructor(private el: ElementRef) { }

//     полный измененный код выше и теперь цвет фона появляется,
//     когда мышь нависает над pи исчезает при ее выходе.



// 3-й пример использования директивы

// Передать значения в директиву с привязкой данных @Input

//   Currently the highlight color is hard-coded within the directive.
//   That's inflexible. In this section, you give the developer the
//   power to set the highlight color while applying the directive.
//   Выше в коде в настоящее время цвет подсветки жестко закодирован в директиве.
//   Это негибко. В этом разделе вы даете разработчику возможность установить
//   цвет подсветки при применении директивы.

//   Begin by adding Input to the list of symbols imported from @angular/core.
//   1-е Начните с добавления Input в список импортированных символов @angular/core.
//   import { Directive, ElementRef, HostListener, Input } from '@angular/core';

//   2-е Add a highlightColor property to the directive class like this:
//   Добавьте highlightColor свойство в класс директивы следующим образом:
//   @Input() highlightColor: string;

//   3-е Binding to an @Input property
//   Notice the @Input decorator. It adds metadata to the class
//   that makes the directive's highlightColor property available for binding.

//   It's called an input property because data flows from the binding
//   expression into the directive. Without that input metadata,
//   Angular rejects the binding; see below for more about that.





//   Привязка к свойству @Input

//   Обратите внимание на декоратор. Он добавляет метаданные в класс,
//   что делает свойство директивы доступным для привязки.@InputhighlightColor

//   Это называется входным свойством, потому что данные передаются из выражения
//   привязки в директиву. Без этих входных метаданных Angular отклоняет привязку;
//   см. ниже где Appendix: Why add @Input?, чтобы узнать больше об этом.

//   Try it by adding the following directive binding variations to the AppComponent template:
//   Попробуйте, добавить следующее в src/app/app.component.html шаблон:

//   1. <p appHighlight highlightColor="yellow">Highlighted in yellow</p>
//      <p appHighlight [highlightColor]="'orange'">Highlighted in orange</p>

//   2. Add a color property to the AppComponent src/app/app.component.ts
//      export class AppComponent {
//        color = 'yellow';
//      }


//   3. Let it control the highlight color with a property binding.
//      Пусть он управляет цветом выделения с привязкой к свойствам.
//      src/app/app.component.html
//     <p appHighlight [highlightColor]="color">Highlighted with parent component's color</p>

//   4. That's good, but it would be nice to simultaneously apply the directive
//      and set the color in the same attribute like this.
//      Это хорошо, но было бы неплохо одновременно применить директиву и
//      установить цвет в том же атрибуте, как это.
//      src / app / app.component.html
//      <p [appHighlight]="color">Highlight me!</p>

//      The [appHighlight] attribute binding both applies the highlighting directive
//      to the <p> element
//      and sets the directive's highlight color with a property binding.
//      You're re-using the directive's attribute selector ([appHighlight])
//      to do both jobs. That's a crisp, compact syntax.
//      You'll have to rename the directive's highlightColor property to appHighlight because
//      that's now the color property binding name.
//      [appHighlight]Атрибут привязки и применяет директиву выделения для к <p>элементу
//      и устанавливает цвет подсветки дИРЕКТИВЫ с обязательным свойством.
//      Вы повторно используете селектор атрибутов директивы ( [appHighlight])
//      для выполнения обоих заданий. Это четкий, компактный синтаксис.
//      Вам нужно будет переименовать highlightColor свойство директивы, appHighlight потому
//      что теперь это имя привязки свойств цвета.
//      src / app / highlight.directive.ts (переименовано в селектор директивы соответствия)
//      @Input() appHighlight: string;


//      This is disagreeable. The word, appHighlight, is a terrible property name and it
//      doesn't convey the property's intent.
//      Это неприятно. Слово,, appHighlight является ужасным именем собственности,
//      и оно не передает намерения собственности.
//      поэтому ниже рассматривается вариант - Привязать к псевдониму @Input
//                                             Bind to an @Input alias


//      Bind to an @Input alias
//      Привязать к псевдониму @Input
//      Inside the directive the property is known as highlightColor.
//      Outside the directive, where you bind to it, it's known as appHighlight.
//      You get the best of both worlds: the property name you want and the
//      binding syntax you want:
//      К счастью, вы можете назвать свойство директивы, что хотите, и использовать
//      его для целей привязки.
//      Восстановите исходное имя свойства и укажите селектор как псевдоним в аргументе .@Input
//      src / app / highlight.directive.ts (свойство цвета с псевдонимом)
//      @Input('appHighlight') highlightColor: string;

//      Вы получаете лучшее из обоих миров: имя свойства, которое вы хотите,
//      и синтаксис привязки, который вы хотите:
//      src / app / app.component.html (цвет)
//      <p [appHighlight]="color">Highlight me!</p>

//      Теперь, когда вы привязываетесь через псевдоним к нему highlightColor,
//      измените onMouseEnter()метод использования этого свойства. Если кто-то
//      пренебрегает привязкой appHighlightColor, выделите элемент узла красным:

//      src / app / highlight.directive.ts (ввод мыши)
//      @HostListener('mouseenter') onMouseEnter() {
//         this.highlight(this.highlightColor || 'red');
//      }


// import { Directive, ElementRef, HostListener, Input } from '@angular/core';
//
// @Directive({
//     selector: '[appHighlight]'
// })
// export class HighlightDirective {
//
//  // @Input() highlightColor: string;
//     // You'll have to rename the directive's highlightColor property to appHighlight
//     // because that's now the color property binding name.
//     // Выше я переименовал highlightColor свойство директивы, appHighlight
//     // потому что теперь это имя привязки свойств цвета.
//     // @Input() appHighlight: string;
//
//     @Input('appHighlight')highlightColor: string;
//     // Внутри директивы свойство известно как highlightColor. Вне директивы,
//     // где вы привязываетесь к ней, она известна как appHighlight.
//     constructor(private el: ElementRef) {
//         el.nativeElement.style.backgroundColor = 'yellow';
//     }
//     @HostListener('mouseenter') onMouseEnter() {
//         this.highlight('yellow');
//     }
//
//     @HostListener('mouseleave') onMouseLeave() {
//         this.highlight(null);
//     }
//
//     private highlight(color: string) {
//         this.el.nativeElement.style.backgroundColor = color;
//     }
// }


//     Вот последняя версия класса директивы.

// import { Directive, ElementRef, HostListener, Input } from '@angular/core';
//
// @Directive({
//     selector: '[appHighlight]'
// })
// export class HighlightDirective {
//
//     constructor(private el: ElementRef) { }
//
//     @Input('appHighlight') highlightColor: string;
//     // (непонятная ошибка у @Input c оф.сайта)
//
//     @HostListener('mouseenter') onMouseEnter() {
//         this.highlight(this.highlightColor || 'red');
//     }
//
//     @HostListener('mouseleave') onMouseLeave() {
//         this.highlight(null);
//     }
//
//     private highlight(color: string) {
//         this.el.nativeElement.style.backgroundColor = color;
//     }
// }



// ----------------------------------------------------------------------- //

// далее попробывал в действии по пункту Write a harness to try it на оф.API
/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {

    constructor(private el: ElementRef) { }

    @Input() defaultColor: string;

    @Input('appHighlight') appHighlight: string;
    // (здесь все же не понятно почему у декоратора ошибка)

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.appHighlight || this.defaultColor || 'red');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}





//  Приложение: Зачем добавлять @Input? - прочел на сайте

// /* tslint:disable:member-ordering */
// import { Directive, ElementRef, HostListener, Input } from '@angular/core';
//
// @Directive({
//     selector: '[appHighlight]'
// })
// export class HighlightDirective {
//
//     constructor(private el: ElementRef) { }
//
//     @Input() highlightColor: string;
//     // @Input('appHighlight') highlightColor: string;
//     @Input() defaultColor: string;
//     // @Input('appHighlight') highlightColor: string;
//
//     @HostListener('mouseenter') onMouseEnter() {
//         this.highlight(this.highlightColor || this.defaultColor || 'red');
//     }
//
//     @HostListener('mouseleave') onMouseLeave() {
//         this.highlight(null);
//     }
//
//     private highlight(color: string) {
//         this.el.nativeElement.style.backgroundColor = color;
//     }
// }
