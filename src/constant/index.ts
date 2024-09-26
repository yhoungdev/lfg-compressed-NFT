const ENV = import.meta.env;
const APIURL = ENV.DEV
  ? "http://localhost:3000/api/leaderboard"
  : "/api/leaderboard";
export { ENV, APIURL };
