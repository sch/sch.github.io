---
title: Toy Implementations of Programming Concepts
published: false
---

Lots of novel programming ideas can be be hard to see. Production code has
concerns -- modularity, platform-specific branches, complication in the name of
performance -- that can often make it hard to see the elegance in an
implementation.

To better understand these concepts, we can reach for toy implementations:
distilling the essence of an algorithm or data structure for the sake of
learning.

A lot of foundational ideas have an elegance that's hard to capture any other
way. The most primordial of these is Lisp's evaluator: code that could fit,
hand written, on an index card that kickstarts all of Lisp. It's a kind of
punchline in Structure and Interpretation of Computer Programs, and the
inspiration for the socratic "little lisper" series. Willam Byrd had devoted his
academic career to understanding the implications of it.

The [mal (Make A Lisp) project][mal] shows incremental steps toward making
a more full-featured Lisp interpreter, and has dozens of ports into other
languages.

[mal]: https://github.com/kanaka/mal

Zack Radisic's [Write Your Own Zod] breaks down some very tricky Typescript
generics to allow for compile-time type safety and runtime validation of
Javascript values.

[Write Your Own Zod]: https://zackoverflow.dev/writing/write-your-own-zod)

Pavel Panchekha and Chris Harrelson boil down the high-density world of web
browsers into a digestible syrup in [Web Browser Engineering]. A complete dive
into layout, input handling, networking, Javascript evaluation in under ten
thousand lines of Python.

[Web Browser Engineering]: https://browser.engineering

Frederic Kettelhoit explores an inefficient but very clear [implementation of
Datalog][Datalog] in Javascript. See also: [miniKanren], a tiny library for
logic programming.

[Datalog]: https://github.com/fkettelhoit/bottom-up-datalog-js/blob/master/dl.js
[minikanren]: http://minikanren.org

Geoffrey Litt has [an implementation][micromerge] of automerge/hypermerge,
a library for conflict-free replicated data types, in under 1000 lines of
Typescript.

[micromerge]: https://github.com/inkandswitch/peritext/blob/main/src/micromerge.ts

miniAdapton ([paper](https://arxiv.org/pdf/1609.05337.pdf)) provides a one-page
implementation of incremental computing, a technique to memoize results with
mutable semantics.


