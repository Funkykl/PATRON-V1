const fs = require('fs');

//===========================//

const {
  smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction');

//===========================//

global.d = new Date();
global.calender = d.toLocaleDateString('id');

//===========================//

// General Settings 
global.apikey = 'ptla_6pKq2Q5hGxajeMBrRdazQLkG1NSpXwIIi1FYZNmkUkQ'; // Replace with your panel API key
global.capikey = 'ptlc_USy1wdkOexq5IIfootLXskwsgoZvDu1oQvgybJ0qlWC'; // Replace with your Capikey panel
global.domain = 'https://zetsubo-stardust.zxvision.biz.id';
global.eggsnya = '15'; // Replace with your Eggs panel
global.location = '1'; // Replace with your location panel

//===========================//

global.prefa = ['', '!', '.', ',', '🐤', '🗿'];
global.owner = ['24162266840'];
global.ownMain = '24162266840';
global.NamaOwner = '𝚸𝚫𝚻𝚪𝚯𝚴 𝛁1 𝚩𝐔𝐆'; // Do not change 
global.sessionName = 'session';
global.connect = true; // Set to false if using QR Code
global.namabot = '𝚸𝚫𝚻𝚪𝚯𝚴 𝛁1 𝚩𝐔𝐆'; // Do not change
global.author = '𝚸𝚫𝚻𝚪𝚯𝚴 𝛁1 𝚩𝐔𝐆'; // Do not change
global.packname = 'OKLMBOY 🚹'; // Change if needed
global.url = 'https://whatsapp.com/channel/0029Val0s0rIt5rsIDPCoD2q'; // Do not change

//===========================//

global.listr = ` │⬡ 1GB Cpu: 50% - 3.000/bln
 │⬡ 2GB Cpu: 70% - 5.000/bln
 │⬡ 3GB Cpu: 90% - 7.000/bln
 │⬡ 4GB Cpu: 110% - 9.000/bln
 │⬡ 5GB Cpu: 130% - 11.000/bln
 │⬡ 6GB Cpu: 150% - 13.000/bln
 │⬡ 7GB Cpu: 170% - 15.000/bln
 │⬡ 8GB Cpu: 200% - 17.000/bln`;

//===========================//

global.country = '241';
global.system = {
  gmail: 'winneraileme6@gmail.com',
};

//===========================//

global.decor = {
  menut: '❏═┅═━–〈',
  menub: '┊•',
  menub2: '┊',
  menuf: '┗––––––––––✦',
  hiasan: '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷',
  menut: '––––––『',
  menuh: '』––––––',
  menub: '┊☃︎ ',
  menuf: '┗━═┅═━––––––๑\n',
  menua: '',
  menus: '☃︎',
  htki: '––––––『',
  htka: '』––––––',
  haki: '┅━━━═┅═❏',
  haka: '❏═┅═━━━┅',
  lopr: 'Ⓟ',
  lolm: 'Ⓛ',
  htjava: '❃'
};

//===========================//

// Response
global.mess = {
  ingroup: 'C'EST PAS POSSIBLE ICI ESSAIE AILLEURS.',
  admin: 'T'ES PAS ADMIN MON REUF .',
  owner: 'SI TU ME SUCE TU DEVIENT OWNER.',
  premium: 'SI TU ME DONNE UN GROUPE TU DEVIENT USER PREM.',
  seller: 'TU ME SAOUL DÉGAGE !!🖕👅🤳.',
  usingsetpp: 'VA TE FAIRE METTRE ',
  wait: '*processing♻️ chillax....♻️*',
  success: '*IL NOUS A QUITTÉ* 😈💯.....',
  bugrespon: '♻️😈😭 *T'AS EU UNE BONNE VIE....* 🦠🕷️👾'
};

//===========================//

// #@whiskeysockets/baileys ^6.3.0
global.autOwn = 'req(62-8S57547ms11).287p';
let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file);
  console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
  delete require.cache[file];
  require(file);
});
