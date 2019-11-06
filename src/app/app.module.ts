import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { FormComponent } from './form/form.component';
import { RouterModule } from '@angular/router';
import { FrontModule } from './front/front.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule, MatCardModule, MatToolbarModule, MatButtonModule, MatExpansionModule, MatMenuContent, MatIconModule, MatMenuModule, MatSelectModule, MatAutocomplete, MatAutocompleteModule, MatDatepickerModule} from '@angular/material'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FrontModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatFormFieldModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    RouterModule.forRoot([
      { path: 'form', component: FormComponent },
      // { path: 'products/:productId', component: ProductDetailsComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
