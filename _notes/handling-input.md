---
title: Handling input
published: false
---

Every operating system needs to handle user input. Handling user input also
provides the opportunity to block the most important thread of execution in
a lot of systems.

[Patrick Dubroy] sums up a few approaches:

- event handling (DOM event listeners, Cocoa responders)
- polling (game engines, what your framework is doing under the hood)
- communicating sequential processes


[Patrick Dubroy]: https://dubroy.com/blog/three-ways-of-handling-user-input/
[his follow up]: https://dubroy.com/blog/handling-user-input-with-structured-concurrency/

