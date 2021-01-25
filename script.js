// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let p = document.createElement("p");
// p.id = "text";
// p.innerText = "text";
// document.body.appendChild(p);

// let btn = document.createElement("button");
// btn.innerText = "delete txt"
// document.body.appendChild(btn);

// btn.onclick = function () {
//    p.remove();
// }
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let btn = document.createElement("button");
// document.body.appendChild(btn);
// btn.innerText = "btnNone";
// btn.style.display = "block"
// btn.onclick = function () {
//    btn.style.display = "none";
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let inp = document.createElement("input");
// inp.type = "number";
// document.body.appendChild(inp);

// let btn = document.createElement("button"); 
// btn.innerText = "audit";
// document.body.appendChild(btn);

// let txt = document.createElement("p");
// txt.innerText = `Введіть свій вік і натисніть ${btn.innerText}`;
// document.body.appendChild(txt);

// btn.onclick = function () {
//    if (inp.value < 18) {
//       txt.innerText = `Ваш вік ${inp.value} меньший за 18`
//    }else if(inp.value == 18) {
//       txt.innerText = `Ваш вік ${inp.value} дорівнює  18`
//    } else {
//       txt.innerText = `Ваш вік ${inp.value} більший за 18`
//    }
// }


// - Создайте меню, которое раскрывается/сворачивается при клике

// let ul = document.createElement("ul");
// document.body.appendChild(ul);
// ul.innerText = "Menu"

// for (let i = 0; i < 10; i++) {
//    let li = document.createElement("li");
//    ul.appendChild(li)
//    li.innerText = `Пункт ${i}`
// }
// let li = document.getElementsByTagName("li");
// let flag = true;
// ul.onclick = function () {
//    if (flag === true) {
//       for (let i = 0; i < li.length; i++) {
//          li[i].style.display = "none"
//       }
//       flag = false;
//    }
//    else if(flag === false){
//       for (let i = 0; i < li.length; i++) {
//          li[i].style.display = "block"
//       }
//       flag = true;
//    }
// }

// - Создать список комментариев , пример объекта коментария - 
// { title: 'lorem', body: 'lorem ipsum dolo sit ameti' }.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
// let mas = [
//    { title: 'lorem', body: { coment1: 'lorem ipsum dolo sit', coment2: 'lorem ipsum dolo sit ameti' } },
//    { title: 'lorem', body: { coment1: 'lorem ipsum dolo sit', coment2: 'lorem ipsum dolo sit ameti' } },
//    { title: 'lorem', body: { coment1: 'lorem ipsum dolo sit', coment2: 'lorem ipsum dolo sit ameti' } },
//    { title: 'lorem', body: { coment1: 'lorem ipsum dolo sit', coment2: 'lorem ipsum dolo sit ameti' } },
//    { title: 'lorem', body: { coment1: 'lorem ipsum dolo sit', coment2: 'lorem ipsum dolo sit ameti' } },
//    { title: 'lorem', body: { coment1: 'lorem ipsum dolo sit', coment2: 'lorem ipsum dolo sit ameti' } },
//    { title: 'lorem', body: { coment1: 'lorem ipsum dolo sit', coment2: 'lorem ipsum dolo sit ameti' } },
//    { title: 'lorem', body: { coment1: 'lorem ipsum dolo sit', coment2: 'lorem ipsum dolo sit ameti' } }
// ]
// mas.forEach((value) => {
//    let content = document.createElement("div");
//    document.body.appendChild(content);

//    let body = document.createElement("div");
//    body.innerText = value.title;
//    content.appendChild(body);

//    let coment = document.createElement("div");
//    coment.id = "coment";
//    content.appendChild(coment);

//    let ul2 = document.createElement("ul");
//    coment.appendChild(ul2);

//    for (const key in value.body) {
//       let li = document.createElement("li");
//       li.innerText = value.body[key];
//       ul2.appendChild(li);
//    }

//    let btn = document.createElement("button");
//    btn.innerText = "close";
//    coment.appendChild(btn);

