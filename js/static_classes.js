class Mother {
  static say() {
    console.log('Mother')
  }

  static shouldImplement() {
    throw new Error('Implement!');
  }
}

class Child extends Mother {
  static say() {
    console.log('Child')
  }
}

Child.say();
// Static method on mother class, not implemented in child, calls mother method
Child.shouldImplement();
