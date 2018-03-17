// В Ангуляре есть три вида директив:
// There are three kinds of directives in Angular:
//
// 1. Компоненты-директивы с шаблоном.
// 2. Структурные директивы - изменение макета DOM путем добавления и удаления элементов DOM.
// 3. Директивы атрибутов - изменение внешнего вида или поведения элемента,
//    компонента или другой директивы.
//
//
// 1. Components—directives with a template.
// 2. Structural directives—change the DOM layout by adding and removing DOM elements.
// 3. Attribute directives—change the appearance or behavior of an element, component,
//    or another directive.

// Build a simple attribute directive
// Создаю простую директиву атрибута

// working variant

import { Component, Directive, EventEmitter, Output } from '@angular/core';
import { IOption } from 'ng-select';

@Directive({
    selector: '[appHighlight]'
})
export class FirstDirective {
}

@Directive({
    selector: 'input[type=checkbox][formControlName],' +
    'input[type=checkbox][formControl],' +
    'input[type=checkbox][ngModel]'
})
export class CheckboxDirective {

}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']

})

export class AppComponent {
    color: string;
    visible: boolean;
    selectedCountry: any = 'BE';

    @Output() open: EventEmitter<any> = new EventEmitter();
    @Output() close: EventEmitter<any> = new EventEmitter();

    states = [
        {name: 'Arizona', abbreviation: 'AZ'},
        {name: 'California', abbreviation: 'CA'},
        {name: 'Colorado', abbreviation: 'CO'},
        {name: 'New York', abbreviation: 'NY'},
        {name: 'Pennsylvania', abbreviation: 'PA'}
    ];

    myOptions: Array<IOption> = [
        {label: 'Belgium', value: 'BE'},
        {label: 'Luxembourg', value: 'LU'},
        {label: 'Netherlands', value: 'NL'}
    ];

    countries: Array<IOption> = [
        {label: 'Belgium', value: 'BE'},
        {label: 'Luxembourg', value: 'LU'},
        {label: 'Netherlands', value: 'NL'}
    ];

    toggle() {
        this.visible = !this.visible;
        if (this.visible) {
            this.open.emit(null);
        } else {
            this.close.emit(null);
        }
    }
}


// @Component({
//     selector: 'app-root',
//     templateUrl: './app.component.html',
//     styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//     title = 'My First Angular App';
// }


// example for myDirective

// @Directive({
//     selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
//     host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
//     providers: [SELECT_VALUE_ACCESSOR]
// })
// class SelectControlValueAccessor implements ControlValueAccessor {
//     value: any
//     onChange: (_: any) => { }
//     onTouched: () => { }
//     set compareWith: (o1: any, o2: any) => boolean
//     writeValue(value: any): void
//     registerOnChange(fn: (value: any) => any): void
//     registerOnTouched(fn: () => any): void
//     setDisabledState(isDisabled: boolean): void
// }
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//     title = 'My First Angular App';
// }