//    let flag = true;
//    btn.onclick = function (en) {
//       if (flag === true) {
//          let block = en.target.previousElementSibling;
//          block.style.display = "none";
//          btn.innerText = "open"
//          flag = false;

//       } else if (flag === false) {
//          let block = en.target.previousElementSibling;
//          block.style.display = "block";
//          btn.innerText = "close"
//          flag = true;
//       }


//    }

// })

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let form1 = document.createElement("form");
// form1.id = "form1";
// document.body.appendChild(form1);

// let inp1 = document.createElement("input");
// inp1.name = "inp1";
// form1.appendChild(inp1);

// let inp2 = document.createElement("input");
// inp2.name = "inp2";
// form1.appendChild(inp2);

// let form2 = document.createElement("form");
// form2.id = "form2";
// document.body.appendChild(form2);

// let inp3 = document.createElement("input");
// inp3.name = "inp3";
// form2.appendChild(inp3);

// let inp4 = document.createElement("input");
// inp4.name = "inp4";
// form2.appendChild(inp4);

// let btn = document.createElement("button");
// btn.innerText = "button";
// document.body.appendChild(btn);

// btn.onclick = function () {
//    console.log(document.forms.form1.inp1.value);
//    console.log(document.forms.form1.inp2.value);
//    console.log(document.forms.form2.inp3.value);
//    console.log(document.forms.form2.inp4.value);
// }

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

// let content = document.createElement("div");
// document.body.appendChild(content);

// function table (kolum,str,tag){
//    let table = document.createElement("table");
//    document.body.appendChild(table);
//    table.border = 1;
//    table.width = 100 + "%";
//    table.cellPadding = 5;

//    for (let i = 0; i < kolum; i++) {
//       let tr = document.createElement("tr");
//       tr.innerText = "kolum" + [i];
//       table.appendChild(tr);

//       for (let z = 0; z < str; z++) {
//          let th = document.createElement("th");
//          th.innerText = "str" + [z];
//          tr.appendChild(th);
//       }
//    }
//    tag.appendChild(table);
// }

// table(10, 5, content);

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)

// let inp1 = document.createElement("input");
// inp1.name = "inp1";
// document.body.appendChild(inp1);

// let inp2 = document.createElement("input");
// inp2.name = "inp2";
// document.body.appendChild(inp2);

// let inp3 = document.createElement("input");
// inp3.name = "inp3";
// document.body.appendChild(inp3);

// let btn = document.createElement("button");
// btn.innerText = "createTable";
// document.body.appendChild(btn);

// btn.onclick = function () {

//    let table = document.createElement("table");
//    document.body.appendChild(table);
//    table.border = 1;
//    table.width = 100 + "%";
//    table.cellPadding = 5;

//    let kolumValue = inp1.value;
//    let strValue = inp2.value;
//    let txtValue = inp3.value;

//    for (let i = 0; i < kolumValue; i++) {
//       let tr = document.createElement("tr");
//       tr.innerText = txtValue;
//       table.appendChild(tr);

