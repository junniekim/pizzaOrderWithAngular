import { Component } from '@angular/core';
import { Staff } from 'src/app/model/staff.model';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
})
export class StaffComponent {
  staff: Array<Staff> = [
    { name: 'John Cena', title: 'Owner', duty: 'Boss around', rate: 10 },
    {
      name: 'Jacob Raby',
      title: 'Chief Baker',
      duty: 'Bake pizza',
      rate: 253,
    },
    {
      name: 'Charlotte West',
      title: 'Assistant Baker',
      duty: 'Assist baking pizza',
      rate: -5,
    },
    { name: 'Rachel Kim', title: 'Server', duty: 'Serve pizza', rate: 4 },
    {
      name: 'Jun Styer',
      title: 'Delivery man',
      duty: 'Deliver pizza',
      rate: 24,
    },
  ];
  onUp(staff: Staff): void {
    //id is now up+ staff.name
    staff.rate += 1;
    (document.getElementById('up' + staff.name) as any).disabled = true;
    (document.getElementById('down' + staff.name) as any).disabled = true;
  }
  onDown(staff: Staff): void {
    staff.rate -= 1;
    (document.getElementById('up' + staff.name) as any).disabled = true;
    (document.getElementById('down' + staff.name) as any).disabled = true;
  }
}
