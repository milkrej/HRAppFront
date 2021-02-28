export class JobCandidate {
    firstName: string;
    lastName: string;
    dateOfBirth:Date;
    contactNumber:string;
    email: string;

    constructor(firstName:string, lastName:string, dateOfBirth:Date,contactNumber:string, email:string){
        this.firstName=firstName;
        this.lastName=lastName;
        this.dateOfBirth=dateOfBirth;
        this.contactNumber=contactNumber;
        this.email=email;

    }
}
