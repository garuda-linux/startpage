import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SettingsComponent } from "./settings/settings.component";
import { animate, AnimationTriggerMetadata, group, query, style, transition, trigger } from "@angular/animations";

export const appRoutes: Route[] = [
    {
        path: "",
        component: HomeComponent,
        data: { animationState: "home" },
    },
    {
        path: "settings",
        component: SettingsComponent,
        data: { animationState: "settings" },
    },
    {
        path: "**",
        redirectTo: "",
    },
];

const fade = [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })),
    query(':enter', [style({ opacity: 0 })]),
    group([
        query(':leave', [animate('0.3s ease-out', style({ opacity: 0 }))]),
        query(':enter', [
            style({ opacity: 0 }),
            animate('0.3s ease-out', style({ opacity: 1 })),
        ]),
    ]),
]

const fadeInFromDirection = (direction: string) => [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })),
    group([
        query(':enter', [
            style({
                transform: `translateX(${direction === 'backward' ? '-' : ''}15%)`,
                opacity: 0,
            }),
            animate(
                '0.2s ease-out',
                style({ transform: 'translateX(0%)', opacity: 0 }),
            ),
        ]),
        query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.2s ease-out', style({ opacity: 0 })),
        ]),
    ]),
]

export const routeTransitionAnimations = trigger("routerTransition", [
    transition("home => settings", fadeInFromDirection('forward')),
    transition("home => home", fadeInFromDirection('backward')),
    transition("* => home", fade),
]);
