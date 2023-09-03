

interface AbstractFactory {
    createProductA(): AbstractProductA; 
    
    createProductB(): AbstractProductB;
}

interface AbstractProductA {
    usefulFunctionA(): string;
}

interface AbstractProductB {
    usefulFunctionB(): string;
}

class ConcreteFactory1 implements AbstractFactory {

    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

     public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

class ConcreteFactory2 implements AbstractFactory {

    public createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

     public createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}


class ConcreteProductA1 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'The result of the product A1';    
    }
}

class ConcreteProductA2 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'The result of the product A2';    
    }
}

class ConcreteProductB1 implements AbstractProductB {
    usefulFunctionB(): string {
        return 'The result of the product B1';
    }

    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `The result of the B1 collaborating with the (${result})`;
    }
}

class ConcreteProductB2 implements AbstractProductB {
    usefulFunctionB(): string {
        return 'The result of the product B1';
    }

    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `The result of the B1 collaborating with the (${result})`;
    }
}

function clientCode(factory: AbstractFactory) {
    const productA = factory.createProductA(); 
    const productB = factory.createProductB();

    console.log(productB.usefulFunctionB());
    console.log(productA.usefulFunctionA());
}

console.log('Client: Testing client code with the first factory type...');
clientCode(new ConcreteFactory1());

console.log('');

console.log('Client: Testing the same client code with the second factory type...');
clientCode(new ConcreteFactory2());