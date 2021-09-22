import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {

  @Input() set appdropDown(IsOpen: boolean) {
    if (IsOpen) {
      // this.temp.
      // this.vcRef.createEmbeddedView(this.temp.)
    }
  }

  constructor(private temp: TemplateRef<any>, private vcRef: ViewContainerRef) {
  }

}
