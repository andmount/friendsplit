import React from 'react';
import InformationTable from './InformationTable';
import ResultOfSplitting from './ResultOfSplitting';

function CalculationArea(props) {
  return (
    <div className="calculationarea">
      <InformationTable friends={props.friends} event={props.event} />
      <ResultOfSplitting friends={props.friends} />
    </div>
  );
}

export default CalculationArea;