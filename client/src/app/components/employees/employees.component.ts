import { Component, OnInit } from '@angular/core';
import { EmployeeService} from "../../services/employee.service";
import { Employee } from "../../models/employee";
import { NgForm } from "@angular/forms";

declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  selectedEmployee: Employee = new Employee();
  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  addEmployee(form: NgForm): void{
    if(form.value._id){
      this.employeeService.putEmployee(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Updated Sucessfuly'});
          this.getEmployees();
        })
    } else {
      this.employeeService.postEmployee(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Saved Sucessfuly'});
          this.getEmployees();
        })
    }
  }

  getEmployees(){
    this.employeeService.getEmployees().subscribe(
      res => { this.employees = res as Employee[]
      });
  }

  editEmployee(employee: Employee){
    this.selectedEmployee = employee;
  }

  deleteEmployee(_id: string){
    if(confirm('Are you sure you want to delete it?')){
      this.employeeService.deleteEmployee(_id)
        .subscribe(res => {
          M.toast({html: 'Deleted Sucessfuly'});
          this.getEmployees();
        });
    }
  }

  resetForm(form?: NgForm): void{
    if(form){
      form.reset();
      this.selectedEmployee = new Employee();
    }
  }

}
