import { FieldHookConfig, useField } from 'formik';
import { ClassAttributes, InputHTMLAttributes, ReactNode } from 'react';
import styles from './MyTextInput.module.scss';

interface OtherProps {
  children?: ReactNode;
  label: string;
}
export const MyTextInput = ({
  ...props
}: OtherProps &
  FieldHookConfig<string> &
  InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement>) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <input className={styles.textInput} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </>
  );
};
