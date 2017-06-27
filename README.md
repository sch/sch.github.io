A Jekyll blog, with some additional pieces that allow building assets [outside
of Jekyll's restrictions for
github](https://help.github.com/articles/about-github-pages-and-jekyll/).

```
● rake --tasks
rake buildjs   # Build javascript files
rake generate  # Generate blog files
rake new       # Begin a new post in stock/_posts
rake publish   # Generate and publish blog to gh-pages
rake start     # Startup Jekyll
```

Run `rake start` to bulid the Jekyll site locally, `rake publish` to build the
site and upload the finished directory to the `master` branch. Run `yarn server`
to continually build the resume page, run `yarn server:checkboxes` to run the
development server for the homepage.
