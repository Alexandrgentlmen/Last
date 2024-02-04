import { FieldHookConfig, useField, useFormikContext } from 'formik';

import { ClassAttributes, InputHTMLAttributes } from 'react';
import styles from './MyCheckbox.module.scss';

interface OtherProps {
  name: string;
}
export const MyCheckbox = ({
  name,
  children,
}: OtherProps &
  FieldHookConfig<string> &
  InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement>) => {
  const formik = useFormikContext();

  return (
    <>
      <label className={styles.MyCheckbox}>
        <input {...formik.getFieldProps(name)} type="checkbox" />
        {children}
      </label>
      {formik.getFieldMeta(name).touched && formik.getFieldMeta(name).error ? (
        <div className="error">{formik.getFieldMeta(name).error}</div>
      ) : null}
    </>
  );
};
