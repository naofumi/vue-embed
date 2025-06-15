// Define a component
// It needs to be mounted inside a Vue instance to be used.
// This will be available inside the instance scope as `<counter-button>`

const CounterButton = {
  template: `<button @click="count++">Clicked {{ count }} times</button>`,
  data() {
    return { count: 0 };
  }
};
