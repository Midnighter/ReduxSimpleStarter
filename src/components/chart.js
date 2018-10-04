import React from 'react';
import {Sparklines, SparklinesLine,SparklinesReferenceLine} from 'react-sparklines';

export default ({data, color}) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={data}>
                <SparklinesLine color={color}/>
                <SparklinesReferenceLine type="mean"/>
            </Sparklines>
        </div>
    );
}