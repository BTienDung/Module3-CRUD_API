import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
import {Customer} from '../customer';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  customers: Customer[];
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getListCustomer();
  }
  addCustomer(form) {
    const {id, firstName, lastName} = form.value;
    const customer = {id, firstName, lastName};
    this.customerService.addCustomer(customer).subscribe(() => {
      console.log('Them thanh cong.');
      this.customerService.onNewCustomer.next(new Date().getTime());
    }, error1 => {
      console.log(error1);
    });
  }

}
