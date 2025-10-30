// parent
class Animal{
    eat(){
        console.log("this animal eats food")
    }
}
//child class
class dog extends Animal{
    bark(){
        console.log("the dog is barks")
    }
}
let myDog=new dog()
myDog.eat()
myDog.bark()


