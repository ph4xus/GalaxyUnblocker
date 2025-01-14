function randomizeParams() {
  const paramsArray = [
    'scrollbars=no',
    'resizable=no',
    'status=no',
    'location=no',
    'toolbar=no',
    'menubar=no'
  ];

  const randomParams = [
    `width=${Math.floor(Math.random() * 500) + 100}`, 
    `height=${Math.floor(Math.random() * 500) + 100}`, 
    `left=${Math.floor(Math.random() * screen.width)}`, 
    `top=${Math.floor(Math.random() * screen.height)}`
  ];

  return paramsArray.concat(randomParams).join(',');
}

function spam() {
  let params = randomizeParams()
  
  const words = ["sonic movie", "sonic movie full trailer"]
  let google = "https://www.google.com/search?surl=1&sca_esv=3ec098e3b7112be9&rlz=1CAKLUN_enUS1139&q=" +  words[Math.floor(Math.random() * words.length)] + "&udm=2"
  open(google, 'test', params);
  
}
