import React from 'react';
import { ColumnsDirective, ColumnDirective, ContextMenu, GridComponent, Resize, Sort, Page, Filter, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../../data/dummy';
import { Header } from '../../components';

const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title='Orders' category='Page' />
      <GridComponent id='gridcomp' dataSource={ordersData}>
        <ColumnsDirective>
          {ordersGrid.map((item, index) => {
            console.log(item)
            return (
              <ColumnDirective key={index} {...item} />
            )
          })}
        </ColumnsDirective>
      </GridComponent>
    </div>
  )
}

export default Orders