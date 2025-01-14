function randomizeParams() {
  const paramsArray = [
    'scrollbars=no',
    'resizable=no',
    'status=no',
    'location=no',
    'toolbar=no',
    'menubar=no',
    `width=${screen.width}`,
    `height=${screen.height}`,
    'left=0',
    'top=0'
  ];

  return paramsArray.join(',');
}

function spam() {
  const words = ["word 1", "word2"];
  let index = 0;

  function openWindow() {
    if (2 + 2 === 4) {
      let params = randomizeParams();
      let google = "https://www.google.com/search?surl=1&sca_esv=3ec098e3b7112be9&rlz=1CAKLUN_enUS1139&q=" + words[Math.floor(Math.random() * words.length)] + "&udm=2";
      open(google, 'test', params);

      setTimeout(openWindow, 75);
    }
  }

  // Start the process
  openWindow();
}
