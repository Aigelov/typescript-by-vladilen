interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number,
    height: number
  }
}
const rect1: Rect = {
  id: 'rect1',
  color: 'green',
  size: {
    width: 20,
    height: 30
  }
};
const rect2 = {} as Rect;
const rect3 = <Rect>{};
interface RectWithArea extends Rect {
  getArea: () => number
}
const rect4: RectWithArea = {
  id: 'rect4',
  size: {
    width: 20,
    height: 30
  },
  getArea(): number {
    return this.size.width * this.size.height;
  }
};


// =============================
interface IClock {
  time: Date;
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date;

  setTime(date: Date): void {
    this.time = date;
  }
}


// =============================
interface Styles {
  [key: string]: string;
}
const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
};


// =============================
interface UserInterface {
  name: string;
  age: number;
  logInfo: () => void;
  id?: any
}
const user: UserInterface = {
  name: 'Vladilen',
  age: 25,
  logInfo() {
    console.log(`${this.name} ${this.age}`);
  }
};
// console.log(user);


// =============================
interface SayHello {
  sayHello: () => void;
}

class User2 implements SayHello {
  constructor(
    private name: string,
    private age: number
  ) {}

  sayHello() {
    console.log(`${this.name} Hello!`);
  }
}
const user2 = new User2('Vladilen', 26);
console.log(user2);
user2.sayHello();