---
title: Weekly Update 2025 Week 22
published: true
date: 2025-06-02
---
## Shizuku on my phone

Finally bisa juga setup [Shizuku](https://github.com/RikkaApps/Shizuku). Setelah sebelumnya stuck parah soalnya searching pairing wireless ADB terus. Hal pertama yang dilakukan tentu saja debloat dulu. Aku melakukannya pakai `rish`, shell bawaan Shizuku yang bisa pakai command pm uninstall --user 0 app.pkg.name. Setelah kelar beberapa app, baru ketemu [Canta](https://github.com/samolego/Canta).

![Canta main screen](/assets/uploads/canta-main-screen.jpg)

Pakai Canta lebih enak rupanya karna ada UI dan app nya dikasih kategori begitu. Bisa di pilih mau tampilkan app kategori apa. Kalo di klik bisa muncul pop-up window yang berisi tentang app itu apa, aman ga dihapus, dan lain-lain.

![Canta uninstalled app screen](/assets/uploads/Canta-restore-screen.jpg)

Di halaman sebelahnya bisa liat aplikasi apa aja yang sudah dihapus. Terus bisa restore aplikasinya juga dengan tekan tombol floating di kanan bawah. Bisa diliat juga aku sudah menghapus 119 aplikasi. Sebanyak itu bloatware bawaan XOS.

## Bloatshit

Follow up soal debloat sebelumnya, 2 aplikasi bawaan dibawah ini ga bisa dihapus. Sebenarnya sih bisa tapi akan install ulang sendiri setelah restart.

![XOS protected apps](/assets/uploads/protected-app.jpg)

Sebagai catatan juga OOBE kalo dihapus bakal bikin status bar broken pas main game yang landscape. Sepertinya di tahap ini udah perlu root biar bisa dihapus ini protected app.

Database Canta di dapat dari [universal android debloater](https://github.com/Universal-Debloater-Alliance/universal-android-debloater-next-generation/blob/main/resources/assets/uad_lists.json).

## Shalltry tracker ?

Iseng dump pakai [PCAPdroid](https://github.com/emanuele-f/PCAPdroid) karena masih curiga, ternyata hampir tiap beberapa detik ada mengirim request ke 2 domain yaitu `gslb.shalltry.com` dan `ire-oneid.shalltry.com`.

![shalltry.com gslb and ire-oneid subdomain detail](/assets/uploads/ZomboDroid_03062025022801.jpg)

Di github banyak yang menambahkan domain ini ke project2 adblocker.

*   [https://github.com/badmojr/1Hosts/issues/583](https://github.com/badmojr/1Hosts/issues/583)
    
*   [https://github.com/notracking/hosts-blocklists/issues/777](https://github.com/notracking/hosts-blocklists/issues/777)
    
*   [https://github.com/jerryn70/GoodbyeAds/issues/313](https://github.com/jerryn70/GoodbyeAds/issues/313)
    
*   [https://github.com/AdAway/adaway.github.io/issues/339](https://github.com/AdAway/adaway.github.io/issues/339)
    

Sepertinya memang benar tracker. Bisa di block dengan memakai DNS resolver yang memakai [blocklist dari StevenBlack](https://github.com/StevenBlack/hosts), seperti misalnya [ControlD](https://controld.com/free-dns?freeResolverType=x-stevenblack&helpPane=dns) atau pakai langsung blocklistnya melalui aplikasi semacam Adaway atau NextDNS.

* * *

Kayaknya segitu dulu update buat minggu ini. Sebenarnya ini bukan update sih, lebih ke dokumentasi pribadi aja. Sampai jumpa di weekly update lainnya. Ciao.