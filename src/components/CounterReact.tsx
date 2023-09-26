import * as React from 'react';
import { useStore } from '@nanostores/react';
import { counter, increaseCounter, decreaseCounter } from '../store/counter.js';

export default function CounterReact () {
    const count = useStore(counter);

    return (
        <div>
            <span>{count.value}</span>
            <img src={"https://image.1dogma.ru/httpsdogmaparkruimageshomepageheadsection1mjpg/w600.webp"}
                 alt="img"
                 style={{width: 200, height: 200, objectFit: 'cover'}}/>
            <button onClick={decreaseCounter}>-1</button>
            <button onClick={() => increaseCounter({ value: 1 })}>+1</button>
        </div>
    )
}
