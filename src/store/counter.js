import { atom } from 'nanostores';

const initialValue = { value: 0 };

const counter = atom(initialValue);

function increaseCounter(payload) {
    for (const key in counter.value) {
            if (Object.hasOwnProperty.call(payload, key) && Object.hasOwnProperty.call(counter.value, key)) {
                counter.set({ value: counter.get().value + 1 });
            }
        }
}

function decreaseCounter() {
    counter.set({ value: counter.get().value - 1 });
}

export { counter, increaseCounter, decreaseCounter };

// setState: (state, action) => {
//     try {
//         const valueArg = action.payload;
//         for (const key in valueArg) {
//             if (Object.hasOwnProperty.call(valueArg, key) && Object.hasOwnProperty.call(state, key)) {
//                 state[key] = valueArg[key];
//             }
//         }
//     } catch (error) {
//         console.error(error);
//     }
// },
