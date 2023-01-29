//The telephone class contains the following pattern: Constructor, Singleton, Observer and Prototype pattern
class Telephone {

    constructor() {
        if(Telephone.instance) {
            return Telephone.instance;
        } else {
            this.contacts = new Set();
            this.observers = new Set();
            Telephone.instance = this;
        }
    }

    addPhoneNumber(phoneNumber) {
        if(this.contactExist(phoneNumber)) {
            console.log("Contact already exist");
        }else {
            this.contacts.add(phoneNumber);
        }
    }

    removePhoneNumber(phoneNumber) {
        if(this.contactExist(phoneNumber)) {
            this.contacts.delete(phoneNumber);
        }else {
            console.log("Contact doesn't exist");
        }
    }

    dialPhoneNumber(phoneNumber) {
        if(this.contactExist(phoneNumber)) {
            this.notifyObserver(phoneNumber);
        }else {
            console.log("Contact doesn't exist");
        }
    }

    addObserver(observer) {
        if(this.observerExist(observer)) {
            console.log("Observer already exist");
        }else {
            this.observers.add(observer);
        }
    }

    removeObserver(observer) {
        if(this.observerExist(observer)) {
            this.observers.delete(observer);
        }else {
            console.log("Observer doesn't exist");
        }
    }

    notifyObserver(phoneNumber) {
        this.observers.forEach(observer => {
            observer.update(phoneNumber);
            console.log("");
        });
    }
//Checks if the contact already exists
    contactExist(phoneNumber) {
        return this.contacts.has(phoneNumber);
    }
//Checks if the observer already exists
    observerExist(observer) {
        return this.observers.has(observer);
    }

}

//The first observer which prints the phone number
class Observer1 {
    update(phoneNumber) {
        console.log(`Contact Details: Name: ${phoneNumber.fullName}\n\t\tNumber: ${phoneNumber.number}`)
    }
}

//The second observer which prints "Now Dialling......2347023232"
class Observer2 {
    update(phoneNumber) {
        console.log(`Now Dialing......${phoneNumber.number}`);
    }
}

//Used a factory pattern to create individual contact objects
const PhoneNumber = (firstName, lastName, number) => ({
    fullName: `${firstName} ${lastName}`,
    number
});

console.log("\nCreating contacts for ada, jessie and nzube:");
const ada = PhoneNumber("Adaobi", "Aginam", "+2349023456789");
const jessie = PhoneNumber("Jessie", "Chuks", "+2348076543210");
const nzube = PhoneNumber("Nzube", "Aginam", "+2348076543210");
console.log(ada);
console.log(jessie);
console.log(nzube);


console.log("\nCreating two Telephone objects and adding contacts and observers to just one but they both return the same thing.\n");
const telephone1 = new Telephone();
const telephone2 = new Telephone();

const observer1 = new Observer1();
const observer2 = new Observer2();

telephone1.addPhoneNumber(ada);
telephone1.addPhoneNumber(jessie);
telephone1.addPhoneNumber(nzube);

telephone1.addObserver(observer1);
telephone1.addObserver(observer2);

console.log("Telephone1:");
console.log(telephone1);
console.log("\nTelephone2:");
console.log(telephone2);

console.log("\nDeleting nzube's contact:");
telephone1.removePhoneNumber(nzube);
console.log(telephone1);

console.log("\nCalling Ada:");
telephone1.dialPhoneNumber(ada);

console.log("Calling Jessie:");
telephone1.dialPhoneNumber(jessie);
