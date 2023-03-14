import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/Client';
import { ApiService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';
let DATA;
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  name: string;
  email: string;
  phone: string;
  DATA: any;
  constructor(private apiService: ApiService, private http: HttpClient) {
    this.apiService.getClient().subscribe((data) => {
      this.DATA = data;
    });
  }
  ngOnInit(): void {}

  onSubmit(registerForm: NgForm): void {
    const { name, email, phone } = registerForm.value;
    this.apiService.createUser(name, email, phone).subscribe((data) => {});
  }
  @ViewChild('content', { static: false }) el!: ElementRef;
  makePDF() {
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save('clientDeatails.pdf');
      },
    });
  }
}
