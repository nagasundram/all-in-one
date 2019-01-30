const dev = {
  api: {
    URL: "http://localhost:3000"
  },
  route: {
    DOMAIN: "http://localhost:3001",
    PREFIX: ""
  }
};

const prod = {
  api: {
    URL: "https://sagitminion.herokuapp.com"
  },
  route: {
    DOMAIN: "https://nagasundram.github.io/",
    PREFIX: "all-in-one"
  }
};

const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  ...config
};
