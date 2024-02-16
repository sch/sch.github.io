---
---

> A just-in-time information retrieval agent (JITIR agent) is software that proactively retrieves and presents information based on a person’s local context in an easily accessible yet nonintrusive manner. This paper describes three implemented JITIR agents: the Remembrance Agent, Margin Notes, and Jimminy. Theory and design lessons learned from these implementations are presented, drawing from behavioral psychology, information retrieval, and interface design. They are followed by evaluations and experimental results. The key lesson is that users of JITIR agents are not merely more efficient at retrieving information, but actually retrieve and use more information than they would with traditional search engines.

Just-in-time information retrieval agents (Rhodes, Maes)[1]

[1]: https://www.bradleyrhodes.com/Papers/rhodes-jitir-agents-ibmsj-2000.pdf

A lot of this tech was proposed in a simpler time, and in more homogenous contexts. Rhode's remembrance agent is implemented as a frontend to Emacs, where the typical Media Lab hacker is already putting all of their notes, composing email and reading news.

> The Remembrance Agent described in this paper performs this continuous, associative form of recall by continuously displaying relevant information which might be relevant to an individual user in their current context. It is designed with the philosophy that, as a continuously running and updating program, it should never distract from the user's primary task, but should instead only augment it. It therefor suggests information sources which may be relevant to the user's current situation in the form of one-line summaries at the bottom of the screen. Here they can be easily monitored, but won't distract from the primary work at hand. The full text of a suggestion can be brought up with a single keystroke.

From [A continuously running automated information retrieval system (Rhodes, Starner)][2]

[2]: https://alumni.media.mit.edu/~rhodes/Papers/remembrance.html

Some of them took a second stab at an agent for web browsers a few years later with Margin Notes:

> Margin Notes is a remembrance agent that automatically rewrites web pages as they are loaded, adding hyperlinks to personal files. As a web page is loaded, Margin Notes adds a black margin strip to the right of the document. It then compares each section of the document to pre-indexed email archives, notes files, and other text files, based on keyword co-occurrence. If one of these indexed files is found to be relevant to the current section of the web page, a small "suggestion box" is included in the margin next to the relevant section. The box contains a quick description of the suggested text, an bar representing the relevance of the suggestion, and a link to get more information. The suggestion box usually consists of a subject, date, author, and filename for the suggested text.

It introduces the notion of "alarms":

> When a new piece of email arrives, a stock price goes below a certain threshold, or another trigger event occurs, the alarm activates and informs the user. Both RAs and alarms also have the potential to be context-aware, using the user's own context to trigger information. However, RAs are designed to provide much richer and more varied kinds of information than alarms. Alarms usually provide only a single piece of information, namely whether the alarm's trigger event has occurred. Even if the algorithm to decide whether to trigger an alarm is very complex, the end result is by definition only one of a very limited set of states. On the other hand, a single RA might provide information from any of thousands of documents, emails, or database entries with each "suggestion" leading to pages of information.

[3]: https://web.media.mit.edu/~lieber/IUI/Rhodes/Rhodes.html

These are key ideas explored later in [[magic-ink]]. Similar examples can be found in [[calm-technology]].

See also: Andy Matuschak's [Peripheral Vision notes](https://notes.andymatuschak.org/z4geAr5cERWdJPrdhU5gy3N).
