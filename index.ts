import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from '@angular/common';
import {SimplyNavConfig, SimplyNavService, simplyNavServiceFactory} from "./src/simply-nav.service";
import {SimplyNavComponent} from "./src/simply-nav.component";
import {SimplyNavItemComponent} from "./src/simply-nav-item.component";

export * from './src/simply-nav.service';
export * from './src/simply-nav.component';

export let providers = [
    SimplyNavConfig,
    { provide: SimplyNavService, useFactory: simplyNavServiceFactory, deps: [SimplyNavConfig] }
];

@NgModule({
    imports: [CommonModule],
    declarations: [SimplyNavItemComponent, SimplyNavComponent],
    exports: [SimplyNavItemComponent, SimplyNavComponent],
    providers: providers
})
export class SimplyNavModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SimplyNavModule,
            providers: providers
        };
    }
}