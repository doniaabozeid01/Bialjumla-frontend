import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  registerForm!: FormGroup;
  years: number[] = [];
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  days: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  // قائمة البلدان
  countries: string[] = [
    'United States', 'Canada', 'United Kingdom', 'Australia', 'India', 'Germany',
    'France', 'Italy', 'Spain', 'Mexico', 'Brazil', 'Russia', 'Japan', 'China', 'South Korea'
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required ]], // , Validators.pattern('^[0-9]{10}$')
      password: ['', [Validators.required, Validators.minLength(6)]],
      day: [''],
      month: [''],
      year: [''],
      nationality: [''],
      title: ['', Validators.required],
      terms: [false, Validators.requiredTrue],
    });

    // Populate the years (from 2007 to 1920)
    for (let year = 2007; year >= 1920; year--) {
      this.years.push(year);
    }

    // Populate the days based on the selected month and year
    this.registerForm.get('month')?.valueChanges.subscribe(() => this.updateDays());
    this.registerForm.get('year')?.valueChanges.subscribe(() => this.updateDays());
  }

  // Update the number of days based on selected month and year
  updateDays(): void {
    const month = this.registerForm.get('month')?.value;
    const year = this.registerForm.get('year')?.value;

    let daysInMonth: number;

    if (month) {
      // Handle February for leap years
      if (month === 'February') {
        daysInMonth = this.isLeapYear(year) ? 29 : 28;
      } else if (['April', 'June', 'September', 'November'].includes(month)) {
        daysInMonth = 30;
      } else {
        daysInMonth = 31;
      }

      // Update the days array
      this.days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    }
  }

  // Check if the year is a leap year
  isLeapYear(year: number): boolean {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      // يمكنك إرسال البيانات هنا إلى الخادم عبر API مثلاً
    } else {
      console.log('Form is not valid');
    }
  }
}
