import { FieldHookConfig, useFormikContext } from 'formik';
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
  const formik = useFormikContext();

  return (
    <>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <input
        className={styles.textInput}
        {...formik.getFieldProps(props.name)}
        {...props}
      />
      {formik.getFieldMeta(props.name).touched &&
      formik.getFieldMeta(props.name).error ? (
        <div className="error">{formik.getFieldMeta(props.name).error}</div>
      ) : null}
    </>
  );
};
