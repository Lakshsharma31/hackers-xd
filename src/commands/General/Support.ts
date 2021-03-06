import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['support'],
            description: 'Gets the support group links',
            category: 'general',
            usage: `${client.config.prefix}Support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.sendMessage(
        M.sender.jid,
                `*๐ฎ๐ฆ๐๐ฝ๐ฝ๐ผ๐ฟ๐ ๐๐ฟ๐ผ๐๐ฝ ๐๐ถ๐ป๐ธ๐*
ใSapphire: RE๐ฒใ:\n\nhttps://chat.whatsapp.com/D1M6zr0tF7v2N30HfEJPdp\n\nใSapphire: Casino๐ฐใ:\n\nhttps://chat.whatsapp.com/Jq4ToZByPSJHaxqAtb32sg\n\n ใSapphire: Quiz๐ใ:\n\nhttps://chat.whatsapp.com/K0Y7Hepp3bW7TMk8wJH9bU`,
           MessageType.text
        ))
        const n = [
            './assets/images/asuna-yuuki.png','./assets/images/yuuki-asuna.jpeg',
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `Regarding this, I have sent you a personal message in your DM๐ช\n` }
        )

        }
}
