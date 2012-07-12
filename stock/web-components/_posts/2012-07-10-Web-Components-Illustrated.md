---
layout: stock
title: Web Components Illustrated
draft: yes
---

## So then, what the hell are web components? ##


{% if false %}
  liquid works
{% endif %}

{% highlight ruby %}
!DOCTYPE html>
<html lang="en-us">
    <head>
        <title><?php wp_title('|', true, 'right'); bloginfo('name'); ?></title>
        <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/stylesheets/prettify.css" type="text/css" />
        <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/javascripts/prettify.js"></script>
        <!-- Added jQuery script to include the 'prettyprint' class on <code> tags and to start up Prettify using the prettyPrint() function. -->
        <?php
{% endhighlight %}

The component model for the Web (also known as Web Components) consists of four pieces designed to be used together to let web application authors define widgets with a level of visual richness not possible with CSS alone, and ease of composition and reuse not possible with script libraries today.

These pieces are:

+ templates, which define chunks of markup that are inert but can be activated for use later;

+ decorators, which apply templates to let CSS affect rich visual and behavioral changes to documents;

+ custom elements, which let authors define their own elements, including new presentation and API, that can be used in HTML documents; and

+ shadow DOM which defines how presentation and behavior of decorators and custom elements fit together in the DOM tree.

Both decorators and custom elements are called components.
