import Queue from '../data-structures/queue-with-linked-list';

interface IAnimal {
  type: string;
  name: string;
  id?: number;
}

interface IDog extends IAnimal {
  type: 'dog';
}
interface ICat extends IAnimal {
  type: 'cat';
}

class AnimalShelter {
  dogs: Queue<IDog>;

  cats: Queue<ICat>;

  id: number;

  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
    this.id = 0;
  }

  static create() {
    return new AnimalShelter();
  }

  isEmpty(): boolean {
    return this.dogs.length() + this.cats.length() === 0;
  }

  enqueue(animal: IAnimal): void {
    if (animal.type !== 'cat' && animal.type !== 'dog') {
      throw new Error('this shelter only accepts cats and dogs');
    }
    if (animal.type === 'dog') {
      const newDog: IDog = {
        id: this.id,
        type: 'dog',
        name: animal.name,
      };
      this.dogs.enqueue(newDog);
    } else {
      const newCat: ICat = {
        id: this.id,
        type: 'cat',
        name: animal.name,
      };
      this.cats.enqueue(newCat);
    }
    this.id += 1;
  }

  dequeueAny(): ICat | IDog {
    if (this.isEmpty()) {
      return null;
    }
    const catOrder = this.cats.peek().id;
    const dogOrder = this.dogs.peek().id;

    if (catOrder < dogOrder) {
      return this.cats.dequeue();
    }
    return this.dogs.dequeue();
  }

  dequeueCat(): ICat {
    if (this.cats.isEmpty()) {
      return null;
    }
    return this.cats.dequeue();
  }

  dequeueDog(): IDog {
    if (this.dogs.isEmpty()) {
      return null;
    }
    return this.dogs.dequeue();
  }
}

export default AnimalShelter;
