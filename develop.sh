#!/bin/sh
## Usage: develop [options] ARG1
##
## Options:
##   -h, --help    Display this message.
##   -n            Dry-run; only show what would be done.
##

sass --watch css/src/base.scss:css/base.css &
jekyll
