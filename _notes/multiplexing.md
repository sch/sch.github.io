---
title: Terminal Multiplexing
---

It's possible to save the state of multiple terminal windows, tile programs
side-by-side, attach to sessions over the network, and switch between different
contexts. Unix's `screen` is maybe the most famous of these, but there are
several others.

tmux

[dvtm](https://www.brain-dump.org/projects/dvtm/) is a program that makes it
possible to layout different windows in grids. A companion program,
[abduco](https://www.brain-dump.org/projects/abduco/), allows these layouts to
be persisted and handles session management.

[dtach](https://dtach.sourceforge.net) provides just the detach functionality of
screen.

[dwm](https://dwm.suckless.org) handles window layout.
