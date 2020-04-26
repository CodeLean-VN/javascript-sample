class Student {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }


}

const s1 = new Student("1", "1", "1@gmail.com");
console.log(s1.email);

s2 = new Student("ddd");
console.log(s2.email);