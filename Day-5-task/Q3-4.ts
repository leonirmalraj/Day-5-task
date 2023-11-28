class Person {
  private firstName: string;
  private lastName: string;
  private age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge(): number {
    return this.age;
  }
}

class UberPriceCalculator {
  calculatePrice(distanceInMiles: number, durationInMinutes: number): number {
    // You can implement your pricing logic here
    // For simplicity, let's assume a base price of $5 and $1 per mile and $0.2 per minute.
    const basePrice = 5;
    const pricePerMile = 1;
    const pricePerMinute = 0.2;

    const totalPrice = basePrice + distanceInMiles * pricePerMile + durationInMinutes * pricePerMinute;

    return totalPrice;
  }
}

// Usage example:
const person = new Person('John', 'Doe', 30);
console.log(`Person: ${person.getFullName()}, Age: ${person.getAge()}`);

const priceCalculator = new UberPriceCalculator();
const distanceInMiles = 10;
const durationInMinutes = 20;
const totalPrice = priceCalculator.calculatePrice(distanceInMiles, durationInMinutes);
console.log(`Uber Price: $${totalPrice}`);
