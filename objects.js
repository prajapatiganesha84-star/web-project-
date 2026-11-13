 let student = {
    Name: "Ganesha",
    age:  20,
    course: "Btech",

    lastName : "prajapati",greet : function() {
    console.log("hello, " + this.name);
}


}



console.log(student);
console.log(student.name);
console.log(student.age);
student.address = "pune";
student.age = 21;
console.log(student);
delete student.adress;
console.log(student);

//. console.log(student.last name)

console.log(student["name"]);
console.log(student["last name"]);

student.greet();

console.log(Objects.Keys(students));
console.log(Objects.value(students));


let arr = [
    {name: "Ganesha", age: 20},
    {name: "Ragini",  age: 19},
    
];

console.log(arr[0].name);
console.log(arr[1].age);
