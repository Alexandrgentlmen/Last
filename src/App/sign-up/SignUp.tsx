import { Form, useFormik } from 'formik';
import * as yup from 'yup';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.scss';
import { MyCheckbox } from '~/auth/my-checkbox';
import { MyTextInput } from '~/auth/my-textinput';
import { routes } from '~/router';

interface IInitialValues {
  email: string;
  password: string;
  acceptedTerms: boolean;
}

const initialValues: IInitialValues = {
  email: 'xman@mail.ru',
  password: 'p@ssw0rd',
  acceptedTerms: false,
};

const validationSchema: yup.ObjectSchema<IInitialValues> = yup.object({
  email: yup
    .string()
    .required('Обязательное поле')
    .email('Не валидная почта, введите правильную почту'),
  password: yup
    .string()
    .required('Обязательное поле')
    .min(8, 'Пароль должен содержать минимум 8 символов'),
  acceptedTerms: yup
    .boolean()
    .required('Обязательное поле')
    .oneOf([true], 'Подтверждаю правильность данных.'),
});

const formik = useFormik<IInitialValues>({
  initialValues,
  validationSchema,
  onSubmit: (values) => {
    alert(JSON.stringify(values, null, 2));
  },
});

export function SignUp() {
  return (
    <div className={styles.SignUp}>
      <h1>Введите данные при регистрации</h1>

      <Form onSubmit={formik.handleSubmit} noValidate autoComplete={'off'}>
        <MyTextInput
          label="Password"
          name="password"
          type="password"
          placeholder="password"
        />
        <MyTextInput
          label="Email"
          name="email"
          type="email"
          placeholder="email@gmail.ru"
        />
        <MyCheckbox name="acceptedTerms">
          Я подтверждаю ввёдённые данные
        </MyCheckbox>

        <button className={'submitBtnFormik'} type="submit">
          Войти
        </button>
        <button>
          Нет аккаунта?
          <Link to={routes.REGISTER_PAGE}>Зарегистрироваться</Link>
        </button>
      </Form>
    </div>
  );
}
