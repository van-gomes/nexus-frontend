import { Account } from './Account';

export class CompanyAccount extends Account {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    getLoan = (): void => {
        console.log('Você pegou um empréstimo');
    };

    deposit = (): void => {
        console.log('A empresa depositou');
    };
}
