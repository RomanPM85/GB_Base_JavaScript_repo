func_id_8a.addEventListener("click", func_8a_answer);
func_id_8b.addEventListener("click", func_8b_answer);
func_id_8c.addEventListener("click", func_8c_answer);
func_id_8d.addEventListener("click", func_8d_answer);
func_id_8e.addEventListener("click", func_8e_answer);
func_id_8a_result.addEventListener("click", func_8a_result);
func_id_8b_result.addEventListener("click", func_8b_result);
func_id_8c_result.addEventListener("click", func_8c_result);
func_id_8d_result.addEventListener("click", func_8d_result);
func_id_8e_result.addEventListener("click", func_8e_result);

function func_8a_answer () {
    alert('Что здесь происходит, так это то, что если этот код запускает глобальную область, то ("a" in window) всегда будет истинным, потому что var a часть кода поднимается над исполняемым кодом, поэтому var a в глобальной области всегда был выполняется так, что всегда ("a" in window). Таким образом, a = 1 никогда не выполняется при запуске в глобальной области действия, а alert(a) просто выводит все значения глобального значения a. Если раньше у него было определенное значение, то что вы увидите. Если ранее не было определенного значения, тогда он будет просто оповещен undefined потому что (предположил, что он существует) ему не было присвоено значение.Если этот код запускается в локальной области, тогда alert(a) всегда будет видеть локально определенное значение a в alert(a). Таким образом, вы будете видеть 1 в качестве значения, если не существует никакого глобального, потому что тогда a a = 1 будет выполняться на локальном a. Или, если существует глобальное a, тогда a = 1 никогда не будет выполняться, поэтому локально определенный a всегда будет undefined и что будет отображаться предупреждение.');
    alert("Более подробно рассказано тут...");
    window.location.assign('https://fooobar.com/questions/7585644/whats-going-on-with-this-javascript-snippet');
};
function func_8b_answer () {
    document.write('<p> Ответ..b <br> </p>');
};
function func_8c_answer () {
    document.write('<p> В JavaScript как объявление функции, так и объявление переменной выводятся наверх функции, если она определена в функции, или на вершину глобального контекста, если она находится вне функции. И объявление функции имеет приоритет над объявлениями переменных (но не над назначением переменных).Объявление функции переопределяет объявление переменной при подъеме.Сначала вы объявляете переменную: <br> var a; // value of a is undefined <br>Во-вторых, значение a является функцией, потому что объявление функции имеет приоритет над объявлениями переменных (но не над назначением переменных): </p> <p><br>function a(x) { <br>return x * 2; <br>} <br>И это то, что вы получаете, когда вызываете alert(a);, Но, если вместо объявления переменной вы назначаете переменную: var a = 4; тогда присвоенное значение 4 будет преобладать.</p>');
};
function func_8d_answer () {
    document.write('<p> функцией \"b"\ мы внутри функции переопределяем значение переменной \"а"\ на 10 и выводим ee через alert, вне зависимости, какой она была до <br> </p>');
};
function func_8e_answer () {
    alert("Более подробно рассказано на следующей странице...");
    window.location.assign('http://dmitrysoshnikov.com/ecmascript/ru-chapter-3-this');
};

function func_8a_result () {
    if (!("a" in window)) {
        var a = 1;
        }
        alert(a); 
};

function func_8b_result () {
    var b = function a(x) {
        x && a(--x);
    };
    alert(a);
};

function func_8c_result () {
    function a(x) {
        return x * 2;
        }
        var a;
        alert(a); 
};
function func_8d_result () {
    function b(x, y, a) {
        arguments[2] = 10;
        alert(a);
        }
        b(1, 2, 3); 
};
function func_8e_result () {
    function a() {
        alert(this);
        }
        a.call(null); 
};