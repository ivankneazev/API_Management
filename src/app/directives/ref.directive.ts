import { Directive, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[appRef]' })
export class refDirective {
    constructor(public containerRef: ViewContainerRef) { }
}