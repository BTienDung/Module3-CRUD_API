import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  customers: Customer[];
  constructor(private customerService: CustomerService) { }
  @Output() selectedCustomer = new EventEmitter<Customer>();
  ngOnInit() {
    this.getListCustomer();
  }
  getListCustomer() {
    this.customerService.getListCustomer().subscribe(newList => {
      this.customers = newList;
    });
  }
  delete(id) {
    this.customerService.deleteCustomer(id).subscribe(() => {
      console.log('Xoa thanh cong');
      this.getListCustomer();
    }, error1 => {
      console.log(error1);
    });
  }
  selectCustomer(customer: Customer) {
    this.selectedCustomer.emit(customer);
  }
}
