# Vue Embedded

Today it is hard to distinguish the differences between what React and Vue try to achieve.
Their scopes seem very similar.

However, if you look at the Vue2 docs, they tell a very different story.

The [Vue2 guide](https://v2.vuejs.org/v2/guide/#Getting-Started) starts off with loading Vue from a CDN and creating a Vue component.
You don't even need a build!

I think this even today, this is an interesting approach that is worth a deeper look.
I believe there are cases where this could be a significantly better approach than an SPA. 

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>

<div id="app">
  {{ message }}
</div>

<script>
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })
</script>
```

## Setup

1. Download the repository.
2. Inside the project root directory, run `npm install`. This installs a static web server called "http-server".
3. Run `npm run server` and access the site at http://127.0.0.1:8080.

## Demo

This application is deployed on Vercel. Please go and take a look.

[vue-embed.vercel.app](https://vue-embed.vercel.app)

## Notes

This site consists of three applications built using Vue2, Vue3, and Preact respectively.

All of these applications embed components in static HTML.

### Vue versions

Vue2 makes it slightly easier to use embeddings
and is a reminder of how it was when Vue was originally considered to be more approachable than React.

One big feature is that Vue uses the static HTML as the template for the Vue component.
This is very different from React where you use a JSX template that is completely independent of the static HTML.

Vue3 makes embedding a bit harder, but the benefit of using the HTML as a template is still present.

### Preact version

I’ve also included a Preact version for comparison.
Preact is often considered a good alternative to React for embedding, especially if you want to avoid builds.

Preact provides the `h()` function instead of JSX.
It is good, but is nowhere near as convenient as the way Vue uses the static HTML already on the page.
