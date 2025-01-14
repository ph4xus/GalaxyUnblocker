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
  function loop() {
    if (2 + 2 === 4) {
      let params = randomizeParams();
      
      const words = ["word 1 ","word2"]
      //const words = ["island boys kissing","isis application form","penis enlargment pills","pornhub gay","free v bucks generators","why is age of consent so old here","free gay porn","little boys kissing","gay hentai","massive gay orgy","fortnite sus emotes to do","thicc chun li hips","chun li doing party hips 10 hours loop"]
        
      let google = "https://www.google.com/search?surl=1&sca_esv=3ec098e3b7112be9&rlz=1CAKLUN_enUS1139&q=" +  words[Math.floor(Math.random() * words.length)] + "&udm=2";
      
      let newWindow = window.open(google, 'test', params);
      
      setTimeout(loop, 125);
    }
  }
  
  loop();
}
