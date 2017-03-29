import React from 'react';
import {Sparklines, SparklinesLine } from 'react-sparklines';

export default props => {
  return (
    <div>
    <Sparklines height={50} width={50} data={props.data}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines >
    </div>
  )
}
