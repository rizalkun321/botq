exports.wait = () => {
	return`*[❗] SEDANG DI PROSES.*\n*NOTE* : _BENTAR DOANG KOK. GAK KEK DIA_`
}

exports.succes = () => {
	return`*「 SUKSES 」*`
}

exports.lvlon = () => {
	return`*「❗」ENABLE LEVELING*`
}

exports.lvloff = () => {
	return`*「❗」DISABLE LEVELING*`
}

exports.lvlnul = () => {
	return`*「❗」LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*「❗」LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*[❗]BELUM DAFTAR*\n*cara daftar ${prefix}daftar nama|umur* \n\n*contoh ${prefix}daftar titan|18*`
}

exports.baned = () => {
	return`*「❗」SORRY SORRY AJA NIH BRO, TAPI KAU SUDAH KU BANNED YAHAHAHA HAYUUU :V*`
}

exports.premium = () => {
	return`*「❗」Maaf Kamu Bukan User Premium ! hubungi owner untuk jadi premium ketik ${prefix}owner*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar kak >_<*`
}

exports.stikga = () => {
	return`*「 GAGAL 」Coba ulangi lain kali kak*`
}

exports.linkga = () => {
	return`*「❗」maaf linknya tidak valid kak*`
}

exports.groupo = () => {
	return`*「❗」GROUP ONLY*`
}

exports.ownerb = () => {
	return`*「❗」OWNER BOT ONLY*`
}

exports.ownerg = () => {
	return`*「❗」OWNER GROUP ONLY*`
}

exports.admin = () => {
	return`*「❗」ADMIN GROUP ONLY*`
}

exports.badmin = () => {
	return`*「❗」BOT HARUS JADI ADMIN*`
}

exports.nsfwoff = () => {
	return`*「❗」NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*「🤔」Teks nya mana kak?*`
}

exports.clears = () => {
	return`*「🚮」Clear all Success*`
}

exports.pc = () => {
	return`*「❗」REGISTRASI*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender, botName) => {
	return`▬▭▬▭▬❰ *DONE* ❱▭▬▭▬▭\n║╭━⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱━╮\n║│【✿͜͡➳ *Nama : ${namaUser}*\n║│【✿͜͡➳ *Nomor : wa.me/${sender.split("@")[0]}*\n║│【✿͜͡➳ *Umur : ${umurUser}*\n║│【✿͜͡➳ *Waktu Pendaftaran : ${time}*\n║╰━⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱━╯\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n*「SN」: ${serialUser}*\n_Note jangan di hapus siapa tau penting :v_`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
▬▭▬▭▬❰ *BOT* ❱▭▬▭▬▭
║╭━⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱━╮
║│【✿͜͡➳ *Nama* : ${pushname}
║│【✿͜͡➳ *Nomor* : wa.me/${sender.split("@")[0]}
║│【✿͜͡➳ *Xp* : ${getLevelingXp(sender)}
║│【✿͜͡➳ *Level* : ${getLevel} 
║│【✿͜͡➳ *${getLevelingLevel(sender)}*
║╰━⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱━╯
▬▭▬▭▬▭▬▭▬▭▬▭▬
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*limit bisa di beli di *${prefix}atm* harga?? 1000 per 1 limit*`
}

exports.limitcount = (limitCounts) => {
	return`
▬▭▬▭▬❰ *BOT* ❱▭▬▭▬▭
║╭━⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱━╮
║│【✿͜͡➳ sisa limit anda : ${limitCounts}
║╰━⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱━╯
▬▭▬▭▬▭▬▭▬▭▬▭▬
limit bisa di beli di *${prefix}atm* harga?? 1000 per 1 limit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`▬▭▬▭▬❰ *BOT* ❱▭▬▭▬▭\n║╭━⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱━╮\n║│【✿͜͡➳ NAMA : ${pushname}\n║│【✿͜͡➳ NOMOR : ${sender.split("@")[0]}\n║│【✿͜͡➳ UANG : ${uangkau}\n║╰━⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱⋆⋆⃟⊱━╯\n▬▭▬▭▬▭▬▭▬▭▬▭▬`
}
