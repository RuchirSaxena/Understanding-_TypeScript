using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Csharp_TypeScript_Comparision
{
    class Customer
    {
        protected string CustomerCode;
        public void GetCustomerType()
        {
            Console.WriteLine("This is a normal customer");
        }
    }
    class GoldCustomer : Customer
    {
        public void setCusttomerCode()
        {
            CustomerCode = "Ct123";
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Customer objCustomer = new Csharp_TypeScript_Comparision.Customer();
            
            GoldCustomer objCust = new GoldCustomer();
            objCust.GetCustomerType();
          
            Console.ReadKey();


        }
    }
}
