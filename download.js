const ytdl = require('ytdl-core')
const fs = require('fs')

const download = async function(url, format) {
  let namefile = 'video.' + format
  await ytdl(url)
  .pipe(fs.createWriteStream(namefile))
  .then(() => { return namefile })
}

module.exports = download