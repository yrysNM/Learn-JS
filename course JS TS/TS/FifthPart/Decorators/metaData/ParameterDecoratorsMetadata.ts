import "reflect-metadata";
const limitMetadataKey = Symbol("limit");

interface ICarD {
  fuel: string;
  open: boolean;
  freeSeats: number;
}

@changeDoorStatusD(false)
@changeAmountOfFueldD(95)
class MyCarD implements ICarD {
  fuel: string = "50%";
  open: boolean = true;
  errors: any;
  _weight: number = 1000;

  @checkNumberOfSeatsD(4)
  freeSeats: number;

  @checkAmountOfFuelD
  isOpen(value: string) {
    console.log(this.fuel);
    return this.open ? "open" : `close ${value}`;
  }

  @validate
  startTravel(@limit passengers: number) {
    console.log(`Started with ${passengers} passengers`);
  }
}

function limit(
  target: Object,
  propertyKey: string | symbol,
  parametrIndex: number
) {
  // console.log(Reflect.getOwnMetadata("design:type", target, propertyKey));
  // console.log(Reflect.getOwnMetadata("design:paramtypes", target, propertyKey));
  // console.log(Reflect.getOwnMetadata("design:returntype", target, propertyKey));
  let limitedParametrs: number[] =
    Reflect.getOwnMetadata(limitMetadataKey, target, propertyKey) || [];
  limitedParametrs.push(parametrIndex);
  Reflect.defineMetadata(
    limitMetadataKey,
    limitedParametrs,
    target,
    propertyKey
  );
}

function validate(
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) {
  let method = descriptor.value;
  descriptor.value = function (...args: any) {
    let limitedParametrs: number[] = Reflect.getOwnMetadata(
      limitMetadataKey,
      target,
      propertyKey
    );

    if (limitedParametrs) {
      for (let index of limitedParametrs) {
        if (args[index] > 4) {
          throw new Error(`Нельзя больше 4х пассажиров`);
        }
      }
    }
    return method?.apply(this, args);
  };
}

function checkNumberOfSeatsD(limit: number) {
  return function (target: Object, propertyKey: string | symbol) {
    let value: number;
    let symbol = Symbol();

    const getter = function (this: any) {
      // return value;
      return this[symbol];
    };

    const setter = function (this: any, newAmount: number) {
      if (newAmount >= 1 && newAmount < limit) {
        this[symbol] = newAmount;
      } else {
        // console.log(`Больше ${limit} сидений быть не может`);9
        Object.defineProperty(target, "errors", {
          value: `Больше ${limit} сидений быть не может`,
        });
      }
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  };
}

function checkAmountOfFuelD(
  target: Object,
  propertyKey: string | Symbol,
  descriptor: PropertyDescriptor
) {
  // descriptor.enumerable = false;
  const oldValue = descriptor.value;
  descriptor.value = function (this: any, ...args: any[]) {
    // console.log(this);
    console.log(this.fuel);

    return oldValue.apply(this, args);
    // console.log(this.fuel);
    // return this.open ? "open" : "close";
  };
}

// ts version 5
function changeDoorStatusD(status: boolean) {
  return <T extends { new (...args: any[]): {} }>(
    target: T
    // context: ClassDecoratorContext<T>
  ) => {
    return class extends target {
      open = status;
    };
  };
}

// ts version 5
function changeAmountOfFueldD(amount: number) {
  return <T extends { new (...args: any[]): {} }>(
    target: T
    // context: ClassDecoratorContext<T>
  ) => {
    return class extends target {
      fuel = `${amount}%`;
    };
  };
}

const carD = new MyCarD();
carD.startTravel(3);
console.log(carD);
