import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @Input() usersFromHomeComponent: any;  // parent to child communication
  @Output() cancelRegister = new EventEmitter(); //Emits an event from child to parent
  model: any = {};

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  register() {
   this.accountService.register(this.model).subscribe({
    next: () => {
      //console.log(response);
      this.cancel();
    },
    error: error => console.log(error)
   })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
