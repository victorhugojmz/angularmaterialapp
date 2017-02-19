import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';
export const slideInDownAnimation: AnimationEntryMetadata =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1,
        transform: 'scale(1.0)'
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'scale(.3)'
      }),
      animate('.5s ease-in')
    ]),
    transition(':leave', [
      animate('.5s ease-out', style({
        opacity: 0,
        transform: 'scale(.2)'
      }))
    ])
  ]);