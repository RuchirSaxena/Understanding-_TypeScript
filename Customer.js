"use strict";
//Note :All javascript code is a valid Typescript code 
//BUT Typescript code can not be cannot be a valid Javascipt code 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Address_1 = require("./Address"); //Importing a Address module or class
var Customer = (function () {
    function Customer() {
        this._customerCode = ""; //Defining a private string type variable
        this.CustomerName = ""; //Defining a public string type variable
        this.addressObj = new Address_1.Address(); //Accesing imported module 
    }
    Object.defineProperty(Customer.prototype, "CustomerCode", {
        //getter
        get: function () {
            return this._customerCode;
        },
        //Defining Properties
        //setter
        set: function (value) {
            if (value == "") {
                throw "Customer code is required";
            }
            this._customerCode = value;
        },
        enumerable: true,
        configurable: true
    });
    //Definning fuction which returns no value coz defined as void
    Customer.prototype.GetCustomerType = function () {
        alert("this is Customer");
    };
    //Defining a fuction and having a string parameter and returning a boolean type
    //Also type is an optional parameter here
    Customer.prototype.ValidateData = function (name, type) {
        // return 123;  =>this will also works(though its giving error in typescript) because when it transpiles to javascript it will return this value
        //coz javascript function can return any value    
        return true;
    };
    //Implementeing Interface method
    Customer.prototype.AddCusomer = function () {
        alert("customer added");
    };
    return Customer;
}());
exports.Customer = Customer;
//Inheritance in typescript
var GoldCustomer = (function (_super) {
    __extends(GoldCustomer, _super);
    function GoldCustomer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoldCustomer.prototype.Validate = function () { alert("this is gold Customer"); };
    return GoldCustomer;
}(Customer));
