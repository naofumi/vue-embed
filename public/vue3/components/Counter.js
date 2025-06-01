// Define a component
const CounterButton = {
  template: `<button @click="count++">Clicked {{ count }} times</button>`,
  data() {
    return { count: 0 };
  }
};
