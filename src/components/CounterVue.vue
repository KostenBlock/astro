<template>
  <div>
    <h1>Vue</h1>
    <div>
      <h3>Counter</h3>
      <p>{{ count.value }}</p>
      <button @click="decreaseCounter">-1</button>
      <button @click="() => increaseCounter({value: 1})">+1</button>
    </div>
    <br />
  </div>
</template>

<script>
import { useStore } from '@nanostores/vue';

import { counter, increaseCounter, decreaseCounter } from '../store/counter.js';

export default {
  setup() {
    const count = useStore(counter);

    return { count, increaseCounter, decreaseCounter };
  },
};
</script>
