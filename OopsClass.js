class PersonOn {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;

    }
    getFullName(){
         return `${this.firstName} ${this.lastName}`;
    }
}

const PersonObjectOne = new PersonOn('Rahul' , 'Banjare');
console.log(PersonObjectOne.getFullName());