require('fs').readFile('./developers', 'UTF-8', function(err, data) {
  if (err) {
    throw new Error(err);
    return;
  }

  require('fs').writeFileSync('./developers.json', JSON.stringify(
    data
      .split('%')
      .map((line) => line
        .replace(/\\n/g, ' ')
        .replace(/\s+/g, ' ')
        .trim())
      .map((line) => line.split(' - by '))
      .map(([quote, author]) => ({ quote, author }))
  ), 'UTF-8');
});