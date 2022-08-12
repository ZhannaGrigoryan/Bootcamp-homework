//1.

/*class University{
    constructor(){
       this.teachers = [] 
       this.students = []
    }
    addMember(member){
      if(member.role === 'student'){
        this.students.push(member)
      }
      else if(member.role === 'teacher'){
        this.teachers.push(member)
      }
    }
    removeMember(member){
        if(member.role === 'student'){
           this.students.splice(this.students.indexOf(member),1)
        }
        else if(member.role === 'teacher'){
            this.teachers.splice(this.teachers.indexOf(member),1)
        }
    }
    startLesson(){
     this.students.map(member => member.energy -=2)
     this.teachers.map(member => member.energy -=5)
    }
}

class UniversityMember{
    constructor(name,age,role,energy=24){
        this.name = name
        this.age = age 
        this.role = role 
        this.energy = energy

    }
    info(){
      return this
    }
    
}
class Teacher extends UniversityMember{

}

class Student extends UniversityMember{

}

let s1 = new Student('Mary',19,'student')  
let s2 = new Student('Ann',25,'student')
let s3 = new Student('Henry',30,'student')

let t1 = new Teacher('Garry',45,'teacher')
let t2 = new Teacher('Lucy',55,'teacher')
let t3 = new Teacher('Ben',25,'teacher')

let u1 =new University()
 
u1.addMember(s1)
u1.addMember(s2) 
u1.addMember(s3)
u1.addMember(t1)
u1.addMember(t2)
u1.addMember(t3)
u1.startLesson()

console.log(s1.info())*/

//2.

/*function CoffeeShop(name, menu = [], orders= []){
    this.name = name
    this.menu = menu
    this.orders = orders

    CoffeeShop.prototype.addOrder = function(item){
        if(this.menu.includes(item)){
           this.orders.push(item)
        }else{
            return 'this item is currently unavailable'
        }
    }

    CoffeeShop.prototype.fullfilOrder = function(){
        if(this.orders.length === 0){
          return  "All orders have been fulfilled!"
        }else{
            let item = this.orders.shift()
            return `The ${item.name} is ready!`
        }

    }

    CoffeeShop.prototype.listOrders = function(){
        let ordersName =[]
        for(let item of this.orders){
           ordersName.push(item.name)
        }
        return ordersName
    }
    CoffeeShop.prototype.dueAmount = function(){
        let sum = 0
        for(let item of this.orders){
              sum+=item.price
        }
        return sum
    }

    CoffeeShop.prototype.cheapestItem = function(){
        let minPrice = this.menu[0].price
        let cheapestItem = this.menu[0]
       for(let i =1; i< this.menu.length; i++){
        if(minPrice>this.menu[i].price){
            minPrice=this.menu[i].price
            cheapestItem = this.menu[i]
        }
       }
        return cheapestItem.name
       
    }

    CoffeeShop.prototype.drinksOnly = function(){
        let drinks =[]
       for(let item of this.menu){
        if(item.type === 'drink'){
         drinks.push(item.name)
        }
       }
       return drinks
    }

    CoffeeShop.prototype.foodOnly = function(){
        let foods =[]
        for(let item of this.menu){
            if(item.type ==='food'){
                foods.push(item.name)
            }
        }
        return foods
    }
    
}

function MenuItems(name,type,price){
    this.name = name
    this.type= type
    this.price = price
}

let cappuccino = new MenuItems('cappuccino','drink',2)
let hamburger = new MenuItems('hamburger','food',5)
let tea = new MenuItems('tea','drink',1)
let sandwich = new MenuItems('sandwich','food',6)
 
let menu = [cappuccino,hamburger,tea,sandwich]

let cafe = new CoffeeShop('CoffeeShop',menu)



cafe.addOrder(sandwich)
cafe.addOrder(cappuccino)
cafe.addOrder(hamburger)
 

console.log(cafe.foodOnly())*/


//3.


/*class Abstract{
    constructor(){
    if(new.target){
        throw new Error('sorry you can\'t create an instance with that class')
    }
    }
    
}

let c1 = new Abstract()
let c = Abstract()*/


//5.


/*class City{
    constructor(name,buildings=[]){
     this.buildings = buildings
     this.name =name
    }
}

class Building extends City{
    constructor(location){
        super()
     this.location =location
    }
}

class Hospital extends Building{
     constructor(name){
        super()
        this.name = name
     }
}

class PoliceDepartment extends Building{
    constructor(name){
        super()
        this.name = name
    }
}

class Car{
 constructor(name){
 this.name = name
}
drive(){
    console.log('you are driving usual car')
}
signal(){
    console.log('signal of usual car')
}
}

class AmbulanceCar extends Car{
drive(){
    console.log('you are driving ambulance car')
}
signal(){
    console.log('signal of ambulance car')
}
}

class PoliceCar extends Car{
  drive(){
    console.log('you are driving police car')
  }
  signal (){
    console.log('signal of police car')
  }
}

let ambulanceCar = new AmbulanceCar('Skoda');
let policeCar = new PoliceCar('Camery')

ambulanceCar.drive()

let c = new City('Yerevan')
let h1 = new Hospital('Nairi')
let h2 = new Hospital('Erebuni')
let p1 = new PoliceDepartment('Arabkir')
let p2 = new PoliceDepartment('Kentron')

City.buildings = [h1,h2,p1,p2]*/



//6.


/*class Tv{
    constructor(brand,channel=1,volume=50){
       this.brand = brand
       this.channel =channel
       this.volume = volume

    }
increaseVol(){
if(this.volume < 100){
   this.volume++
}else{
 this.volume = 100 
}
}

decreaseVol(){
if(this.volume > 0 ){
   this.volume--
}else{ 
 this.volume = 0 
}
}
setChanel(channel){
 if(channel < 50){
 this.channel = channel 
 }
}
resetTv(){
  this.volume = 50
  this.channel = 1
}
showStatus(){
    return `${this.brand} at channel ${this.channel}, volume ${this.volume}`
}
}

let tv = new Tv('SONY')

tv.decreaseVol()

tv.increaseVol()

 tv.setChanel(45)
 
 tv.resetTv()

console.log(tv.showStatus())*/


//7.

/*class Product{
    constructor(name,type,price){
      this.name = name
      this.type = type
      this.price = price
    }
}


class ShoppingCart{
    constructor(orders =[]){
     this.orders = orders
     
    }

    addProduct(product){
       this.orders.push(product)
    }
    removeProduct(product){
      for(let i=0; i< this.orders.length; i++){
        if(this.orders[i].name === product.name && this.orders[i].type === product.type && this.orders[i].price === product.price){
            this.orders.splice(i,1)
        }
      }
    }

    totalPrice(){
        let sum =0
     for(let i=0;  i< this.orders.length; i++){
        sum += this.orders[i].price
        
     } 
     if(this.orders.length >= 5){
        sum = sum - (sum*10)/100
     }
     return sum
    }

}

let p1 = new Product('shoes','drink',50)
let p2 = new Product('shirt','drink',20)
let p3 = new Product('tea','drink',5)
let p4 = new Product('coffee','drink',6)
let p5 = new Product('car','toy',35)


let card = new ShoppingCart()

card.addProduct(p1)
card.addProduct(p2)
card.addProduct(p3)
card.addProduct(p4)
card.addProduct(p5)
card.removeProduct(p3)

console.log(card.totalPrice())*/
