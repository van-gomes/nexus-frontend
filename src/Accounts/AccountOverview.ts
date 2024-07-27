import { PeopleAccount } from "./PeopleAccount";
import { CompanyAccount } from "./CompanyAccount";

const peopleAcount: PeopleAccount = new PeopleAccount (1,'Rafael', 1);
console.log(peopleAcount.deposit());
peopleAcount.setName('Isadora Chrispin');
peopleAcount.setBalance(100);
console.log(peopleAcount.getName());
console.log(peopleAcount.getBalance()); // Deve exibir 100

/*const companyAcount: CompanyAccount = new CompanyAccount ('Diego', 1);
companyAcount.setName('Diego Valente');
console.log(companyAcount.getName());
console.log(companyAcount.deposit()); */

