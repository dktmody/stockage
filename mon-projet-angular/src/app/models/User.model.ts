export class User {
    constructor(public firtName: string,
                public lastName: string,
                public email: string,
                public drinkPreference: string,
                public hobbies?: string[]) {}
}