Vue.component('counter-button', {
  template: `
    <button @click="count++">
      Clicked {{ count }} times
    </button>
  `,
  data() {
    return {
      count: 0
    }
  }
});
