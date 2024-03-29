/**
 * @interface Component  Базовый интерфейс Компонента определяет поведение, которое изменяется декораторами.
 */

interface Component {
  operation(): string;
}

/**
 * @Class  Конкретные Компоненты предоставляют реализации поведения по умолчанию
 * быть несколько вариаций этих классов.
 */
class ConcreteComponent implements Component {
  public operation(): string {
    return "ConcreteComponent";
  }
}

/**
 * @class Decorator
 * Базовый класс Декоратора следует тому же интерфейсу, что и другие компоненты.
 * Основная цель этого класса - определить интерфейс обёртки для всех конкретных
 * декораторов. Реализация кода обёртки по умолчанию может включать в себя поле
 * для хранения завёрнутого компонента и средства его инициализации.
 */
class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  /**
   * Декоратор делегирует всю работу обёрнутому компоненту.
   */
  public operation(): string {
    return this.component.operation();
  }
}

/**
 * Конкретные Декораторы вызывают обёрнутый объект и изменяют его результат
 * некоторым образом.
 */
class ConcreteDecoratorA extends Decorator {
  /**
   * Декораторы могут вызывать родительскую реализацию операции, вместо того,
   * чтобы вызвать обёрнутый объект напрямую. Такой подход упрощает расширение
   * классов декораторов.
   */
  public operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}

/**
 * @class
 * Декораторы могут выполнять своё поведение до или после вызова обёрнутого
 * объекта.
 */
class ConcreteDecoratorB extends Decorator {
  public operation(): string {
    return `ConcreteDEcoratorB (${super.operation()})`;
  }
}

/**
 * Клиентский код работает со всеми объектами, используя интерфейс Компонента.
 * Таким образом, он остаётся независимым от конкретных классов компонентов, с
 * которыми работает.
 */
function clientCodeDecorator(component: Component) {
  //...

  console.log(`Resul: ${component.operation()}`);

  //...
}

/**
 * Таким образом, клиентский код может поддерживать как простые компоненты...
 */

const simple = new ConcreteComponent();
console.log(`Client: I\'ve got a simple component: `);
clientCodeDecorator(simple);
console.log("");

/**
 * ...так и декорированные.
 *
 * Обратите внимание, что декораторы могут обёртывать не только простые
 * компоненты, но и другие декораторы.
 */

const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
clientCodeDecorator(decorator2);
