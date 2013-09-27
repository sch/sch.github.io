---
layout: default
published: false
---

# The Backbone Tutorial I Wish I'd Had

I'm not a good programmer. I just want to get ideas out of my head and onto the page to share with others, and most of the time, that means making a website.

Should you use Backbone for any of your projects? I don't know, depends on what your project is. Most of the reasons I find a lot of tutorials about this stuff difficult (and trust me, I've read them all), is because the examples aren't really all that great. They don't explain the _why_ of structuring your application with a framework, or the process of creating spagetti code that leads to you wishing you had a framework. Backbone is just a couple of tricks that helped the creator out when making he was making a larger project, and he noticed there was a pattern in the code he wrote that he could turn into a library. The act of seeing a problem in a way that can be abstracted from your project isn't easy, and it's often messy, and full of reorganization and asking the question: "why did I put _this_ code here?"

After a lot of effort and general smarts in making an app, something clean and beautiful can be pulled out of the wreckage, and that's exactly what's happened here. Which makes it so much harder for a beginner to come up to these shiny new toys and fully realize _why they're necessary in the first place_. So, it's my job to take this slow, try and talk through the process of making an app and why you want to use libraries and abstractions, and what you gain and lose. I'm slow at writing apps, but I can communicate why I make certian decisions, and I hope that might be helpful.


- - -

I have this problem where I find it hard to read long lines of text. Wikipedia is a nightmare, what with its 200 characters on a line. For these hard-to-read sites, I ususally open up the page inspector, and bump up the line height up. Make the max-width on `<p>` tags something thinner. Something like that.

There's a really awesome little thing made by a guy named Robin Sloan called [Fish](http://www.robinsloan.com/fish/). It's a 'tap essay', where you have this one directional path through his story, with usually ~1 sentence per line. Some images and word-by-word stuff are thrown in there for dramatic effect. It's great.

So let's say I get really long winded, and want to read by an essay that _I_ write in the same way. And maybe it's an option that other people might like to try out when they're on my site. A little button maybe, that says 'click to read as a tap essay', and you can navigate through the article with your keyboard in the same way: one sentence at a time. Sounds like it'll involve Javascript.

Let's say my page looks like this:


```html
<!DOCTYPE HTML>
<html>
	<head>
    <meta charset="utf-8" />
    </head>
    <body>
    <div id="article">
    	<h1>My Earth-Shattering Essay</h1>
        <p>I can't tell you how good this essay is going to turn out.</p>
    </div>
    </body>
</html>
```

And we snap all of that rich 'content' up with some vanilla Javascript"

```javascript
var essay = document.getElementById('article');

console.log( essay );
```