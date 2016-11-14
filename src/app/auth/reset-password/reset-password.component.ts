import { Component, OnInit, Inject } from '@angular/core';
import { AngularFire, FirebaseApp } from 'angularfire2';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public auth: any;
  public message: any;

  constructor(private af: AngularFire, @Inject(FirebaseApp) firebaseApp: any) {
    this.auth = firebaseApp.auth();
    console.log(this.auth);
  }

  ngOnInit() {
  }

  onSubmit(formData) {
    if (formData.valid) {
      console.log('Submission worked');
      this.auth.sendPasswordResetEmail(formData.value.email)
        .then((response) => {
          console.log('Sent successfully');
          this.message = 'Check your email for reset link';
        })
        .catch((error) => {
          this.message = error;
          console.log(error);
        });
    }
  }

}
