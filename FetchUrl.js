function spam() {
  let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
  width=0,height=0,left=-1000,top=-1000`;
  
  const words = ["sonic movie", "sonic movie full trailer"]
  let google = "https://www.google.com/search?surl=1&sca_esv=3ec098e3b7112be9&rlz=1CAKLUN_enUS1139&q=" +  words[Math.floor(Math.random() * words.length)]
  open(google, 'test', params);
  
}
