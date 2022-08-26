let handler = async (m, { args, usedPrefix, command }) => { 
  
 if (!args[0]) throw '📑Usernamenya mana?\n\n*Contoh:* RicoggDeveloper' 
 if (!args[1]) throw 'Repo nya mana?\n\n*Contoh:* .githubdl New project 
  
 let url = `https://github.com/${args[0]}/${args[1]}/archive/refs/heads/main.zip` 
 //ByFangzXD
 m.reply(`waiting for compress to zip`) 
 conn.sendFile( m.chat, url, 'repo.zip', null, m) 
  
 } 
 handler.help = ['githubdl'] 
 handler.tags = ['github'] 
 handler.command = /githubdl/i 
  
 handler.limit = 5 
  
 export default handler 