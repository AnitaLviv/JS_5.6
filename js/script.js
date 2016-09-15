var array = [];
for(var i = 0; i < 5; i++) {
    var name = prompt('Введите имя', '');
    array.push(name);
}

var userSearch = prompt('Укажите свое имя','');
var flag = false;

for(var i = 0; i < array.length; i++) {
    if (array[i] === userSearch) {
        flag = true;
    }
}


if(flag) {
    alert( userSearch + ' ' +  'Вы успешно вошли');
}else {
    alert('Ошибка');
}