//       for (let z = 0; z < strValue; z++) {
//          let th = document.createElement("th");
//          th.innerText = txtValue;
//          tr.appendChild(th);
//       }
//    }
// }

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let masImg = [
//    { id: 1, src : "https://wiki.cuspu.edu.ua/images/temp/6/69/20191025073610!phpFIl4KV.jpg" },
//    { id: 2, src : "https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg" },
//    { id: 3, src : "https://icocnews.ru/wp-content/uploads/2015/09/priroda.jpg" },
//    { id: 4, src : "https://infokava.com/uploads/posts/2015-11/1446540718_1.jpg" },
//    { id: 5, src : "https://www.rbc.ua/static/img/_/m/_morozniy_ranok__1__650x410.jpg" },

// ]
// let flag = 4;
// let img = document.createElement("img");
// document.body.appendChild(img);
// img.id = "img" + masImg[flag].id;
// img.src = masImg[flag].src;
// img.style.width = 100 + "%";
// img.style.height = 400 + "px";


// let blockBtn = document.createElement("div");
// document.body.appendChild(blockBtn);
// blockBtn.style.display = "flex";
// blockBtn.style.justifyContent = "center";


// let btnBeck = document.createElement("button");
// btnBeck.innerText = "back";
// blockBtn.appendChild(btnBeck);

// let btnNext = document.createElement("button");
// btnNext.innerText = "next";
// blockBtn.appendChild(btnNext);


// btnBeck.onclick = function () {
//    if (flag > 0 ) {
//       flag--;
//       img.src = masImg[flag].src; 
//    } else {
//       flag = 4;
//       img.src = masImg[flag].src;
//    }
// }
// btnBeck.onclick = function () {
//    if (flag > 0 ) {
//       flag--;
//       img.src = masImg[flag].src; 
//    } else {
//       flag = 4;
//       img.src = masImg[flag].src;
//    }
// }
// btnNext.onclick = function () {
//    if (flag < masImg.length-1 ) {
//       flag++;
//       img.src = masImg[flag].src; 
//    } else {
//       flag = 0;
//       img.src = masImg[flag].src;
//    }
// }

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// let masShet = ["срака пердяка", "погане слово", "дуже погане слово","стара порхалка"];

// let inp = document.createElement("input");
// document.body.appendChild(inp);

// let btn = document.createElement("button");
// btn.innerText = "audit";
// document.body.appendChild(btn);

// btn.onclick = function () {
//    masShet.forEach(element => {
//       console.log(element);
//       if (element === inp.value) {
//          inp.value = "";
//          alert("bad word")
//       }
//    });
// }

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

// let masShet = ["срака", "пердяка","порхалка"];

// let inp = document.createElement("input");
// document.body.appendChild(inp);

// let btn = document.createElement("button");
// btn.innerText = "audit";
// document.body.appendChild(btn);

// btn.onclick = function () {
//    let valInp = inp.value;
//    for (const iterator of masShet) {
//       if (valInp.indexOf(iterator) >= 0) {
//          alert("bad word");
//       }
//    }
// }

// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// let content = document.getElementById("content");
// let wrap = document.getElementById("wrap");
// let masH2 = document.getElementsByTagName("h2");

// let ul = document.createElement("ul");
// content.appendChild(ul);

// for (let i = 0; i < masH2.length; i++) {
//    let li = document.createElement("li");
//    ul.appendChild(li);

//    let anchor = "anchor" + [i];

//    let a = document.createElement("a");
//    a.href = "#" + anchor;
//    li.appendChild(a);

//    masH2[i].setAttribute("id", anchor);
//    a.innerHTML = masH2[i].innerText;
// }

// content.style.width = "30%";
// content.style.float = "left";

// wrap.style.width = "70%";
// wrap.style.float = "left";

// -- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// let content = document.createElement("div");
// document.body.appendChild(content);

// let users = document.createElement("div");
// content.appendChild(users);

// let chek1 = document.createElement("input");
// chek1.type = "checkbox";
// content.appendChild(chek1);

// let label1 = document.createElement("label");
// label1.innerText = "осталяет со статусом false";
// content.appendChild(label1);

// let chek2 = document.createElement("input");
// chek2.type = "checkbox";
// content.appendChild(chek2);

// let label2 = document.createElement("label");
// label2.innerText = "оставляет старше 29 лет включительно";
// content.appendChild(label2);

// let chek3 = document.createElement("input");
// chek3.type = "checkbox";
// content.appendChild(chek3);

// let label3 = document.createElement("label");
// label3.innerText = "оставляет тех у кого город киев";
// content.appendChild(label3);

// let btn = document.createElement("button");
// btn.innerText = "filter";
// content.appendChild(btn);

// function result(arr) {
//     arr.forEach((element) => {
//         let user = document.createElement("div");
//         user.innerText = JSON.stringify(element);;
//         users.appendChild(user); 
//     });
// }

// result(usersWithAddress);

// btn.onclick = function (en) {
//     users.innerHTML = "";
//     let newMas = JSON.parse(JSON.stringify(usersWithAddress))
//     if (chek1.checked === true) {
//         newMas = newMas.filter((value)=>{return value.status === false})
//     }
//     if (chek2.checked === true) {
//         newMas = newMas.filter((value)=>{return value.age >= 29})
//     }
//     if (chek3.checked === true) {
//         newMas = newMas.filter((value)=>{return value.address.city === "Kyiv"})
//     }
//     result(newMas);
// }

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
// en.target.previousElementSibling

// const FOCUSED_CLASS = "focused";
// const LEFT = "left";
// const RIGHT = "right";

// function getFocusedElement() {
//     return document.getElementsByClassName(FOCUSED_CLASS)[0];
// };

// function focuseElement(element) {
//     element.classList.add(FOCUSED_CLASS);
// }

// function unfocuseElement(element) {
//     element.classList.remove(FOCUSED_CLASS);
// }

// function createNavigationBtns() {

//     let btn1 = document.createElement("button");
//     btn1.innerText = "back";
//     btn1.id = "btn1";
//     document.body.appendChild(btn1);

//     let btn2 = document.createElement("button");
//     btn2.innerText = "next";
//     btn2.id = "btn2";
//     document.body.appendChild(btn2);

//     return [btn1, btn2];
// }

// function getNavigationBtnHandler(direction) {
//     return function () {
//         let focused = getFocusedElement();

//         if (!focused) {
//             let firstElement = document.body.children[0];
//             focuseElement(firstElement);
//             return;
//         }

//         changeFocus(focused, direction);
//     }
// }

// let [btn1, btn2] = createNavigationBtns();

// btn1.onclick = getNavigationBtnHandler(LEFT);
// btn2.onclick = getNavigationBtnHandler(RIGHT);

// function changeFocus(element, direction) {
//     unfocuseElement(element);
//     if (direction === LEFT) {
//         let lenghtElement = element.childElementCount;
//         let previousTag = element.previousElementSibling;
//         let previousparentElement = element.parentElement.previousElementSibling;
//         let firstElement = document.body.firstElementChild;
//         console.log(firstElement);
//         console.log(element);
//         if (lenghtElement > 0) {
//             let nextChildre = element.lastElementChild;
//             focuseElement(nextChildre);
//         } else if (previousTag) {
//             focuseElement(previousTag)
//         } else if (element === firstElement) {
//             focuseElement(document.body.lastElementChild);
//         }
//         else if (previousTag === null && previousparentElement) {
//             focuseElement(previousparentElement);
//         } else if (element === firstElement) {
//             focuseElement(document.body.lastElementChild);
//         }
//         else if (previousparentElement === null) {
//             let parent1 = element.parentElement;
//             focuseElement((parent1).parentElement.previousElementSibling);
//         }
//     }
//     if (direction === RIGHT) {
//         let lenghtNextElement = element.childElementCount;
//         let nextTag = element.nextElementSibling;
//         let nextparentElement = element.parentElement.nextElementSibling;
//         let endElement = document.body.lastElementChild;
//         console.log(element);
//         if (lenghtNextElement > 0) {
//             let nextChildre = element.children[0];
//             focuseElement(nextChildre);
//         } else if (nextTag) {
//             focuseElement(nextTag)
//         } else if (nextTag === null && nextparentElement) {
//             focuseElement(nextparentElement);
//         } else if (element === endElement) {
//             focuseElement(document.body.firstElementChild);
//         }
//         else if (nextparentElement === null) {
//             let parent1 = element.parentElement;
//             focuseElement((parent1).parentElement.nextElementSibling);

//         }
//     }
// }
// perrent
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
// let txt = document.createElement("textaria");
// txt.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quos, adipisci deleniti at, doloribus in laborum, eligendi rem enim placeat laudantium est? Suscipit ratione quam consectetur dolor praesentium quas nostrum.";
// document.body.appendChild(txt);

// txt.onmouseup = function () {
//     let newTxt = getSelection().toString();
//     this.innerHTML = this.innerText.replace(newTxt,`<b>${newTxt}</b>`)
// };