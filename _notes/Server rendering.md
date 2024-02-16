---
---

The web has traditionally been server-rendered pages: a server sends out HTML for a specific URL, the browser refreshes the page, starting at the top with a new document.

[ViewComponent] is GitHub’s component-style view framework for server rendering.

[ViewComponent]: https://viewcomponent.org/

## Counterarguments

A large argument in favor of single-page apps has been around controlling the transitions between pages. Apps set the expectation that these transitions could be animated, or at least avoid a “flash of white” when going to a new page. The [View Transition API] and [paint holding] allow you to do the same thing without resorting to a single-page app.

[View Transition API]: https://developer.chrome.com/docs/web-platform/view-transitions/
[paint holding]: https://developer.chrome.com/blog/paint-holding
