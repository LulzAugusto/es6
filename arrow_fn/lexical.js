class Person {
  constructor(name){
    this.name = name;
  }

  timers(){
    setTimeout(function(){
      console.log(this.name); 
    }, 100);

    setTimeout(() => {
      console.log(this.name);
    }, 100);
  }
}
