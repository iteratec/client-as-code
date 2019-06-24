'use strict';

function bulletPointsAsFragements(markdown) {
  return markdown
      .split('\n')
      .map((line, index) => {
        return (!/^[ \t]*\*/.test(line) || index === 0)
            ? line
            : line + '<!-- .element: class="fragment" -->';
      })
      .join('\n')
}

module.exports = (markdown, options) => {
  return new Promise((resolve, reject) => {
    return resolve(
      [
        bulletPointsAsFragements
      ].reduce((result, preprocFn) => preprocFn(result), markdown)
    );
  });

};
