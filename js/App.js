import React from "react";
import Typekit from "react-typekit";

const intro = require("./intro.markdown");
const {
  contracting,
  littlebits,
  recurly,
  nerdwallet,
  digitalbungalow,
  wheaton
} = require("./data.js");

const adrian = {
  name: "Adrian Schaedle",
  email: "adrian@schaedle.me"
};

export default function App() {
  return (
    <div>
      <div className="Groups">
        <Grouping title="Experience">
          <Job job={contracting} />
          <Job job={littlebits} />
          <Job job={recurly} />
          <Job job={nerdwallet} />
          <Job job={digitalbungalow} />
        </Grouping>
        <Grouping title="Education">
          <Education />
        </Grouping>
      </div>
      <Typekit kitId="jks2qci" />
    </div>
  );
}

function PrintMessage() {
  return (
    <div className="PrintMessage">
      This resume was generated from a web page available at{" "}
      <a href="https://adrian.schaedle.me/resume">
        https://adrian.schaedle.me/resume
      </a>
      . I encourage you to look at that version!
    </div>
  );
}

function Header({ person, children }) {
  return (
    <div className="Header clearfix">
      <div className="Resume-contact">
        <h1 className="Resume-name">{person.name}</h1>
        <div className="Resume-email">{person.email}</div>
      </div>
      <div className="Resume-intro">{children}</div>
    </div>
  );
}

function Grouping({ title, children }) {
  return (
    <div className="Grouping clearfix">
      <h1 className="Grouping-title">{title}</h1>
      <div className="Grouping-subject">{children}</div>
    </div>
  );
}

function Job({ job }) {
  return (
    <div className="Job clearfix">
      <div className="Job-dates">
        <div className="Job-company">{job.company}</div>
        <div className="Job-title">{job.title}</div>
        <Dates start={job.dates.start} end={job.dates.end} />
      </div>
      <div className="Job-info">
        <Markdown>{job.description}</Markdown>
      </div>
    </div>
  );
}

function Education() {
  return <Job job={wheaton} />;
}

function Dates({ start, end }) {
  let dates = [];
  if (start) dates.push(start);
  if (end) dates.push(end);
  const text = dates.join(" to ");
  return <div className="Dates">{text}</div>;
}

function Markdown({ children }) {
  const html = { __html: children };
  return <div className="Prose" dangerouslySetInnerHTML={html} />;
}
