import { style } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  Inject,
  Input,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAnimations]',
})
export class AnimationsDirective {
  isBrowser: boolean = false;
  @Input() animationClass: string = 'animate__fadeInUp';
  @Input() threshold: number = 0.6;
  @Input() animationDuration: string = '';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
              this.el.nativeElement.classList.add(
                'animate__animated',
                this.animationClass
              );
              if (this.animationDuration) {
                this.el.nativeElement.style.animationDuration =
                  this.animationDuration;
              }
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: this.threshold,
        }
      );

      observer.observe(this.el.nativeElement);
    }
  }
}
