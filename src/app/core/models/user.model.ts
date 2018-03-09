export class User {
    id: number;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    adress: string;
    town: string;
    postalCode: number;
    country: string;

    constructor(data?: any) {
        if (arguments.length > 0) {
            for (const prop in data) {
                if (data.hasOwnProperty(prop)) {
                    this[prop] = data[prop];
                }
            }
        }
    }

    clear(): void {
        for (const prop in this) {
            if (this.hasOwnProperty(prop)) {
                this[prop] = null;
            }
        }
    }
}