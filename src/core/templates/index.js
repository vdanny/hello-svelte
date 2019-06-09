function template(html) {
  return `<!DOCTYPE html>
    <html>

    <head>
      <meta charset='utf-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1'>
      <title>Svelte SSR</title>

      <link rel='stylesheet' href='/global.css'>
      <link rel='stylesheet' href='/bundle.css'>
    </head>

    <body>
      <div id="app">${html}</div>
      <script src='/build/bundle.js'></script>
    </body>

    </html>`;
}

module.exports = template;