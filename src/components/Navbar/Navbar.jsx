import React, {useEffect} from 'react';
import {AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNavigationLine } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../../data/avatar.jpg';
import {Cart, Chat, Notification, UserProfile} from '../../components';

import { useStateContext } from '../../contexts/ContextProvide';

const NavButton = ({title, customFunc, icon, color}) => {
  return (
    <TooltipComponent content={title} position='BottomCenter'>
      <buton className='relative text-xl rounded-full p-3 hover:bg-light-gray' type="button" style={{color}} onClick={customFunc}>{icon}</buton>
    </TooltipComponent>
  )
}

const Navbar = () => {

  const {activeMenu, setActiveMenu} = useStateContext();

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton
        title={'ChatLeft'}
        customFunc={() => setActiveMenu(!activeMenu)}
        icon={<BsChatLeft />}
        color='blue'
       />
      <NavButton
        title={'Menu'}
        customFunc={() => setActiveMenu(!activeMenu)}
        icon={<AiOutlineMenu  />}
        color='grey'
       />
      <NavButton
        title={'ChatLeft'}
        customFunc={() => setActiveMenu(!activeMenu)}
        icon={<BsChatLeft />}
        color='blue'
       />
      <NavButton
        title={'ChatLeft'}
        customFunc={() => setActiveMenu(!activeMenu)}
        icon={<BsChatLeft />}
        color='blue'
       />
      <NavButton
        title={'ChatLeft'}
        customFunc={() => setActiveMenu(!activeMenu)}
        icon={<BsChatLeft />}
        color='blue'
       />
      <NavButton
        title={'ChatLeft'}
        customFunc={() => setActiveMenu(!activeMenu)}
        icon={<BsChatLeft />}
        color='blue'
       />
      <NavButton
        title={'ChatLeft'}
        customFunc={() => setActiveMenu(!activeMenu)}
        icon={<BsChatLeft />}
        color='blue'
       />
      
    </div>
  )
}

export default Navbar