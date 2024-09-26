/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import { Components } from '@shadcn-wc/core';


@ProxyCmp({
  inputs: ['asChild', 'disabled', 'icon', 'loading', 'loadingText', 'size', 'variant']
})
@Component({
  selector: 'shad-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['asChild', 'disabled', 'icon', 'loading', 'loadingText', 'size', 'variant'],
})
export class ShadButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ShadButton extends Components.ShadButton {}


