# Vue Embedded

At this point in time,
Vue has adopted so many features of React
that it is challenging to understand what was so original about Vue and why it became so popular.

I think going back to the origins is the best way to understand this.

Vue was originally marketed as a better jQuery and emphasized embedding Vue inside your MPA application.
We should try this out.

## Notes

### Vue versions

We use Vue 2 and Vue 3. 
Vue 2 makes it slightly easier to use embeddings, 
and so this is a reminder of how it was when Vue was originally considered to be much easier than React.

### The template

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
