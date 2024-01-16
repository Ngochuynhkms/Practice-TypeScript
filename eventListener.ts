class EventListener {
    listen(animal: Animal): void {
      animal.makeSound();
    }
  }

  class Animal {
    makeSound(): void {
    }
  }

  class Dog extends Animal {
    makeSound(): void {
      console.log("Gâu gâu"); 
    }
  }
   
  class Cat extends Animal {
    makeSound(): void {
      console.log("Meo meo"); 
    }
  }
   
  class Chicken extends Animal {
    makeSound(): void {
      console.log("Ò ó o"); 
    }
  }

  const eventListener = new EventListener();
 
eventListener.listen(new Dog());
eventListener.listen(new Cat());
eventListener.listen(new Chicken());