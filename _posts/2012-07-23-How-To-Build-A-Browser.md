---
title: How To Build A Browser
---

Honest question: how much engineering talent and how many raw hours would it take to build a web browser to today's spec?

Setting aside for a moment that that spec is still in [a tug-of-war](http://lists.w3.org/Archives/Public/public-whatwg-archive/2012Jul/0119.html) between its parents, the [W3C](http://www.w3.org/) and the [WHATWG](http://www.whatwg.org/). I'd like you to go to the table of contents for the living standard of what HTML should be [here](http://www.whatwg.org/specs/web-apps/current-work/multipage/), and just give it a quick scroll. Especially if you are on a touch-screen and have that fancy momentum-scroll, do that thing where you slide your finger up and down really fast to whip though the document. There's a lot there.

My point is, if you were to get up out of bed today and decide that it was time to create your own web browser, could you really do it? What would it take? Would you leverage [existing](http://www.webkit.org/) [rendering](https://developer.mozilla.org/en/Gecko) [engines](http://en.wikipedia.org/wiki/Presto_(layout_engine))? What algorithms and workarounds would you use to make your (non-strict) HTML parser? What kind of rich media would you support, and in what formats?

Assuming you completing just that gargantuan engineering task, what would you do to set yourself apart [from the giants](http://en.wikipedia.org/wiki/Browser_wars)?

## A Note On Web Components

I got onto this line of thinking while trying to write an article about [Web Components](http://dvcs.w3.org/hg/webcomponents/raw-file/tip/explainer/index.html). Perhaps you've seen the [Google I/O session](http://www.youtube.com/watch?v=2txPYQOWBtg) about 'em. With a combination of DOM encapsulation through defining custom elements as templates with scoped styles and shadow DOM subtrees with element insertion points(phew!), some very smart people at Google are hoping to usher in a declarative renaissance: handfuls of developers will make little custom widgets, and anyone who can write HTML can use them. The better ones will grow to be widely used, and may eventually be folded into the spec.

That "folding into the spec" part is what has me worried though. We've had the smartest men and women in the world at task trying to make the web better for twenty years now: they are the people in the web standards bodies mentioned before. They've kicked around custom elements and XML-like encapsulations for years. The only difference here is that it's Google who writing, and more importantly, implementing the current living standards of the web. Chrome has recently become [the world's leading browser](http://gs.statcounter.com/#browser-ww-weekly-201121-201221). And as Mark Pilgrim notes in a [brief history of HTML](http://diveintohtml5.info/past.html):

> But none of this answers the original question: why do we have an <img> element? Why not an <icon> element? Or an <include> element? Why not a hyperlink with an include attribute, or some combination of rel values? Why an <img> element? Quite simply, because Marc Andreessen shipped one, and shipping code wins.

This was in _1993_. Those were the days of one-man-browser-implementers, where one person could ship code and change the landscape. One smart person, sure, but it was manageable.

## What Else We're Folding In

In the next six months, we can expect to see a wealth of new standards in [Web Intents](http://webintents.org/) for apps, peer-to-peer with updated [Websockets](http://www.websocket.org/), voice and videochat over [WebRTC](http://www.webrtc.org/), audio synthesis with [AudioContext](https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html#AudioContext-section), and advanced layout with [flexbox](http://www.w3.org/TR/css3-flexbox/) and [CSS Regions](http://html.adobe.com/webstandards/cssregions/). None of these are trivial to implement.

We are voting for the future of the web with our choice of browsers. There are many great things coming soon, but they can't all be proprietary. We just need to make sure the living standard is exactly that, and not an avenue to sneak in features that exceed the scope of what can be achieved in a lifetime.

