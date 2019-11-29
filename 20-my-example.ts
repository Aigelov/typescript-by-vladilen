class Animal {
  static staticType: string = 'Animal';
  private type: string;

  constructor(type: string) {
    this.type = type;
  }

  voice(type: string): string {
    return `${this.type} makes a voice`;
  }
}

class Cat extends Animal {
  private size: string;
  constructor(type: string, size: string) {
    super(type);
    this.size = size;
  }

  // voice(type: string, size: string): string {
  //   const voiceData: string = super.voice(type);
  //   return `${voiceData}. Size is ${size}`;
  // }
}

const cat = new Cat('Cat', 'small');
console.log(cat);
console.log(cat.voice('Cat'));