---
layout: skeleton
published: true
---

# Declaring SVG in Clojure

There's not a *great* story for building graphics in Clojure yet. There's an extremely compelling one for building user interfaces — React came along with a declarative model for user interfaces, wrapper libraries like Om and Reagent came up with nice mental models for representing the data in a tree of UI components using an application state atom. It's a simple way to model things: figure out the minimal amount of state for your app, create a projection of it for your UI, allow components to map browser events to actions that can update that application state.

Drawing libraries have not been so lucky, maybe because the types of things you can do with them haven't really been explored yet. There's [Quil][quil-github] which wraps the [Processing][processing-homepage] libraries generative art, but it's a very imperative, draw-this-line-now-draw-that-circle type of api. Not too Clojure-ish. There's several libraries that wrap or emulate the incredible [D3][d3-homepage] library. D3 is all about declaring the reducing function between multiple data sources, and defining a projection of how those combined data points should be represented using various drawing primitives. This can be as simple as mapping two-dimensional datapoints to a cartesian plane or as complex as [animating a tree of data around a zoomable set of arcs](http://bl.ocks.org/mbostock/4348373).

D3 is functional but complex. It's a framework for data drawing more than it is a set of primitives like you might find in the [Google Closure library](https://closure-library.googlecode.com/git-history/docs/class_goog_graphics_SvgGraphics.html). Its focus is entirely declarative binding of data to graphic elements. You explain how you want something to appear, and D3 takes care of joining and transforming that data, and animating input data if it changes.

It uses a builder API to achieve this definition, and then it goes to work behind the scenes to transform your built definition into a runtime for projecting that data into a graph. Because of this nice delarative nature, many people have been using D3 as a better jQuery.

D3 still treats it's drawing area as a canvas however, so in order to make graphics of different sizes, we need to consider canvas size as an input to our graphing program, rather than property of the thing we're drawing to.

## I say this all, because I'm interested in the work of Sol LeWitt.

If you're coming through Western Massachusetts, stop by Mass MoCA. It's an enormous museum built in an enormous old textile mill. There's a long-running exhibit of the work of Sol LeWitt, who invented something he called "conceptual art".

These works were drawing instructions, that described simple combinations of line, color, and shape like:

> ![Wall Drawing 88](http://www.massmoca.org/lewitt/images/walldrawings/88/image)
>
> _A 6-inch (15 cm) grid covering the wall. Within each square, not straight lines in either of four directions. Only one direction in each square but as many as desired, and at least one line in each square._
>
> [Wall Drawing 88](http://www.massmoca.org/lewitt/walldrawing.php?id=88)

or

> ![Wall Drawing 901](http://www.massmoca.org/lewitt/images/walldrawings/901/image)
>
> _Color bands and black blob. The wall is divided vertically into six equal bands; red; yellow; blue; orange; purple; green. In the center is a black glossy blob._
>
> [Wall Drawing 901](http://www.massmoca.org/lewitt/walldrawing.php?id=901)

I had a very awesome college professor who called these what they were: algorithms for art. In pictures, they're fun, in descriptions, they're clever. In person, they're captivating. And drawn in computers, they're ripe for a declarative drawing language.

They're also the perfect candidate for screens. The Wall Drawings series took into account that not every wall is going to be the same, and that the size and layout of the artwork should be a function of where it will hang. Most of his sizes are relative ("divide a wall in half", "covering the wall") with some constant sizes ("6 inches lines") or some abstract shape that can be left to interpretation. These are things that can be adapted to the screen.

Making resolution-independent drawing involves treating the canvas size as an input to the drawing. Understanding two properties of SVG are essential to making scalable graphics: the **viewport** and the *viewBox**.

The viewport is responsible for defining the size of the image on the page. Giving an SVG element a width and height for example:

	<svg width="200" height="200">
	  <...>
	</svg>

Will produce an svg element on the page that will always be 200 by 200 pixels in size. The viewBox property on the other hand will mask some section of the original image to blow up or scale down to the 200x200 frame. This viewBox:

	<svg width="200" height="200" viewBox="50 50 100 100">
    <...>
	</svg>

Would be the equivalent of looking at the canvas with 2x magnifying glass: the image on the page would still be 200 by 200 pixels, but it's zooming into a 100x100px chunk of the canvas starting at (50,50)px in the original.

How this image is scaled can be tweaked using an additional property: **`preserveAspectRatio`**. This property lets you define how the image should scale in order to fit inside the viewport. The possible values are:

- `meet`: which makes sure the entire image can fit inside the viewport (which means there will be empty space if the viewport is larger on one side than the image is)

- `slice`: which will make sure the shortest side of the image takes up the full space of the viewport, while the larger site gets cut off

- `none`: which will stretch the `viewBox` to fit within the viewport, distorting it in the process

Additionally, `preserveAspectRatio` gives you some control over where the image should be centered inside the viewport. This is the way for you to hint that the Y of the image should be aligned to the top/middle/bottom or the X should be aligned to the left/center/right of the image. The syntax combines these three alignments for both top and bottom by using: min/mid/max. So to orient the viewBox to the center of the viewport, you use: `xMidYMid`. Bottom right: `xMaxYMax`. You get the picture. Putting it altogether:


  <svg width="200" height="200" viewBox="50 0 100 200" preserveAspectRatio="xMidYMid slice">
    <...>
  </svg>



[quil-github]: https://github.com/quil/quil
[d3-homepage]: http://d3js.org
[processing-homepage]: http://processing.org
