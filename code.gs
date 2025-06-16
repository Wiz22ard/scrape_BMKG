var sh = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
var range = 'A2:J2'


function addData() {
  const urlGempa = 'https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json'
  const response = UrlFetchApp.fetch(urlGempa)
  const responseText = response.getContentText();
  const json = JSON.parse(responseText).Infogempa.gempa

  const tanggal = json.Tanggal
  const jam = json.Jam
  const datetime = json.DateTime
  const koordinat = json.Coordinates
  const magnitude = json.Magnitude
  const kedalaman = json.Kedalaman
  const wilayah = json.Wilayah
  const potensi = json.Potensi
  const dirasakan = json.Dirasakan
  const shakemap = 'https://static.bmkg.go.id/' + json.Shakemap

  data = [[tanggal,jam,datetime,koordinat,magnitude,kedalaman,wilayah,potensi,dirasakan,shakemap]]

  prevDateTime = sh.getRange(range).getValues()[0][2]
  currDateTime = datetime

  if(currDateTime==prevDateTime) {
    Logger.log(`[NONE] Gempa Terbaru di Tanggal ${tanggal} Jam ${jam}`)
  }
  else {
    sh.insertRows(2,1)
    sh.getRange(range).setValues(data)
    Logger.log(`[NEW] Data Diperbarui di Tanggal ${tanggal} Jam ${jam}`)
  }
}
