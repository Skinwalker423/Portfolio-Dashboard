import React from 'react';
import {BsCurrencyDollar} from 'react-icons/bs';
import {GoPrimitiveDot} from 'react-icons/go';

import { Stacked, Pie, Button, Sparkline } from '../../components';
import { earningData, SparklineAreaData } from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvide';

const Ecommerce = () => {

  const {activeMenu} = useStateContext();

  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-90 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
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

        

      </div>
      <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => {
            return (
              <div>
                {item.icon}
                <h3>{item.title}</h3>
                <p>{item.amount}</p>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Ecommerce