import * as yup from 'yup';

const URL_REGEX =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

const forbiddenWords = [
  'хуй',
  'xyй',
  'пісюн',
  'писюн',
  'срака',
  'пізда',
  'пизда',
  'лох',
  'л0х',
  'курва',
  'сука',
  'cуka',
  'блядь',
  'тварюка',
  'падлюка',
];

const WORDS_REGEX = new RegExp(`${forbiddenWords.join('|')}`, 'gi');

export const schema = yup
  .object({
    title: yup
      .string('Має бути текстовим')
      .trim()
      .min(3, 'Довжина має бути більше 3 символів')
      .max(10, 'Довжина має бути не більше 10 символів')
      .test(
        'test contain forbidden words',
        'Заборонені слова',
        value => !WORDS_REGEX.test(value)
      )
      .required('Обов`язкове поле'),
    description: yup
      .string('Має бути текстовим')
      .trim()
      .min(3, 'Довжина має бути більше 3 символів')
      .test(
        'test contain url',
        'Забороняються посилання на інші сайти',
        value => !URL_REGEX.test(value)
      )
      .max(100, 'Довжина має бути не більше 100 символів')
      .test(
        'test contain forbidden words',
        'Заборонені слова',
        value => !WORDS_REGEX.test(value)
      )
      .required('Обов`язкове поле'),
    cost: yup
      .number()
      .positive('Має бути додатнє число')
      .integer('Має бути ціле число')
      .typeError('Має бути ціле число')
      .required('Обов`язкове поле'),
    contact: yup
      .string('Має бути текстовим')
      .trim()
      .min(5, 'Довжина має бути більше 5 символів')
      .max(10, 'Довжина має бути не більше 10 символів')
      .required('Обов`язкове поле'),
    // photo: {},
  })
  .required();
