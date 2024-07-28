const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace+2349053512461(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_35_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICA2NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODgsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMsXG4gICAgICAgIDc0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDMzLFxuICAgICAgICA0MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgODUsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICAzOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyLFxuICAgICAgICA5LFxuICAgICAgICAxOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDkwLFxuICAgICAgICAxODMsXG4gICAgICAgIDg2LFxuICAgICAgICA4NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDYzLFxuICAgICAgICA4NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUyLFxuICAgICAgICA1MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0MixcbiAgICAgICAgOTIsXG4gICAgICAgIDEyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDU5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTksXG4gICAgICAgIDU3LFxuICAgICAgICAxMCxcbiAgICAgICAgODAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNyxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwLFxuICAgICAgICA3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzksXG4gICAgICAgIDY3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDU0LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImdPWmxINFdhcUh4cWN4U1Vjdjk1U1JEbHpjWEs4c2NFQi9FczMvNGhvcUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA1MzUxMjQ2MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOEZGQUM0QjVBREVCOUVFNzAwQTJGQjhGNUI5NUQ3REZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMTkxNzU1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA1MzUxMjQ2MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTA1OTRCNjJBM0ZBMzk0NTUxOERGQTBERkM0RTRFRDhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMTkxNzU1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlR4c05yemNqUjhTSjNqQ2c2eDAzdXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTQ0ZDdjN2ItYWQzMi00ZDBjLTljOTMtZDNlOWMzNzZkNmEwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMyxcbiAgICAgIDI0MixcbiAgICAgIDEwMyxcbiAgICAgIDgwLFxuICAgICAgMTg4LFxuICAgICAgMTI4LFxuICAgICAgMjM1LFxuICAgICAgMTAwLFxuICAgICAgMTAsXG4gICAgICAyNCxcbiAgICAgIDEyLFxuICAgICAgNTMsXG4gICAgICAyNDEsXG4gICAgICAxMjIsXG4gICAgICAzMCxcbiAgICAgIDE4NyxcbiAgICAgIDEzOCxcbiAgICAgIDEwMixcbiAgICAgIDE0NixcbiAgICAgIDgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgsXG4gICAgICAzNyxcbiAgICAgIDIzMyxcbiAgICAgIDE5NixcbiAgICAgIDk1LFxuICAgICAgNDUsXG4gICAgICAyNDgsXG4gICAgICAxOTAsXG4gICAgICAyMjIsXG4gICAgICAxMixcbiAgICAgIDIxLFxuICAgICAgMjIzLFxuICAgICAgMTczLFxuICAgICAgMTc3LFxuICAgICAgMSxcbiAgICAgIDEyLFxuICAgICAgMTQyLFxuICAgICAgNTQsXG4gICAgICAxNzYsXG4gICAgICA2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzRVpRUjZWR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA1MzUxMjQ2MToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5MjU4NzA2Mjk4NDgyMzoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tXV3FJMEdFSUdmbXJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibTFCTmNDbDd5c29IUU5pMFdEdmQyYmw4Y1h0V0tjc2NiSzZkZHJwRnRoWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsazF4Y014WTlDQ05OQ3FXRU9MN1ltbXFyN0JJNEJaNVFlQ3BiQlNuNVNObFRhZDZoSExUdXpNMmVVMXFzRytpZ2VNOUx0NzIvdWNqQ3ZWcVE0Zm1Edz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrVWtob2x0d0pBVytRUkhOYi9mbGRkNHcvbnRXaW82dktiVk1ZSEo2ZXNjelhyR3M1Mk5QVUw4cGVCS2w1bnRVeDUzQ0JVKzNram1uM2J1VStwQzBCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDUzNTEyNDYxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjE5MTc0OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBJQ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUElDLmpzb24iOiAie1wia2V5RGF0YVwiOlwiem93WGxQbjh5VUZJejNINitiemwrdXhoNXlrei9MTFpmWTJJZ2ZvNkMwWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjM4NTMzOTI1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIxOTE3NTUzODBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
