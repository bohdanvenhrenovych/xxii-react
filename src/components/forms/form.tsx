import type {
  DetailedHTMLProps,
  FormHTMLAttributes,
  PropsWithChildren,
} from 'react'
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form'

interface FormProps<FormValues extends FieldValues> {
  formMethods: UseFormReturn<FormValues>
  onSubmit?: SubmitHandler<FormValues>
}

export function Form<FormValues extends FieldValues>({
  children,
  onSubmit,
  formMethods,
  ...rest
}: PropsWithChildren<
  FormProps<FormValues> &
    Omit<
      DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
      'onSubmit'
    >
>) {
  return (
    <FormProvider<FormValues> {...formMethods}>
      <form
        {...rest}
        noValidate
        onSubmit={
          onSubmit
            ? e => {
                void formMethods.handleSubmit(onSubmit)(e)
              }
            : undefined
        }
        onReset={() => formMethods.reset()}
      >
        {children}
      </form>
    </FormProvider>
  )
}
