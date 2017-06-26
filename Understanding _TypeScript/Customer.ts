
//Note :All javascript code is a valid Typescript code 
//BUT Typescript code can not be cannot be a valid Javascipt code 

import { Address } from "./Address";  //Importing a Address module or class

interface ICustomer {  //Defining interface but it will not be seen in javascript
     AddCusomer();
}

export class Customer implements ICustomer {
    private _customerCode: string = "";//Defining a private string type variable
    public CustomerName: string = ""; //Defining a public string type variable
    public CustomerRoles: string[];  //Defining string type array
    //Defining Properties
    //setter
    public set CustomerCode(value: string) {
        if (value == "") {
            throw "Customer code is required";
        }
        this._customerCode = value;
    }
    //getter
    public get CustomerCode(): string {
        return this._customerCode;
    }
    public addressObj: Address = new Address();  //Accesing imported module 

   
    //Definning fuction which returns no value coz defined as void
    GetCustomerType(): void {
        alert("this is Customer");
    } 
    //Defining a fuction and having a string parameter and returning a boolean type
    //Also type is an optional parameter here
    ValidateData(name: string, type?: number): boolean {     
        // return 123;  =>this will also works(though its giving error in typescript) because when it transpiles to javascript it will return this value
        //coz javascript function can return any value    
        return true;       
    }
    //Implementeing Interface method
    AddCusomer() {
        alert("customer added");
    }
}

//Inheritance in typescript
class GoldCustomer extends Customer {
    Validate(): void { alert("this is gold Customer"); } 
}