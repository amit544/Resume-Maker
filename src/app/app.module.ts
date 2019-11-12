import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { FormComponent } from './form/form.component';
import { RouterModule } from '@angular/router';
import { FrontModule } from './front/front.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule, MatCardModule, MatToolbarModule, MatButtonModule, MatExpansionModule, MatMenuContent, MatIconModule, MatMenuModule, MatSelectModule, MatAutocomplete, MatAutocompleteModule, MatDatepickerModule, MatChipInput, MatGridListModule} from '@angular/material'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
// import {AngularFirestoreModule} from '@angular/fire/firestore'
import { environment } from 'src/environments/environment';
import { Resume1Component } from './resume1/resume1.component';
import { Form } from './form/form.model';
import { MatChipsModule } from '@angular/material/chips';
@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    FormComponent,
    Resume1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FrontModule,
    MatChipsModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatGridListModule,
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
    // AngularFireModule.initializeApp(environment),
    // AngularFirestoreModule,
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
