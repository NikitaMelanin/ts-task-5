/** Задача 1
 * Реализовать декоратор, используя встроенную поддержку декораторов в TypeScript,
 * который будет реагировать на присвоение в поле email значения.
 * Когда присваивается корректный e-mail в консоль выводится сообщение email valid.
 * Когда присваивается некорректный e-mail возбуждается ошибка.
 */
 function Validator(target: object, key: string) {

    let email: string;
    const regExp = /(\w+|\w+\W\w+)@\w+\.(ru|com)/;

    Object.defineProperty(target, key, {
        get: () => email,
        set: (value: string) => {            
            if (regExp.test(value)) {
                console.log("Email valid");
                email = value;
            } else {
                throw new Error("Incorrect email.");
            }
        }
    });
}
class Example {
    @Validator
    public email: string;
}

let exampleInstance = new Example();
exampleInstance.email = "fkkldfjg"; // генерирует эксепшен
exampleInstance.email = "misha@mail.ru"; // выводит в консоль e-mail valid