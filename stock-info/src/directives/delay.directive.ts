import { Directive, TemplateRef, ViewContainerRef, Input, ElementRef } from "@angular/core";

@Directive({
    selector: "[delayRendering]"
})
export class DelayDirective {

    @Input() delayRendering: number;

    constructor(
        private _containerRef: ViewContainerRef,
        private _template: TemplateRef<ElementRef>
    ) { }

    ngOnInit() {
        setTimeout(() => {
            this._containerRef.createEmbeddedView(this._template);
        }, this.delayRendering)
    }
}