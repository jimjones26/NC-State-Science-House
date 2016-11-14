import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public error: any;

  constructor(private af: AngularFire, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }).then(
        (success) => {
          console.log(success);
          this.router.navigate(['/login']);
        }).catch(
        (err) => {
          console.log(err);
          this.router.navigate(['/signup']);
        });
    } else {
      this.error = 'Your form is invalid';
    }
  }

}
