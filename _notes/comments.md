---
---

Comments sections on most websites were removed a while back when people's
inboxes filled with spam and psychos. The solution? People used Facebook and
Twitter to share and comment on links.

Edward Tufte has an interesting approach, where he'll post an article, approve
comments, but also chime in himself if someone else links out to that piece.

https://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=00036T&topic_id=1

The Indieweb project has an interesting take on comments that's a lot like the
2000s era web: instead of having a comments section where people submit messages
on your site, you can post on your own site and link back to the original
resource. The webmention protocol specifies the referencer's server then hits an
endpoint on the original server with a preview of the comment.

https://www.w3.org/TR/webmention/
https://aarongustafson.github.io/jekyll-webmention_io/

Webfinger can be used to link to these resources

https://webfinger.net
https://github.com/philnash/jekyll-mastodon_webfinger
