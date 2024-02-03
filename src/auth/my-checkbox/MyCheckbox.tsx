import { FieldHookConfig, useField } from 'formik';

import { ClassAttributes, InputHTMLAttributes } from 'react';
import styles from './MyCheckbox.module.scss';

interface OtherProps {
  label: string;
}
export const MyCheckbox = ({
  children,
  ...props
}: OtherProps &
  FieldHookConfig<string> &
  InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement>) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <label className={styles.MyCheckbox}>
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
