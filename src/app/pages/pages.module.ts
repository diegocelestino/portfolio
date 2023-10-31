import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CoverComponent } from './cover/cover.component';
import { HeaderComponent } from "./header/header.component";
import {PagesComponent} from "./pages.component";


@NgModule({
  declarations: [
    CoverComponent,
    HeaderComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
})
export class PagesModule { }
