# Telephone-Class
This is a telephone package that demonstrates the use of the Constructor, Singleton, Factory, Observer, and Prototype design patterns in JavaScript.

# TASK
![Week 8 Task](https://github.com/Adaobi-Chuks/Telephone-Class/blob/main/Task.png)

## Constructor Pattern
The Constructor pattern is used to create a single instance of the Telephone class, which stores phone contacts and observers.

## Singleton Pattern
The Singleton pattern is implemented in the Telephone class to ensure only one instance is created.

## Factory Pattern
The Factory pattern is used to create individual phone number objects with a function PhoneNumber.

## Observer Pattern
The Observer pattern is used to notify observers about changes in the phone contacts. They receive updates when a phone number is dialed.

## Prototype Pattern
The PhoneNumber class uses the Prototype pattern by having its instance's properties (firstName, lastName, number) shared among all instances of the class, so that any instance can use them without having to recreate them.

# How To Use
- Clone the repo and cd into the directory such that you are in `Telephone Class`.
- To run the solution, make sure you have [nodejs](https://nodejs.org/) installed.
- Use the following command in your terminal.
```
node Telephone.js
```
- You can play around with the code to see what the class can and cannot do.

# Expected Output
If the Telephone.js is run as it is on this repository, the results look like this:
```
--> Telephone Class> node .\Telephone.js
Creating contacts for ada, jessie and nzube:
{ fullName: 'Adaobi Aginam', number: '+2349023456789' }
{ fullName: 'Jessie Chuks', number: '+2348076543210' }
{ fullName: 'Nzube Aginam', number: '+2348076543210' }

Creating two Telephone objects and adding contacts and observers to just one but they both return the same thing.

Telephone1:
Telephone {
  contacts: Set(3) {
    { fullName: 'Adaobi Aginam', number: '+2349023456789' },
    { fullName: 'Jessie Chuks', number: '+2348076543210' },
    { fullName: 'Nzube Aginam', number: '+2348076543210' }
  },
  observers: Set(2) { Observer1 {}, Observer2 {} }
}

Telephone2:
Telephone {
  contacts: Set(3) {
    { fullName: 'Adaobi Aginam', number: '+2349023456789' },
    { fullName: 'Jessie Chuks', number: '+2348076543210' },
    { fullName: 'Nzube Aginam', number: '+2348076543210' }
  },
  observers: Set(2) { Observer1 {}, Observer2 {} }
}

Deleting nzube's contact:
Telephone {
  contacts: Set(2) {
    { fullName: 'Adaobi Aginam', number: '+2349023456789' },
    { fullName: 'Jessie Chuks', number: '+2348076543210' }
  },
  observers: Set(2) { Observer1 {}, Observer2 {} }
}

Calling Ada:
Contact Details: Name: Adaobi Aginam
                Number: +2349023456789

Now Dialing......+2349023456789

Calling Jessie:
Contact Details: Name: Jessie Chuks
                Number: +2348076543210

Now Dialing......+2348076543210
```