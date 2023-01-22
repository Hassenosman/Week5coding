class Menu {
    constructor() {
      this.items = [];
    }
  
    add(item) {
      this.items.push(item);
    }
  
    view() {
      console.log(this.items);
    }
  
    delete(item) {
      this.items = this.items.filter(i => i !== item);
    }
  }
  
  class Item {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  let menu = new Menu();
  
  menu.add(new Item("Spaghetti", 13));
  menu.add(new Item("Cake", 8));
  menu.add(new Item("Chicken", 25));
  
  menu.view();

  
  menu.delete(new Item("Chicken", 25));
  
  menu.view();