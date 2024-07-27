export abstract class Account {
    private name: string;
    private readonly accountNumber: number;
    balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

   
    deposit = (amount: number): void => {
        if (this.validateStatus()) {
            this.balance += amount;
            console.log(`Você depositou ${amount}. Novo saldo: ${this.balance}`);
        } else {
            console.log('Conta inativa. Depósito não permitido.');
        }
    };

    withdraw = (amount: number): void => {
        if (this.validateStatus() && this.balance >= amount) {
            this.balance -= amount;
            console.log(`Você sacou ${amount}. Novo saldo: ${this.balance}`);
        } else if (!this.validateStatus()) {
            console.log('Conta inativa. Saque não permitido.');
        } else {
            console.log('Saldo insuficiente.');
        }
    };
    
    requestLoan = (): void => {
        console.log('Você solicitou um empréstimo');
    };

    getBalance = (): void => {
        console.log(this.balance);
    };

    setBalance = (amount: number): void => {
        this.balance += amount;
        console.log(`Saldo atualizado com sucesso: ${this.balance}`)
    }

    setName = (name: string): void => {
        this.name = name;
        console.log('Nome alterado com sucesso');
    };

    getName = (): string => {
        return this.name;
    };

    validateStatus = (): boolean => {
        if (this.status) {
            return this.status;
        }
        throw new Error('Conta inválida');
    };
}
