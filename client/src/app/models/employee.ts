export class Employee {

  // constructor(){
  //
  // }

  constructor(_id?, name?, position?, office?, salary?) {
    this._id = _id;
    this.name = name;
    this.office = office;
    this.salary = salary;
  }

  _id: string;
  name: string;
  position: string;
  office: string;
  salary: number;
}
