/**1.  Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5,
‘десятки’: 4, ‘сотни’: 2}​ . Если число превышает 999, необходимо выдать соответствующее
сообщение с помощью ​ console.log​ и вернуть пустой объект.*/


function inputNumUser() {
    let inputNumber = 123;
    if (inputNumber > 0 && inputNumber <=999) {
        const ones = inputNumber % 10;
        const ten = inputNumber % 100 - ones;
        const hundreds = inputNumber - ones - ten;
        const objNumber = {
            ones: ones /1,
            ten: ten / 10,
            hundreds: hundreds / 100,
        };
        console.log('Единицы: ' + objNumber.ones + ', Десятки: ' + objNumber.ten + ',  Сотни: ' + objNumber.hundreds);
    } else {
        console.log('введенный номер ' + inputNumber + ', вне диапазона (0 - 999)');
    }
  }
  inputNumUser();

/**2. Продолжить работу с интернет-магазином:
a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими
объектами можно заменить их элементы?
b. Реализуйте такие объекты.
c.
Перенести функционал подсчета корзины на объектно-ориентированную базу. */
class obj {
    constructor() {
        obj = new Object();
        this.add = function (key, value) {
            obj["" + key + ""] = value;
        };
        this.obj = obj;
    }
}
  my_obj=new obj();
  my_obj.add('телефон', '15000');
  my_obj.add('ноутбук', '55000');
  my_obj.add('телевизор','35000');
  console.log(my_obj.obj);


/**3. * Подумать над глобальными сущностями. К примеру, сущность «Продукт» в
интернет-магазине актуальна не только для корзины, но и для каталога. Стремиться нужно к
тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в
разных местах давал возможность вызывать разные методы. */