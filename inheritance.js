class Animal{
    constructor(name, height, age){
        this.name = name;
        this.height = height;
        this.age = age;
    }
    speak(){
        console.log(this.name, ' is speaking...');
    }
    walk(){
        console.log(this.name, ' is walking...');
    }
}
class Lion extends Animal{
    constructor(jungleName, name, height, age){
        super(name, height, age); // It will call the base class constructor 
        this.jungleName = jungleName;
    }
    killOtherAnimals(){
        console.log('Killings other animals');
    }
}

function doSomething(whatToDo, howToDo){
    console.log(`Doing something crazy with ${this.name} ${whatToDo} ${howToDo}`);
}


const newLion = new Lion('My Jungle', 'Lion', 6, 1);
const dog = new Animal('doggie', 2, 1)
doSomething.call(dog,  'play with him', 'with a ball'); // call method usage
doSomething.apply(dog,  ['play with him', 'with a ball']); // apply method usage

dog.speak()
newLion.speak()
console.log(newLion)



