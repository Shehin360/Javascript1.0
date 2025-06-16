class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log(`Name: ${this.name}, Email: ${this.email}`);

    }
}

class Admin extends User{
    editData(){
        console.log(`Admin ${this.name} can edit data.`);
    }
}

let student1 = new User("John Doe", "johndoe@gmail.com");
let student2 = new User("Jane Smith", "janesmith@gmail.com");

let teacher1 = new User("Mr. Brown", "brown@gmail.com");

let admin1 = new Admin("Admin User", "admin123@gmail.com");