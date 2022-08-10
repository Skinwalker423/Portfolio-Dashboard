import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip, Sparkline } from '@syncfusion/ej2-react-charts';

const SparkLineChart = ({currentColor, data, color, width, height, type, id }) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      LineWidth={1}
      valueType='Numeric'
      fill={color}
      border={{color: currentColor, width: 2}}
    >

    </SparklineComponent>
  )
}

export default SparkLineChart