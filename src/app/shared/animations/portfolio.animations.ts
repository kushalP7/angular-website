import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('600ms ease-out', style({ opacity: 1 }))
  ])
]);

export const slideUp = trigger('slideUp', [
  transition(':enter', [
    style({ transform: 'translateY(40px)', opacity: 0 }),
    animate('600ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({ transform: 'translateY(0)', opacity: 1 }))
  ])
]);

export const slideLeft = trigger('slideLeft', [
  transition(':enter', [
    style({ transform: 'translateX(50px)', opacity: 0 }),
    animate('600ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({ transform: 'translateX(0)', opacity: 1 }))
  ])
]);

export const slideRight = trigger('slideRight', [
  transition(':enter', [
    style({ transform: 'translateX(-50px)', opacity: 0 }),
    animate('600ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({ transform: 'translateX(0)', opacity: 1 }))
  ])
]);

export const zoomIn = trigger('zoomIn', [
  transition(':enter', [
    style({ transform: 'scale(0.85)', opacity: 0 }),
    animate('500ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({ transform: 'scale(1)', opacity: 1 }))
  ])
]);

export const listAnimation = trigger('listAnimation', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(25px)' }),
      stagger('80ms', [
        animate('500ms cubic-bezier(0.25, 0.8, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);
