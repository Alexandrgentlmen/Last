import { Form, Formik } from 'formik';
import * as yup from 'yup';
import classnames from 'classnames';

import { Link } from 'react-router-dom';
import styles from './SignUp.module.scss';
import { MyCheckbox } from '~/auth/components/my-checkbox';
import { MyTextInput } from '~/auth/components/my-textinput';
import { routes } from '~/router';
import { useRedirect } from '~/auth/hooks/useRedirect';
import { authSlice } from '~/auth/store/authSlice';
import { useAppDispatch } from '~/store/hooks';

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
    .oneOf([true], 'Подтвердите правильность данных.'),
});

export function SignUp() {
  const dispatch = useAppDispatch();
  useRedirect();
  return (
    <div className={styles.SignUp}>
      <h3>Введите email и пароль</h3>
      <Formik<IInitialValues>
        {...{
          initialValues,
          enableReinitialize: true,
          validationSchema,
          onSubmit: (values) => {
            dispatch(
              authSlice.thunks.authLoginThunk({
                authPayload: values,
              }),
            );
          },
        }}
      >
        <Form noValidate autoComplete={'off'}>
          <MyTextInput
            label="Email"
            name="email"
            type="email"
            placeholder="email@gmail.ru"
          />
          <MyTextInput
            label="Password"
            name="password"
            type="password"
            placeholder="password"
          />
          <MyCheckbox name="acceptedTerms">
            Я подтверждаю ввёдённые данные
          </MyCheckbox>

          <button className={'submitBtnFormik'} type="submit">
            Войти
          </button>
          <p className={'centred'}>
            Нет аккаунта?
            <Link className={'button-registration'} to={routes.REGISTER_PAGE}>
              &nbsp;Зарегистрироваться
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
}
