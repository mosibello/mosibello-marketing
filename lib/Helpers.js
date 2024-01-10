export function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
}

export const sortByDatePublished = (a, b) => {
  return (
    new Date(b?.frontmatter?.datePublished) -
    new Date(a?.frontmatter?.datePublished)
  );
};

export const randomIdGenerator = () => {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
};
