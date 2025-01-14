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
  while (2 + 2 === 4) {
    let params = randomizeParams();
    
    const words = ["word 1", "word2"];
    
    let google = "https://www.google.com/search?surl=1&sca_esv=3ec098e3b7112be9&rlz=1CAKLUN_enUS1139&q=" + words[Math.floor(Math.random() * words.length)] + "&udm=2";
    
    open(google, 'test', params);
  }
}
