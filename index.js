//     ============================================================
//     |======OUR SERVER BOT - VERSION 0.7.8 by CookieGMVN#9173===|
//     |==========================================================|
//     ============================================================
//     |Created with love by CookieGMVN. Published due to Creative|
//     |Commons 1.0(CC 1.0). All rights reversed. Copyright 2021  |
//     |CookieGMVN. Các ghi chú đều được sử dụng Tiếng Việt(All   |
//     |notes is in Vietnamese.)                                  |
//     ============================================================

//Khai báo toàn bộ thư viện cần dùng
const fs = require('fs');
const Discord = require('discord.js');
const prefix = huấn!
const token = "kolammadoicoanthianc**and**bu****"
const Canvas = require('canvas')

//Khai báo các hàm thuộc Discord.js
const client = new Discord.Client();

//Khi đã đăng nhập,
client.once('ready', () => {
	console.log('CÓ LÀM THÌ MỚI CÓ ĂN KHÔNG LÀM MÀ ĐÒI CÓ ĂN THÌ ĂN C** ĂN Đ** B***!');
	client.user.setActivity("HUẤN MUÔN NĂM", {
		type: "PLAYING",
	  });
});

//Khi load xong hàm tin nhắn
client.on('message', async message => {
  if (message.content.includes("")){
    message.reply("Không làm mà đòi có ăn thì ăn c** ăn đ** b***")
  }
})

client.login(token)
