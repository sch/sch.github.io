import React, { Component } from 'react';

require("./styles.css");

const intro = require("./intro.markdown")
const {recurly, nerdwallet, digitalbungalow, wheaton} = require("./data.js");

const adrian = {
  name: "Adrian Schaedle",
  email: "adrian@schaedle.me"
}

export default class App extends Component {
  render() {
    return (
      <div className="Resume">
        <Header person={adrian}>
          <Markdown>{intro}</Markdown>
        </Header>
        <div className="Groups">
          <Grouping title="Jobs">
            <Job job={recurly} />
            <Job job={nerdwallet} />
            <Job job={digitalbungalow} />
          </Grouping>
          <Grouping title="Education">
            <Education />
          </Grouping>
        </div>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    const {person, children} = this.props;
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
}

class Grouping extends Component {
  render() {
    const {title, children} = this.props;

    return (
      <div className="Grouping clearfix">
        <h1 className="Grouping-title">{title}</h1>
        <div className="Grouping-subject">{children}</div>
      </div>
    );
  }
}

class Job extends Component {
  render() {
    const {job} = this.props;

    return (
      <div className="Job clearfix">
        <div className="Job-dates">
          <Dates dates={job.dates} />
        </div>
        <div className="Job-info">
          <Arrange>
            <ArrangeItem>
              <div className="Job-company">{job.company}</div>
            </ArrangeItem>
            <ArrangeItem>
              <div className="Job-title">{job.title}</div>
            </ArrangeItem>
          </Arrange>
          <Markdown>{job.description}</Markdown>
        </div>
      </div>
    );
  }
}

class Arrange extends Component {
  render() {
    return React.createElement('div', {
      className: "Arrange"
    }, this.props.children);
  }
}

class ArrangeItem extends Component {
  render() {
    const {fit} = this.props;
    const kind = fit ? "Fit" : "Fill";
    const alignment = "middle";
    const basename = `Arrange-size${kind}`;
    let classes = [basename];
    if (alignment) {
      classes.push(`${basename}--${alignment}`);
    }
    return React.createElement("div", {
      className: classes.join(" ")
    }, this.props.children);
  }
}

class Education extends Component {
  render() {
    return (
      <Job job={wheaton} />
    );
  }
}

class Dates extends Component {
  render() {
    const {start, end} = this.props.dates;
    let dates = [];
    if (start) dates.push(start);
    if (end) dates.push(end);
    const text = dates.join(" to ");
    return (
      <div className="Dates">{text}</div>
    );
  }
}

class Markdown extends Component {
  render() {
    const html = {__html: this.props.children};
    return <div className="Prose" dangerouslySetInnerHTML={html} />
  }
}

