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

const Navbar = () => {
  return (
    <div>
      <TooltipComponent>
          <BsChatLeft />
          <MdKeyboardArrowDown />
          <AiOutlineMenu  />
          <RiNavigationLine />
          <FiShoppingCart/>
      </TooltipComponent>
    </div>
  )
}

export default Navbar