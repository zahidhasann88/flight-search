import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  searching = false;

  bookingForm: FormGroup = new FormGroup({
    departure: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(3)]),
    arrival: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(3)]),
    departureDate: new FormControl('', [Validators.required]),
    returnDate: new FormControl('', [Validators.required]),
  });

  constructor() { }

  get departure() {
    return this.bookingForm.get('departure');
  }
  get arrival() {
    return this.bookingForm.get('arrival');
  }
  get departureDate() {
    return this.bookingForm.get('departureDate');
  }
  get returnDate() {
    return this.bookingForm.get('returnDate');
  }
  sendMessage() {
    console.warn(this.bookingForm.value);
}
keyPressAlphanumeric(event: any) {
  var inp = String.fromCharCode(event.keyCode);

  if (/[a-zA-Z]/.test(inp)) {
    return true;
  } else {
    event.preventDefault();
    return false;
  }
}

}
