---
title: Inferring context from the environment
---

[Magic Ink](http://worrydream.com/MagicInk) makes the claim that a lot of what
we think of as "interaction design" is actually busywork. Re-creating state,
clicking around to tell the computer what we're interested in, is unnecessary
work in most cases when we can use contextual information to make a best guess.

> A person determines her surroundings through the five human senses. Software
> doesn't operate in a vacuum, either; through connections to hardware and other
> software, it can sense much about the user's situation. Some examples of
> context clues in the software's environment include:
>
> - **Date and time.** Time is one of the fundamental dimensions along which we
>   organize our lives, and in any data space with a temporal dimension, “now” is
>   almost always the prime landmark. Because users often seek information on
>   demand, information related to “now” or “soon” is often the most relevant.
>   Fortunately, every general-purpose computer knows when “now” is. A person
>   using a software bus schedule, for example, should never have to hunt for the
>   next bus.
>
> - **Geographical location.** Similarly, the most interesting spatial landmark is
>   usually “here.” Unfortunately, this currently can be harder to determine
>   automatically, but the payoff is enormous. Obviously, a software roadmap needs
>   to know the user's location, but so does the bus schedule, as well as business
>   listings, transportation planners, travel guides, and much other information
>   software.
>
> - **Physical environment.** Given a time and location, many details of the
>   physical environment, such as the weather, are just a network connection away.
>   Consider a travel guide that suggests parks when sunny and museums when rainy.
>
> - **Other information software**, such as open websites. By reading some
>   information, the user is indicating a topic of interest. All other information
>   software should take heed. Consider a person reading the website of an
>   upcoming stage play. When she opens her calendar, the available showings
>   should be marked. When she opens a map, she should see directions to the
>   playhouse. When she opens a restaurant guide, she should see listings nearby,
>   and unless the play offers matinees, they shouldn't be lunch joints.
>
> - **Documents created with manipulation software.** Creating some information
>   indicates an even stronger topic of interest. Consider a person who requests
>   information about “cats” while writing a paper. If the paper's title is
>   “Types and Treatment of Animal Cancer,” the information should skew toward
>   feline medical data. The title “History of Egypt” indicates interest in
>   ancient feline worship instead. And if the paper contains terms related to
>   building construction, “cats” probably refers to the decidedly non-feline
>   Caterpillar heavy machinery.
>
> - **Email.** Names, addresses, and phone numbers in recent email clearly
>   constitute valuable hints. A recipient who opens a calendar should find the
>   sender's schedule juxtaposed with her own. When she opens a map, addresses
>   in the email should be marked. But beyond that, recent correspondence can
>   indicate current activities, and an email archive as a whole can describe
>   the user's characteristics and interests. Consider a person who requests
>   information about “racing.” The fields of running, bicycles, and cars have
>   distinct sets of terminology; if one set regularly shows up in the person's
>   conversations, “racing” isn't so ambiguous.

[handoff]: https://developer.apple.com/handoff/
[handoff-guide]: https://developer.apple.com/documentation/foundation/task_management/implementing_handoff_in_your_app
[NSUserActivity]: https://developer.apple.com/documentation/foundation/nsuseractivity
[handoff-sample-app]: https://developer.apple.com/documentation/foundation/task_management/continuing_user_activities_with_handoff
[about-handoff]: https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/Handoff/HandoffFundamentals/HandoffFundamentals.html
