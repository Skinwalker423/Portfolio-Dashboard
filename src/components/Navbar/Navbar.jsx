import React, {useEffect} from 'react';
import {AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { BiSearch } from 'react-icons/bi';

import avatar from '../../data/avatar.jpg';
import {Cart, Chat, Notification, UserProfile} from '../../components';

import { useStateContext } from '../../contexts/ContextProvide';

const NavButton = ({title, customFunc, icon, color, dotColor}) => {
  return (
    <TooltipComponent content={title} position='BottomCenter'>
      <buton className='relative text-xl rounded-full p-3 hover:bg-light-gray' type="button" style={{color}} onClick={customFunc}>
        <span style={{background: dotColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'>{icon}</span>
      </buton>
    </TooltipComponent>
  )
}

const Navbar = () => {

  const {activeMenu, setActiveMenu, isClicked, setIsClicked, handleClicked} = useStateContext();


  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <div className='flex'>
        <NavButton
        title={'Menu'}
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        icon={<AiOutlineMenu  />}
        color={activeMenu ? 'blue' : 'gray'}
       />
        <NavButton
        title={'Search'}
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        icon={<BiSearch  />}
        color={'gray'}
       />
      </div>

      <div className='flex'>
      <NavButton
        title={'Chat'}
        customFunc={() => handleClicked('chat')}
        icon={<BsChatLeft />}
        color='blue'
        dotColor='#03C907'
       />
      
      <NavButton
        title={'Cart'}
        dotColor='#03C907'
        customFunc={() => handleClicked('cart')}
        icon={<FiShoppingCart />}
        color='red'
       />
      <NavButton
        title={'Notification'}
        customFunc={() => handleClicked('notification')}
        icon={<RiNotification3Line />}
        color='blue'
       />
      <TooltipComponent content={'Profile'} position='BottomCenter'>
        <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'>
          <img className='rounded-full w-8 h-8' src={avatar} alt={'avatar'} />
          <p>
            <span className='text-gray-400 text-14'>Hi, </span> {'  '}
            <span className='text-gray-400 font-bold ml-1 text-14'>Michael </span>
          </p>
          <MdKeyboardArrowDown onClick={() => handleClicked('userProfile')} className='text-gray-400 text-14' />
        </div>
      </TooltipComponent>
      {isClicked.cart && <Cart />}
      {isClicked.chat && <Chat />}
      {isClicked.notification && <Notification />}
      {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar