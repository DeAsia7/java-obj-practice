//The first example involved creating a simple object regarding an item in a shop and including a sale() method.

const item = {
  name: "bread",
  price: 2,
  sale: function() {
    console.log(`The ${this.name} is on sale!`);
  }
};

item.sale();

//The second example involved creating an Animal object using constructors and a makeSound() method. 

function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
  this.makeSound = function() {
    console.log(this.name + " says: " + this.sound);
  };
}

const dog = new Animal("dog", "woof");
dog.makeSound();


//The third example involved creating a Student object using constructors and having two methods: 
//introduce() and finishesSchoolYear().

function student (name, subject, grade) {
  this.name = name;
  this.subject = subject;
  this.grade = grade;
  this.introduce = function(){
console.log(`Hi, I am ${this.name}, studying ${this.subject} in grade ${this.grade}.`);
  }
}
const student1 = new student("Alice", "Math", 10);
student1.introduce();

class year {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
        if (this.grade === 12) {
            console.log(`Congratulations, ${this.name} has graduated!`);
        }
    }
}
const myyear = new year("Alice", 10);
console.log(myyear);


//A method `finishesSchoolYear()` that:
 //Adds 1 to the grade (e.g., from 10 to 11).
 //If the grade reaches 12, it prints: `"Congratulations, [name] has graduated!"` and does not increase the grade.

