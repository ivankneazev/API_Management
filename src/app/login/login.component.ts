import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,
    private router:Router) { }

  public form: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  public submit(): void {
    console.log(this.form)
    this.auth.login(this.form.value).subscribe(()=>{
      this.form.reset();
      this.router.navigate(['/crm'])
    })
/*     this.form.markAllAsTouched(); */
  }


  ngOnInit(): void {
  }



}
