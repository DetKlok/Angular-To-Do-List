import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { ListManagingServiceService } from './list-managing-service.service';
import { FilteringPipe } from './filtering.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    TasksListComponent,
    FilteringPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [ListManagingServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
