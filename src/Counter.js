import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function Counter() {
    const n = useSelector(y => y.counter);
    const dis = useDispatch();
    const inc = () => {
        dis({type:"INCREMENT_ASYNC"})
    }
    const dec = () => {
        dis({type :"DECREMENT_ASYNC"})
    }
    return (
        <div>{n}
           <button onClick={inc}>+</button>
           <button onClick={dec}>-</button>

        </div>
    )
}
