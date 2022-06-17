import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | 'email' | 'password' | 'checkbox';
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
  placeholder?: string;
};

export const InputField = (props: InputFieldProps) => {
  const { type = 'text', label, className, registration, error, placeholder, ...rest } = props;
  return (
    <FieldWrapper label={label} error={error} {...rest}>
      <input
        type={type}
        className={clsx(
          'appearance-none border border-solid border-transparent block w-full pl-10 pr-3 py-2 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ultramarine focus:border-ultramarine sm:text-sm bg-metal text-white',
          className)}
        {...registration}
        placeholder={placeholder ? placeholder : ''}
      />
    </FieldWrapper>
  );
};
