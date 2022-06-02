import AnimalShelter from '../6-animal-shelter';

describe('AnimalShelter', () => {
  it('should create a new AnimalShelter on calling create()', () => {
    const animalShelter = AnimalShelter.create();
    expect(animalShelter).toHaveProperty('dogs');
    expect(animalShelter).toHaveProperty('cats');
  });
  it('should return null if there are no animals on calling any of the dequeue functions', () => {
    const animalShelter = AnimalShelter.create();
    expect(animalShelter.dequeueAny()).toBe(null);
    expect(animalShelter.dequeueDog()).toBe(null);
    expect(animalShelter.dequeueCat()).toBe(null);
  });
  it("should throw an error if animal type passed to enqueue() is not 'cat' or 'dog' ", () => {
    const animalShelter = AnimalShelter.create();
    expect(() => {
      animalShelter.enqueue({ type: 'racoon', name: 'ricky' });
    }).toThrow();
    expect(() => {
      animalShelter.enqueue({ type: 'rat', name: 'stuart' });
    }).toThrow();
    expect(() => {
      animalShelter.enqueue({ type: 'cat', name: 'bonbon' });
    }).not.toThrow();
    expect(() => {
      animalShelter.enqueue({ type: 'dog', name: 'mika' });
    }).not.toThrow();
  });
  it('should properly pop a dog on dequeueAny if dog is the first to queue', () => {
    const animalShelter = AnimalShelter.create();
    const animal0 = { type: 'dog', name: 'mona' };
    const animal1 = { type: 'cat', name: 'bonbon' };
    const animal2 = { type: 'dog', name: 'milo' };
    animalShelter.enqueue(animal0);
    animalShelter.enqueue(animal1);
    animalShelter.enqueue(animal2);
    const firstToDequeue = animalShelter.dequeueAny();
    expect(firstToDequeue).toMatchObject(animal0);
    expect(firstToDequeue.type).toBe('dog');
  });
  it('should properly pop a cat on dequeueAny if cat is the first to queue', () => {
    const animalShelter = AnimalShelter.create();
    const animal0 = { type: 'cat', name: 'bonbon' };
    const animal1 = { type: 'dog', name: 'mona' };
    const animal2 = { type: 'dog', name: 'milo' };
    animalShelter.enqueue(animal0);
    animalShelter.enqueue(animal1);
    animalShelter.enqueue(animal2);
    const firstToDequeue = animalShelter.dequeueAny();
    expect(firstToDequeue).toMatchObject(animal0);
    expect(firstToDequeue.type).toBe('cat');
  });
  it('should properly dequeue a dog on dequeueDog even if dog is not the first on the queue', () => {
    const animalShelter = AnimalShelter.create();
    const animal0 = { type: 'cat', name: 'bonbon' };
    const animal1 = { type: 'dog', name: 'mona' };
    const animal2 = { type: 'dog', name: 'milo' };
    animalShelter.enqueue(animal0);
    animalShelter.enqueue(animal1);
    animalShelter.enqueue(animal2);
    const firstToDequeue = animalShelter.dequeueDog();
    expect(firstToDequeue).toMatchObject(animal1);
    expect(firstToDequeue.type).toBe('dog');
  });
  it('should properly dequeue a cat on dequeueCat even if cat is not the first on the queue', () => {
    const animalShelter = AnimalShelter.create();
    const animal0 = { type: 'dog', name: 'mona' };
    const animal1 = { type: 'cat', name: 'bonbon' };
    const animal2 = { type: 'dog', name: 'milo' };
    animalShelter.enqueue(animal0);
    animalShelter.enqueue(animal1);
    animalShelter.enqueue(animal2);
    const firstToDequeue = animalShelter.dequeueCat();
    expect(firstToDequeue).toMatchObject(animal1);
    expect(firstToDequeue.type).toBe('cat');
  });
});
