import { CommonModule } from '@angular/common';
import { AddClientComponent } from './add-client.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AddClientComponent],
  exports: [AddClientComponent],
  imports: [CommonModule, HttpClientModule],
})
export class AddClientModule {}
