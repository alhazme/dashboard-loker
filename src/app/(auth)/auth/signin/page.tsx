"use client"

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { signInFormSchema } from '@/lib/form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Metadata } from 'next';
import Link from 'next/link';
import React, { FC } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface SignInPageProps {

}

const SignInPage: FC<SignInPageProps> = ({  }) => {

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {

    }
  })

  const onSubmit = (val: z.infer<typeof signInFormSchema>) => {
    console.log(val);
  }

  return (
    <div className='relative w-full h-screen'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='border border-border p-5'>
          <div className='font-semibold text-center text-2xl mb-2'>
            Login your account
          </div>
          <div className='text-sm text-gray-500'>
            Enter your email to access dashboard
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='mt-5 space-y-5'>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="email" placeholder="Enter Your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="password" placeholder="Enter Your password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className='w-full' size="lg">Sign In</Button>
              <div className='text-sm'>
                Don't have an account{" "}
                <Link href="/auth/signup" className='text-primary'>Sign Up</Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default SignInPage;