import {Component, Input, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import {Customer} from '../customer';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  customer: Customer;
  message;

  constructor(private customerService: CustomerService, private active: ActivatedRoute) {
  }

  ngOnInit() {
    this.getById();
  }

  getById() {
    const id = +this.active.snapshot.paramMap.get('id');
    this.customerService.findById(id).subscribe(customer =>
      this.customer = customer
    );
  }

  onSubmit(form) {
    const {id, firstName, lastName} = form.value;
    const customer = {id, firstName, lastName};
    this.customerService.updateCustomer(customer).subscribe(() => {
      this.message = 'Cap nhat thanh cong';
      this.customerService.getListCustomer();
    }, error1 => {
      console.log('Cap nhat that bai');
    });
  }
}
