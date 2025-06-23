import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ajout-hotel',
  standalone: true,
  templateUrl: './ajout-hotel.component.html',
  styleUrls: ['./ajout-hotel.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class AjoutHotelComponent {
  form: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      price: ['', Validators.required],
      currency: ['XOF', Validators.required]
    });
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    this.selectedFile = file ?? null;
  }

  onSubmit() {
    if (this.form.invalid) return;

    const formData = new FormData();
    for (const key in this.form.value) {
      formData.append(key, this.form.value[key]);
    }
    if (this.selectedFile) {
      formData.append('photo', this.selectedFile);
    }

    this.http.post('http://localhost:5000/api/hotels', formData).subscribe({
      next: () => alert('✅ Hôtel ajouté avec succès !'),
      error: (err) => console.error('❌ Erreur d’ajout hôtel :', err)
    });
  }
}