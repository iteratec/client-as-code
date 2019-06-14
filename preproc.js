module.exports = (markdown, options) => {
  return new Promise((resolve, reject) => {
    return resolve(
      markdown
        .split('\n')
        .map((line, index) => {
            console.log(line, index);
          if (!/^\*/.test(line) || index === 0) return line;
          return line + '\n<!-- .element: class="fragment" -->';
        })
        .join('\n')
    );
  });
};
