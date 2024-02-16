---
title: Interaction design through proximity
---

Time-of-flight sensors allow for computers and participating objects to have
awareness of their relative positions to one another in space. This allows for
very natural interactions between devices: a laptop and an external display can
know which direction to extend a desktop to, for example.

Apple's [Human Interface Guidelines][HIG] have the following guidelines:

> - **Consider a task from the perspective of the physical world to find
>   inspiration for a nearby interaction.** For example, although people can
>   easily use your app's UI to transfer a song from their iPhone to their HomePod
>   mini, initiating the transfer by bringing the devices close together makes the
>   task feel rooted in the physical world. Discovering the physical actions that
>   inform the concept of a task can help you create an engaging experience that
>   makes performing it feel easy and natural.
>
> - **Use distance, direction, and context to inform an interaction.** Although
>   your app may get information from a variety of sources, prioritizing nearby,
>   contextually relevant information can help you deliver experiences that feel
>   organic. For example, if people want to share content with a friend in
>   a crowded room, the iOS share sheet can suggest a likely recipient by using
>   on-device knowledge about the person's most frequent and recent contacts.
>   Combining this knowledge with information from nearby devices that include the
>   U1 chip can let the share sheet improve the experience by suggesting the
>   closest contact the person is facing.
>
> - **Consider how changes in physical distance can guide a nearby interaction.**
>   In the physical world, people generally expect their perception of an object
>   to sharpen as they get closer to it. A nearby interaction can mirror this
>   experience by providing feedback that changes with the proximity of an object.
>   For example, when people use iPhone to find an AirTag, the display transitions
>   from a directional arrow to a pulsing circle as they get closer.
>
> - **Provide continuous feedback.** Continuous feedback reflects the dynamism of
>   the physical world and strengthens the connection between a nearby interaction
>   and the task people are performing. For example, when looking for a lost item
>   in Find My, people get continuous updates that communicate the item's
>   direction and proximity. Keep people engaged by providing uninterrupted
>   feedback that responds to their movements.
>
> - **Consider using multiple feedback types to create a holistic experience.**
>   Fluidly transitioning among visual, audible, and haptic feedback can help
>   a nearby interaction’s task feel more engaging and real. Using more than one
>   type of feedback also lets you vary the experience to coordinate with both the
>   task and the current context. For example, while people are interacting with
>   the device screen, visual feedback makes sense; while people are interacting
>   with their environment, audible and haptic feedback complement their shift in
>   focus.
>
> - **Avoid using a nearby interaction as the only way to perform a task.** You
>   can't assume that everyone can experience a nearby interaction, so it's
>   essential to provide alternative ways to get things done in your app.

[HIG]: https://developer.apple.com/design/human-interface-guidelines/nearby-interactions

Apple's implementation uses a [framework][Nearby Interaction] with appropriate
sandboxing to call app functionality when certain proximity conditions are met.

[Nearby Interaction]: https://developer.apple.com/documentation/nearbyinteraction
[wwdc-design]: https://developer.apple.com/videos/play/wwdc2021/10245
[wwdc-intro]: https://developer.apple.com/videos/play/wwdc2020/10668

[hackaday-ultrawideband]: https://hackaday.com/2021/06/09/what-is-ultra-wideband/
