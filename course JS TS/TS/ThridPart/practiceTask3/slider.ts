interface ISlider {
  container?: string;
  numberOfSlides?: number;
  speed?: 300 | 500 | 700;
  direction?: "horizontal" | "vertical";
  dots?: boolean;
  arrows?: boolean;
  animationName?: string;
}

function createSlider({
  container = "",
  numberOfSlides = 1,
  speed = 300,
  direction = "horizontal",
  dots = true,
  arrows = true,
}: ISlider = {}): void {
  console.log(container, numberOfSlides, speed, direction, dots, arrows);
}

createSlider();

// Необходимо типизировать объект настроек, который будет зависим
// от интерфейса ISlider
// Все поля в нем обязательны для заполнения
// type CusomSliderBase = Omit<ISlider, 'animationName'  | "spped">;

type CustomSliderBase = Required<Omit<ISlider, "animationName" | "speed">>;

interface ICustomSlider extends CustomSliderBase {
  speed: number;
}

const customSliderOptions: ICustomSlider = {
  container: "id",
  numberOfSlides: 4,
  speed: 1100,
  direction: "horizontal",
  dots: true,
  arrows: true,
};

function createCustomSlider(options: ICustomSlider): void {
  if ("container" in options) {
    console.log(options);
  }
}
createCustomSlider(customSliderOptions);
