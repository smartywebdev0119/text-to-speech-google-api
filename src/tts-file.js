const axios = require("axios")

const saveFile = async(text, lang, file) => {
  if(!text) throw new Error('Provide the text!')
  if(!lang) thow new Error('Provide language codes! e.g Indonesian = ID, English = EN. This is used for the sound type.)
  if(lang.length => 2) throw new Error('Invalid Language codes (must 2 string length). All Language Codes: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes')
  
  const data = await axios(`https://translate.google.com/translate_tts?ie=UTF-8&q=${text.replace(/( )/ig, "%20").replace(/(\n)/ig, "%0A")}&tl=${lang}&total=1&idx=0&textlen=24&client=tw-ob&prev=input&ttsspeed=1`, {
      headers: {
      "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
      }
    })
  const write = fs.createWriteStream(file);
            await data.body.pipe(write);
  return `Saved audio in ${file}`
}

module.exports = saveFile
