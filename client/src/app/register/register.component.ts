import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @Input() usersFromHomeComponent: any;  // parent to child communication
  @Output() cancelRegister = new EventEmitter(); //Emits an event from child to parent
  model: any = {};

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register() {
   this.accountService.register(this.model).subscribe({
    next: () => {
      //console.log(response);
      this.cancel();
    },
    error: error => {
      console.log(error);
      this.toastr.error(error.title);
    }
   })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
