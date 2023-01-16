const fs = require("fs")
const ytdl = require("ytdl-core")

let link = "VİDEO_LİNKİNİ_GİRİNİZ"
let dosyalinki = "İNDİRİLİCEK_DOSYANIN_KAYIT_EDİLMESİ_İSTENEN_İSMİ"

ytdl(link)
  .pipe(fs.createWriteStream(dosyalinki + ".mp4"));
