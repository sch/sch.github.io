const recurly = {
  dates: {start: "June 2014", end: "July 2015"},
  company: "Recurly",
  title: "Software Developer",
  description: require("./jobs/recurly.markdown")
};

const nerdwallet = {
  dates: {start: "April 2013", end: "May 2014"},
  company: "Nerdwallet",
  title: "Software Engineer",
  description: require("./jobs/nerdwallet.markdown")
};

const digitalbungalow = {
  dates: {start: "September 2012", end: "April 2013"},
  company: "Digital Bungalow",
  title: "Web Developer",
  description: require("./jobs/digitalbungalow.markdown")
};

const wheaton = {
  dates: {start: "2008", end: "2012"},
  company: "Wheaton College",
  title: "BS Computer Science",
  description: require("./wheaton.markdown")
};

export {recurly, nerdwallet, digitalbungalow, wheaton};
