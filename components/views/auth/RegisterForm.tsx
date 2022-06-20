import { UserIcon, LockClosedIcon, MailIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import * as z from 'zod'

import { Button, Checkbox, Form, InputField } from '@/components/interactables'

const schema = z.object({
  username: z.string().min(1, 'Username is required'),
  email: z.string().email(),
  password: z.string().min(1, 'Password is required'),
  rePassword: z.string().min(1, 'Repeat password is required'),
  acceptPolicy: z.boolean().or(z.string()),
  rememberMe: z.boolean()
}).refine((data) => data.password === data.rePassword, {
  message: "Password don't match ",
  path: ['rePassword']
}).refine((data) => data.acceptPolicy, {
  message: "You must accept policy",
  path: ['acceptPolicy']
})

type RegisterDTO = {
  username: string,
  email: string,
  password: string,
  rePassword: string,
  acceptPolicy: string,
  rememberMe: boolean
}

export const RegisterForm = () => {
  return <div className="w-full">
    <Form<RegisterDTO, typeof schema>
      onSubmit={async (values: RegisterDTO) => {

      }}
      schema={schema}
    >
      {({ register, formState }) => (
        <>
          <InputField type="text" prefixIcon={<UserIcon className="w-5 h-5 fill-gray-400" />} registration={register('username')} error={formState.errors['username']} placeholder="Username" className='w-full' />
          <InputField type="email" prefixIcon={<MailIcon className="w-5 h-5 fill-gray-400" />} registration={register('email')} error={formState.errors['email']} placeholder="Email" className='w-full' />
          <div className='flex space-x-2'>
            <InputField type="password" prefixIcon={<LockClosedIcon className="w-5 h-5 fill-gray-400" />} registration={register('password')} error={formState.errors['password']} placeholder="Password" className='flex-1' />
            <InputField type="password" prefixIcon={<LockClosedIcon className="w-5 h-5 fill-gray-400" />} registration={register('rePassword')} error={formState.errors['rePassword']} placeholder="Password repeat" className='flex-1' />
          </div>

          <div className='flex justify-between'>
            <Checkbox id="remember-me" label='Remember me' registration={register('rememberMe')} labelClass='text-xs' />
            <Link href='/forgot-password'><span className='text-link text-white text-sm cursor-pointer underline'>I forgot my password</span></Link>
          </div>

          <div className='flex w-full justify-center'>
            <Checkbox id="acceptPolicy" label='I have read and accept all the rules' registration={register('acceptPolicy')} error={formState.errors['acceptPolicy']} labelClass='text-xs' />
          </div>

          <Button type="submit" className='w-full'>
            Register
          </Button>
          <div className='flex justify-center flex-col items-center'>
            <p className="text-gray-400 text-sm">
              Hey, do you already have an account? Sign in now!</p>
            <Link href='/auth/login'>
              <span className="text-white underline text-sm mt-2 ">Click and Login</span></Link>
          </div>
        </>
      )}
    </Form>
  </div>
}
