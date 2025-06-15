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

### V-cloak

The really cool thing is that Vue can use the HTML already on the page as the template for the client rendered DOM.
You don't have to rewrite your HTML into something like JSX.
You can just use the HTML you have on your screen, add some Vue specific attributes and `{{ ... }}` placeholders, and Vue will pick it up from there.
It will take that template, add in dynamic content, and render the page.

Note that to prevent the `{{ ... }}` from ever showing up on the screen before Vue is loaded
(which will cause flickering),
you can use the `v-cloak` attribute to hide elements until Vue has loaded.

### Components

You can use components with embedded Vue.
You simply load the component before you create the Vue instance.
With Vue 3,
you have to register the component with the Vue instance
because the component will be local to the element on which the app was mounted.

You can see that these components look very similar to web components.

### Bundling

If you just want to embed Vue into your MPA page, you don’t need any bundling.
You don't need any transpiling either.
You can just load the JavaScript that you wrote.

### Initialization

Initialization requires creating a new Vue instance and mounting it on the DOM.
This is just like React.
However, Vue instances seem to be much more lightweight than React, so you can efficiently add a lot of these instances to your website.

### Dynamic initialization

Unfortunately, Vue can’t dynamically add components after the Vue instance has been created.
If you load some HTML-containing components (for example, with AJAX), then you have to create a new Vue instance to initialize it.

If I were to use it with Hotwire, I would probably mount the Vue instance using Stimulus to ensure that newly loaded HTML fragments are correctly bound to the DOM.

### Impressions

It is clear that embedding without bundling is where Vue shines and provides a much better experience than React.
Doing this in React is possible, but you can’t use JSX, which is a big setback.

I guess this is why Vue became popular, especially among web designers who know JavaScript but aren’t interested in complex setups and rewriting their HTML in JSX.
The Vue slogans like "the progressive framework" make much more sense when you see it as an embedding-first library.
