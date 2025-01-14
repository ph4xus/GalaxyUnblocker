function randomizeParams() {
  const paramsArray = [
    'scrollbars=no',
    'resizable=no',
    'status=no',
    'location=no',
    'toolbar=no',
    'menubar=no',
    'width=0',
    'height=0',
    'left=-1000',
    'top=-1000'
  ];

  for (let i = paramsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [paramsArray[i], paramsArray[j]] = [paramsArray[j], paramsArray[i]];
  }
  return paramsArray.join(',');
}

function spam() {
  let params = randomizeParams()
  
  const words = ["sonic movie", "sonic movie full trailer"]
  let google = "https://www.google.com/search?surl=1&sca_esv=3ec098e3b7112be9&rlz=1CAKLUN_enUS1139&q=" +  words[Math.floor(Math.random() * words.length)] + "&udm=2"
  open(google, 'test', params);
  
}
