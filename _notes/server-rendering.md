---
title: Server Rendering
published: false
date: 2021-02-25
---

Here we are in 2021, and it would seem that we're back reconsidering a few
innovations made in the name of progress. Single page apps: bad! HTML-generating
frameworks: good! Server-rendered React: mostly good! Even [A List Apart] is
getting in on the fun.

One of the big-ticket items has been the [revamp of Turbolinks][Turbo] from the
Basecamp folks. In some ways, it's an extension of [the work][Turbograft]
Shopify did to make partial page updates possible in Turbolinks. Here are the
big ideas:

- **Hijack every link on the page.** Then, instead of using the regular browser
machinery, request the contents of that link, and swap out the contents of the
`<body>` element with the new page content. What this gets you is a speed-up of
- **Partially change parts of the page.** A progressive-enhancement that follows
  a link or button click to return a partial page update from the server and
  swap out the contents. It 

It's also impossible to mention anything like this on Hacker news without
someone bringing up [HTMX] (formerly [Intercooler.js]).


[Turbo]: https://turbo.hotwire.dev
[A List Apart]: https://alistapart.com/article/the-future-of-web-software-is-html-over-websockets/
[Turbograft]: https://github.com/Shopify/turbograft
[Intercooler.js]: https://intercoolerjs.org
[HTML includes]: https://github.com/whatwg/html/issues/2791
[htmx is hard to get right]: https://github.com/BookOfCooks/blog/blob/master/htmx-is-hard-so-lets-get-it-right.md

