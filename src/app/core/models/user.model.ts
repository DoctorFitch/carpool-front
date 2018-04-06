export class User {

    email: string;
    id: string;
    password: string;
    position: Position;
    username: string;

    // constructor(data?: any) {
    //     if (arguments.length > 0) {
    //         for (const prop in data) {
    //             if (data.hasOwnProperty(prop)) {
    //                 this[prop] = data[prop];
    //             }
    //         }
    //     }
    // }

    clear(): void {
        for (const prop in this) {
            if (this.hasOwnProperty(prop)) {
                this[prop] = null;
            }
        }
    }
}