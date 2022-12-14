import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from './contexts/ContextProvide';
import { 
  Footer, 
  Navbar, 
  Sidebar, 
  ThemeSettings,
  } from './components';

import { 
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Financial,
  Pie,
  ColorMapping,
  Editor,
  ColorPicker,
  Line,
 } from './pages';

import './App.css';

export const App = () => {

  const {activeMenu, setActiveMenu, screenSize} = useStateContext();


  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{zindex: '1000'}}>
            <TooltipComponent content='Settings' position='Top'>
                <button onClick={() => console.log('clicked')} type='button' className='text-3xl p-3 hover:drop-shadow-xl' style={{background: 'grey', borderRadius: '50%'}}>
                  <FiSettings />
                </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (<div className='w-72 fixed sidebar dark:bg-main-dark-bg bg-white'>
            <Sidebar />
          </div>) : (<div className='w-0 dark:bg-main-dark-bg'>
            <Sidebar /></div> )
             }
            <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
              <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg w-full'>
                <Navbar />
              </div>
             
             <div>
              <Routes>
                {/* Dashboard */}
                <Route path='/' element={<Ecommerce />} />
                <Route path='/ecommerce' element={<Ecommerce />} />

                {/* Pages */}
                <Route path='/orders' element={<Orders />} />
                <Route path='/employees' element={<Employees />} />
                <Route path='/customers' element={<Customers />} />

                {/* Apps */}
                <Route path='/kanban' element={<Kanban />} />
                <Route path='/editor' element={<Editor />} />
                <Route path='/calandar' element={<Calendar />} />
                <Route path='/color-picker' element={<ColorPicker />} />

                {/* Charts */}
                <Route path='/line' element={<Line />} />
                <Route path='/area' element={<Area />} />
                <Route path='/bar' element={<Bar />} />
                <Route path='/pie' element={<Pie />} />
                <Route path='/finacial' element={<Financial />} />
                <Route path='/color-mapping' element={<ColorMapping />} />
                <Route path='/pyramid' element={<Pyramid />} />
                <Route path='/stacked' element={<Stacked />} />
              </Routes>
             </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}


export default App;
