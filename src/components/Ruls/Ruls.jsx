import { RulsWrp, ExampleStyled } from './Ruls.styled';

export const Ruls = () => {
  return (
    <RulsWrp>
      <h3>Основні правила для користувача каналу "Купи/продай"</h3>
      <ol>
        <li>
          Канал дозволяє розміщення оголошень про купівлю/продаж різних товарів
          в Україні які передбачені законом.
        </li>
        <li>
          Всі оголошення повинні містити достовірну інформацію, яка відповідає
          дійсному стану товару.
        </li>
        <li>
          Заборонено розміщення оголошення що протирічать законодавству або
          моральним нормам.
        </li>
        <li>
          Заборонено публікувати оголошення, що містять образливу або неналежну
          мову, а також контент, що порушує авторські права.
        </li>
        <li>
          Адміністрація каналу має право видаляти оголошення/бан користувача
          якщо вони не відповідають правилам або порушують інтереси користувачів
          (зброя, наркотики, порнографія, посилання на інші ресурси)
        </li>
        <li>
          Повідомлення про шахрайство: Якщо ви помітили підозрілу діяльність або
          шахрайство, повідомте адміністрацію каналу негайно.
        </li>
        <li>
          Одне оголошення на один товар. Заборонено дублювати оголошення для
          одного товару. Розміщення одного оголошення дозволено 1 раз на 12
          годин.
        </li>
        <li>
          Заборона рекламних оголошень. Канал призначений для особистих угод між
          користувачами. Рекламні оголошення та пропозиції бізнесів заборонені.
        </li>
        <li>
          Заборона спаму. Заборонено надсилати небажану пошту або повідомлення
          іншим користувачам, що не стосуються конкретних оголошень.
        </li>
        <li>
          Адміністрація каналу не несе відповідальності щодо чесності
          продавця/покупця
        </li>
      </ol>

      <h3>
        Правила розміщення оголошень на каналі "Купи | Продай |Україна 🇺🇦"
      </h3>
      <ul>
        <li>
          Коректне форматування. Оголошення повинні бути написані чітко та
          лаконічно. Використовуйте заголовки, пункти, нумерацію для кращої
          читабельності.
        </li>
        <ExampleStyled>
          <h3>Приклад</h3>
          <li>
            <b>Заголовок:</b> Продам Iphone 12, 64 ГБ.
          </li>
          <li>
            <b>Опис товару:</b> Вказати основні характеристики, стан,
            комплектацію. Якщо є можливість торгу, зазначте це.
          </li>
          <li>
            <b>Вартість:</b> Укажіть ціну товару.
          </li>
          <b>Контактна інформація:</b> Номер телефону або телеграм для зв'язку з
          вами.
          <li>
            <b>Фото:</b> Додайте до 5 шт з різних кутів. Не більше 10мб кожна.
          </li>
        </ExampleStyled>
      </ul>
    </RulsWrp>
  );
};
