import React from 'react';
import {BsCurrencyDollar} from 'react-icons/bs';
import {GoPrimitiveDot} from 'react-icons/go';

import { Stacked, Pie, Button, SparkLine } from '../../components';
import { earningData, SparklineAreaData } from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvide';

const Ecommerce = () => {

  const {activeMenu} = useStateContext();

  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$63,448.78</p>
            </div>
          </div>
          <div>
            <Button
              color='white'
              bgColor={'red'}
              text='Download'
              borderRadius={'5px'}
              size='lg'
              />
          </div>
          
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map(({icon, title, amount, iconColor, iconBg, percentage, pcColor}) => {
            return (
              <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-54 p-4 pt-9 rounded-2xl' key={title}>
                <button className='hover:drop-shadow-xl text-2xl opacity-0.9 rounded-full p-4' style={{color: iconColor, backgroundColor: iconBg}}>{icon}</button>
                <p className='mt-3'>
                  <span className='text-lg font-semibold'>{amount}</span>
                  <span className={`text-sm text-${pcColor} ml-2`}>{percentage}</span>
                </p>
                <p className='text-sm text-gray-400 mt-1'>
                  {title}
                </p>
              </div>
            )
          })}
        </div>
      </div> 
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:bg-secondary-dark-bg dark:text-gray-200 m-3 p-4 rounded-2xl md:w-780'>
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'>Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot /></span>
                <span>Expense</span>
              </p>
              <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
          <div className='border-r-1 border-color m-4 pr-10'>
            <div>
              <p>
                <span className='text-3xl font-semibold'>$423,098</span>
                <span className='p-1.5 hover:drop-shadow-xl bg-green-400 ml-3 text-white rounded-full'>23%</span>
              </p>
              <p className='text-gray-600 mt-1'>Budget</p>
            </div>
            <div className='mt-8'>
              <p>
                <span className='text-3xl font-semibold'>$23,098</span>
              </p>
              <p className='text-gray-600 mt-1'>Expense</p>
            </div>
            <div className='mt-5'>
              <SparkLine
                currentColor='blue'
                id='line-sparkline'
                type='Line'
                height='80px'
                width='250px'
                data={SparklineAreaData}
                color='blue'
              />
            </div>
            <div className='mt-10'>
              <Button 
                color='white'
                bgColor='blue'
                text='Download Report'
                borderRadius='10px'
              />
            </div>
          </div>
          <div>
            <Stacked 
              width="320px"
              height="360px"
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce