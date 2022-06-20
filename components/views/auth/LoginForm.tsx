import { LockClosedIcon, UserIcon } from '@heroicons/react/solid';
import Link from 'next/link'
import * as z from 'zod';

import { Button } from '@/components/interactables';
import { Checkbox, Form, InputField } from '@/components/interactables/Form';

const schema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
  rememberMe: z.boolean().optional(),
});

type LoginDTO = {
  username: string,
  password: string,
  rememberMe: boolean
}
export const LoginForm = () => {
  return <div className='w-full'>
    <Form<LoginDTO, typeof schema>
      onSubmit={async (values: LoginDTO) => {
      }}
      schema={schema}
    >
      {({ register, formState }) => (
        <>
          <InputField type="text" prefixIcon={<UserIcon className="w-5 h-5 fill-gray-400" />} registration={register('username')} error={formState.errors['username']} placeholder="Username" className='w-full' />
          <InputField type="password" prefixIcon={<LockClosedIcon className="w-5 h-5 fill-gray-400" />} registration={register('password')} error={formState.errors['password']} placeholder="Password" className='w-full' />
          <div className='flex justify-between'>
            <Checkbox id="remember-me" label='Remember me' registration={register('rememberMe')} labelClass='text-xs' />
            <Link href='/forgot-password'><span className='text-link text-white text-sm cursor-pointer underline'>I forgot my password</span></Link>
          </div>
          <Button type="submit" className='w-full'>
            Login
          </Button>
          <div className='flex justify-center flex-col items-center'>
            <p className="text-gray-400 text-sm">
              Hey, don&apos;t you have an account yet? Do not worry!</p>
            <Link href='/auth/login'>
              <span className="text-white underline text-sm mt-2">Click and Create</span></Link>
          </div>
        </>
      )}
    </Form>
  </div>
}
