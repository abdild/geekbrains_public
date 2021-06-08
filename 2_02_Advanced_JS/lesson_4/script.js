// 1. Дан большой текст, в котором для оформления прямой речи используются одинарные кавычки.
// Придумать шаблон, который заменяет одинарные кавычки на двойные.
// Выполнено
// 2. Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на двойную.
// 3. *Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить.
// При нажатии на кнопку Отправить произвести валидацию полей следующим образом:
// a. Имя содержит только буквы.
// b. Телефон имеет вид +7(000)000-0000.
// c. E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.
// d. Текст произвольный.
// e. Если одно из полей не прошло валидацию, необходимо выделить это поле красной рамкой и сообщить пользователю об ошибке.


window.onload = () => {
    // 1. Дан большой текст, в котором для оформления прямой речи используются одинарные кавычки.
    // Придумать шаблон, который заменяет одинарные кавычки на двойные.
    const text = "Мама сказала: 'Вымой руки и садись за стол'";
    console.log(text);
    const regExp = /\'/g;
    const textNew = text.replace(regExp, '\"');
    console.log(textNew);

    // 2. Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на двойную.
    const text2 = "Mom said 'Wash your hands, sit down at the table and don't talk'";
    console.log(text2);

    // Вариант 1
    const regExp2 = /\b\"\b/g;
    const textNew2 = text2.replace(regExp, '\"').replace(regExp2, '\'');
    console.log(textNew2);

    // Вариант 2
    const regExp3 = /\b\'\B|\B\'\b/g;
    const textNew3 = text2.replace(regExp3, '\"');
    console.log(textNew3);

    // 3. *Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить.
    // При нажатии на кнопку Отправить произвести валидацию полей.
    const formName = document.querySelector('#formName');
    const formPhone = document.querySelector('.form-phone');
    const formEmail = document.querySelector('.form-email');
    const formText = document.querySelector('.form-text');

    const submitButton = document.querySelector('.form-submit');
    submitButton.addEventListener('click', (event) => {

        const regExpName = /^[a-zа-я ]+$/gi;
        const regExpPhone = /^\+7\(\d{3}\)\d{3}-\d{4}$/g;
        const regEmail = /^[a-z.-]+@mail.ru$/gi;

        // Check Name
        if (formName.value) {
            if (!regExpName.test(formName.value)) {
                formName.value = '';
                formName.classList.toggle('error', true);
                formName.placeholder = 'Должны быть только буквы';
            } else {
                formName.classList.toggle('error', false);
            }
        } else {
            formName.classList.toggle('error', true);
            formName.placeholder = 'Введите имя';
        }

        // Check Phone
        if (formPhone.value) {
            if (!regExpPhone.test(formPhone.value)) {
                formPhone.value = '';
                formPhone.classList.toggle('error', true);
                formPhone.placeholder = 'Формат +7(000)000-0000';
            } else {
                formPhone.classList.toggle('error', false);
            }
        } else {
            formPhone.classList.toggle('error', true);
            formPhone.placeholder = 'Введите телефон';
        }

        // Check Email
        if (formEmail.value) {
            if (!regEmail.test(formEmail.value)) {
                formEmail.value = '';
                formEmail.classList.toggle('error', true);
                formEmail.placeholder = 'Неправильный формат';
            } else {
                formEmail.classList.toggle('error', false);
            }
        } else {
            formEmail.classList.toggle('error', true);
            formEmail.placeholder = 'Введите email';
        }

        // Check Text
        if (formText.value) {
            formText.classList.toggle('error', false);
        } else {
            formText.classList.toggle('error', true);
            formText.placeholder = 'Введите текст';
        }

    });
}