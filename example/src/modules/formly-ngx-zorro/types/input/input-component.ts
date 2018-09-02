import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'formly-field-input',
    template: `
    <input nz-input [attr.id]="id" [(ngModel)]="model[key]" [formControl]="formControl" />
    `,
})
export class FormlyFieldInputComponent extends FieldType {
}
