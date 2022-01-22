// JavaScript source code
const FruitsArray = [
    {
        "name": "apple",
        "price": 150,
        "quantity": 30
    },

      {
          "name": "mango",
          "price": 370,
          "quantity": 50
      },
      {
          "name": "peach",
          "price": 60,
          "quantity": 15
      },
      {
          "name": "grapes",
          "price": 440,
          "quantity": 20
      },


]
 
/* Filter fucntion
Filter > 200 price  [
  { name: 'mango', price: '370', quantity: 50 },
  { name: 'grapes', price: '440', quantity: 20 }
]
*/
var above200 = FruitsArray.filter(fruit=> fruit.price > 200)
console.log("Filter > 200 price ", above200)

/* Map fucntion
Map frutis name [ 'apple', 'mango', 'peach', 'grapes' ]
*/
var mapped_names_and_quantity = FruitsArray.map(fruit=>  fruit.name )
console.log("Map frutis name", mapped_names_and_quantity)

/* Find fucntion 
Found items  { name: 'apple', price: '150', quantity: 30 }
*/
var foundItems=FruitsArray.find(fruit=> fruit.name == "apple" || fruit.name=="mango")
console.log("Found items ", foundItems)

/* ForEach fucntion
apple  original price is :  150
50% off  price is :  75
mango  original price is :  370
50% off  price is :  185
peach  original price is :  60
50% off  price is :  30
grapes  original price is :  440
50% off  price is :  220
*/
FruitsArray.forEach(fruit=> 
    
    { 
        console.log(fruit.name, " original price is : " , fruit.price)
        console.log("50% off  price is : " , fruit.price-(fruit.price * (.5)))
     })


/* Some fucntion
apples present in list is   true
*/
var CheckApplePresent=FruitsArray.some(fruit=> fruit.name == "apple")
console.log("apples present in list is  ", CheckApplePresent)

/* Every fucntion 
all furits have quantity greater than 10 is    true
*/
var quanityGreaterthan10=FruitsArray.every(fruit=> fruit.quantity > 10)
console.log("all furits have quantity greater than 10 is   ", quanityGreaterthan10)

/* Reduce fucntion 
average price of fruits is :    255
*/
var averagePrice=FruitsArray.reduce((avgPrice,fruit)=>{
     return fruit.price+avgPrice},0)/FruitsArray.length
console.log("average price of fruits is :   ", averagePrice) 



