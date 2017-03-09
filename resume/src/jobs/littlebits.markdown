At littleBits, I was hired to help bulid the client application for the
company's internet-of-things wifi-enabled cloudBit — a small Linux computer
capable of quickly connecting to a known wifi network and
broadcasting/receiving electric signal. This application was responsible for
controlling and reading values from devices over a websocket connection,
provisioning a device on a wifi network.

I helped to tune our aging Rails app to boost throughput using our existing AWS
configuration. This ranged from hunt down n+1 queries and how to leverage
ActiveRecord's query builder to wrap up complex pages using the query object
pattern, performing nested view caching for shop pages, and increasing
perceived performance by delaying expensive or content after the initial page
load. I served as the lead developer on a revamp of our community-powered
invention editor, where littleBits users can submit pictures and instructions
about how to build their creations.

After this I worked at a research-and-development level on an upcoming
learn-to-code product aimed at the education market. As for the development
efforts, I split time between developing user interface prototypes for
high-level product design considerations and building out necessary libraries
for communicating with hardware from a web context. This included a wrapper
around the (at-the-time experimental) Web Bluetooth apis, a Javascript binary
parser and generator library for a USB bluetooth dongle, a Qt app (later an
Electron app) that could provide a websocket connection to our Arduino runtime.
On the web side, I experimented with various paradigms that could be used as a
basis for teaching programming, including procedural, event-based, declarative,
and functional reactive programming. These prototypes were implemented using
web technologies.

Non-programming duties included performing market research and competetive
analysis for the learn-to-code software space, sourcing and synthesizing
relevant academic research, administering user testing with kids in public
schools, interviewing educators to gain insight into how programming is taught
today, and talking to teams at Google, Microsoft, Apple, and the Lifelong
Kindergarden Group to suggest points of collaboration.
