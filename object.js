 class Person{
    constructor(){
        this.species = "Homosapiens";
        this.legs = 2;
        this.arms = 2;
        this.head = 1;
        this.eyes = 2;  

    }
    eat()
{
        console.log("Eat food");
    }
    sleep()
    {
        console.log("Sleep for 8 hours");
    }
    walk()
    {
        console.log("Walk for 1 hour");
    }
} 

 class Engineer extends Person{
   /* constructor(){
        super(); // Call the constructor of the parent class
        this.specialization = "Software Engineering";
        this.branch = "Computer Science";
    }*/
    work(){
       this.eat();
        console.log("Work for 8 hours");
    }

 }

 class Doctor extends Person{
    
    work(){
        console.log("Treat patients");
    }

 }

 let shehin = new Engineer();
    let shan = new Doctor();