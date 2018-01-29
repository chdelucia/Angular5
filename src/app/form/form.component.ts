import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../core/auth/auth.service';
import { ModelForm } from './model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  model: ModelForm = new ModelForm(null, '', '', '');
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit(userForm) {
    const isLogged = this.authService.login(userForm);
    this.router.navigate(['/admin']);
  }

}
