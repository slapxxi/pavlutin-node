const data = { posts: [] };
const error = Error('Fetching Error');

let flag = false;

function get() {
  if (flag) {
    return rejectedPromise(error);
  }
  return resolvedPromise(data);
}

function resolvedPromise(data) {
  return new Promise((resolve) => {
    resolve({ ok: true, json() { return data; } });
  });
}

function rejectedPromise(error) {
  return new Promise((_, reject) => {
    flag = false;
    reject(error);
  });
}

function fail() {
  flag = true;
}

export default { get, fail, error, data };
