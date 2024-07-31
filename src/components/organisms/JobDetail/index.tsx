import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { PartyPopperIcon } from 'lucide-react';
import React, { FC } from 'react'

interface JobDetailProps {

}

const JobDetail: FC<JobDetailProps> = ({  }) => {
  return (
    <div>
      <div className='grid grid-cols-3 w-full gap-5'>

        { /* Left */}
        <div className='col-span-2 space-y-10'>
          { /* Description */ }
          <div>
            <div className='text-3xl font-semibold'>Description</div>
            <div className='text-gray-500 mt-4'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae massa semper, mollis quam nec, molestie dui. Vivamus nec nunc iaculis, mattis lorem sed, tempor sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum maximus vulputate felis, in tincidunt massa eleifend sit amet. Ut nec feugiat lacus. Nunc quis scelerisque libero. Mauris varius nisi eu sem dapibus tincidunt. Sed pulvinar consectetur nisl ut pharetra. Nam ut fringilla felis. Fusce gravida felis lectus, ut commodo nisi tempus vel. Sed a ultricies ipsum. Nunc scelerisque ex vestibulum nulla consectetur aliquet.</p>
            </div>
          </div>
          { /* Responsibilities */ }
          <div>
            <div className='text-3xl font-semibold'>Responsibilities</div>
            <div className='text-gray-500 mt-4'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae massa semper, mollis quam nec, molestie dui. Vivamus nec nunc iaculis, mattis lorem sed, tempor sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum maximus vulputate felis, in tincidunt massa eleifend sit amet. Ut nec feugiat lacus. Nunc quis scelerisque libero. Mauris varius nisi eu sem dapibus tincidunt. Sed pulvinar consectetur nisl ut pharetra. Nam ut fringilla felis. Fusce gravida felis lectus, ut commodo nisi tempus vel. Sed a ultricies ipsum. Nunc scelerisque ex vestibulum nulla consectetur aliquet.</p>
            </div>
          </div>
          { /* Who You Are */ }
          <div>
            <div className='text-3xl font-semibold'>Who You Are</div>
            <div className='text-gray-500 mt-4'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae massa semper, mollis quam nec, molestie dui. Vivamus nec nunc iaculis, mattis lorem sed, tempor sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum maximus vulputate felis, in tincidunt massa eleifend sit amet. Ut nec feugiat lacus. Nunc quis scelerisque libero. Mauris varius nisi eu sem dapibus tincidunt. Sed pulvinar consectetur nisl ut pharetra. Nam ut fringilla felis. Fusce gravida felis lectus, ut commodo nisi tempus vel. Sed a ultricies ipsum. Nunc scelerisque ex vestibulum nulla consectetur aliquet.</p>
            </div>
          </div>
          { /* Nice-To-Haves */ }
          <div>
            <div className='text-3xl font-semibold'>Nice-To-Haves</div>
            <div className='text-gray-500 mt-4'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae massa semper, mollis quam nec, molestie dui. Vivamus nec nunc iaculis, mattis lorem sed, tempor sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum maximus vulputate felis, in tincidunt massa eleifend sit amet. Ut nec feugiat lacus. Nunc quis scelerisque libero. Mauris varius nisi eu sem dapibus tincidunt. Sed pulvinar consectetur nisl ut pharetra. Nam ut fringilla felis. Fusce gravida felis lectus, ut commodo nisi tempus vel. Sed a ultricies ipsum. Nunc scelerisque ex vestibulum nulla consectetur aliquet.</p>
            </div>
          </div>
        </div>

        { /* Right */}
        <div>

          { /* About This Role */ }
          <div className='text-3xl font-semibold'>About This Role</div>
          <div className='shadow p-3 text-center my-6'>
            1 <span className='text-gray-500'>of 100</span>
            <Progress className='mt-3' value={10} />
          </div>

          { /* Apply Before */ }
          <div className='mb-10 space-y-5'>
            <div className='flex justify-between'>
              <div className='text-gray-500'>Apply Before</div>
              <div className='font-semibold'>12 Aug 2023</div>
            </div>
            <div className='flex justify-between'>
              <div className='text-gray-500'>Job Posted On</div>
              <div className='font-semibold'>12 Aug 2023</div>
            </div>
            <div className='flex justify-between'>
              <div className='text-gray-500'>Job Type</div>
              <div className='font-semibold'>Full-Time</div>
            </div>
            <div className='flex justify-between'>
              <div className='text-gray-500'>Salary</div>
              <div className='font-semibold'>$100 - $1000 USD</div>
            </div>
          </div>
          <Separator />

          { /* Category */ }
          <div className='my-10'>
            <div className='text-3xl font-semibold mb-4'>Categories</div>
            <div className='space-x-5'>
                <Badge>Design</Badge>
            </div>
          </div>
          <Separator />

          { /* Required Skills */ }
          <div className='my-10'>
            <div className='text-3xl font-semibold mb-4'>Required Skills</div>
            <div className='space-x-5'>
              {["HTML", "Javascript"].map((item: string, i: number) => (
                <Badge key={ i }>{ item }</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Separator className='my-8' />
      <div>
        <div className='text-3xl font-semibold'>Perks & Benefits</div>
        <div className='text-gray-500'>
          This job come with several perks and benefits
        </div>
        <div className='grid grid-cols-4 gap-5 mt-9'>
          {[0, 1, 2].map((item: number) => (
            <div key={ item }>
              <PartyPopperIcon className='w-10 h-10 text-primary mb-6 ' />
              <div className='text-lg font-semibold mb-3'>Full Healthcare</div>
              <div className='text-gray-500'>
                We believe in thriving communities and that starts with our team being happy and healthy.
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JobDetail;