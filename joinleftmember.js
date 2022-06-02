const { MessageEmbed } = require("discord.js")

module.exports = (client) => {

    const joinid = '(ID CHANNEL FOR JOIN MESSAGE)'
    const leaveid = '(ID CHANNEL FOR LEAVE MESSAGE)'

    client.on('guildMemberAdd', async member =>{
        const channel = member.guild.channels.cache.get(joinid)
        const embed = await new MessageEmbed()
        .setTitle(`Welcome People! ${member.user.username}!`)
        .setThumbnail(member.user.displayAvatarURL({dynamic:true}))
        .setDescription(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`)
        .setColor('')
        .setTimestamp()
        .setFooter(``)
        channel.send({embeds:[embed]});
      })

      client.on('guildMemberRemove', async member =>{
        const channel = member.guild.channels.cache.get(leaveid)
        const embed = await new MessageEmbed()
        .setTitle(`See You Later! ${member.user.username}`)
        .setThumbnail(member.user.displayAvatarURL({dynamic:true}))
        .setDescription(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`)
        .setColor('')
        .setTimestamp()
        channel.send({embeds:[embed]});
      })
}
