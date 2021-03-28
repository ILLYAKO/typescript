class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

// class Car1 {
//   readonly model: string;
//   readonly numberOfWheels: number = 4;

//   constructor(theModel: string) {
//     this.model = theModel;
//   }
// }
class Car1 {
  readonly numberOfWheels: number = 4;
  constructor(readonly model1: string) {}
}

//-----------------------------------
// modificator:
// protected, public, private

class Animal {
  protected voice: string = "";
  public color: string = "black";

  constructor() {
    this.go();
  }

  private go() {
    console.log("Go");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();
cat.setVoice("test");
console.log(cat.color);

//-----------------------
abstract class Component1 {
  abstract render(): void;
  abstract info(): string;
}

class AppConponent extends Component1 {
  render(): void {
    console.log("Component1 on render");
  }

  info(): string {
    return "This is info";
  }
}
