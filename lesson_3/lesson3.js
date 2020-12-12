/* С помощью цикла while вывести все простые числа в промежутке от 0 до 100.*/
let n = 100;
let i = 2;
let j = 2;
while (i <= n) {
  while (j <= i) {
    if ((i % j == 0) && (j != i)) {
      break;
    } else {
      console.log(i);
      break;
    }
    j++;
  }
  i++;
}

/*2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. */
/*3. Товары в корзине хранятся в массиве. Задачи: */
/* a) Организовать такой массив для хранения товаров в корзине;*/

function obj(){
  obj=new Object();
  this.add=function(key,value){
      obj[""+key+""]=value;
  }
  this.obj=obj
}
my_obj=new obj();
my_obj.add('телефон', '15000');
my_obj.add('ноутбук', '55000');
my_obj.add('телевизор','35000');
console.log(my_obj.obj) // Return {key1: "value1", key2: "value2", key3: "value3"} 

/* b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/
var basket_price = 0;
Basket = [{name:'Телефон', price:12000}, {name:'телевизор', price:25000}, {name:'ноутбук', price:55000}];
function countBasketPrice(x) {
    for (i=0; i<Basket.length; i++) { 
        basket_price = basket_price + Basket[i].price;
    }
    return basket_price;
}
console.log('В корзине:');
for (i=0;i<Basket.length;i++){console.log(Basket[i].name + ' — ' + Basket[i].price +' руб');}
console.log('Стоимость заказа: '+countBasketPrice(Basket));
/* 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто}*/
for (let i = 0; i<=9; console.log(i++)){
}
/* 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx */
let mass = [];
let elem = 'x';
do {
  mass.push(elem);
  console.log(mass);
} while (mass.length <= 19);