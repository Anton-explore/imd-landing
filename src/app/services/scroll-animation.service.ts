import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimationService {
  private observer: IntersectionObserver;
  private observedElements: Set<Element> = new Set();

  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateElement(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
  }

  observeElement(element: Element) {
    if (!this.observedElements.has(element)) {
      this.observer.observe(element);
      this.observedElements.add(element);
    }
  }

  private animateElement(element: Element) {
    // Add visible class to trigger CSS animations
    element.classList.add('visible');
    
    // Animate child elements with staggered delay
    const animatableElements = element.querySelectorAll('.animate-on-scroll');
    animatableElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, index * 200); // 200ms delay between each element
    });

    // Stop observing once animated
    this.observer.unobserve(element);
    this.observedElements.delete(element);
  }

  destroy() {
    this.observer.disconnect();
    this.observedElements.clear();
  }
}