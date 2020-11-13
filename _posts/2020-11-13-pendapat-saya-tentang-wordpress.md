---
published: true
date: '2020-11-13 19:00 +0800'
title: Pendapat Saya Tentang Wordpress
categories:
  - 30 Days Writing Challenge
tags:
  - catatan
  - web
  - wordpress
image: /assets/uploads/markus-winkler-3hBH-ZuvppU-unsplash.jpg
---
Setelah sebelumnya saya membahas tentang blogging secara umum dan Medium, Sekarang saya akan beralih ke  pembahasan mengenai blogging engine yang self-hosted. Kali ini saya secara khusus membahas mengenai [Wordpress.org](https://wordpress.org/), bukan [Wordpress.com](https://wordpress.com/). Walau perbedaannya mungkin terlihat hanya sebatas itu, tapi self-hosted Wordpress jauh lebih powerfull daripada Wordpress yang tersedia sebagai service.

> WordPress is open source software you can use to create a beautiful website, blog, or app.

Sesuai dengan tagline mereka, Wordpress adalah aplikasi open-source untuk membuat website, blog, dan aplikasi (?). Mungkin ini terdengar lucu tapi saya akan mencoba jelaskan.

Wordpress walau pada intinya memang untuk membuat website, tapi pada dasarnya semua konten tersimpan di database, lalu konten tersebut digunakan Wordpress untuk membuat halaman website, menggunakan bahasa program bernama PHP. Nah selain itu, Wordpress juga menyediakan API untuk dipergunakan sebagai cara antara pihak ketiga untuk berkomunikasi dengan mereka.

```txt
 _________          ___________         _________
|          |       |           |       | HTML    |
| Database | ----- | Wordpress | ----- | untuk   |
|__________|       |___________|   ↑   | Browser |
                    ↑              |   |_________|
                    ↓              ↓
                  ______      ___________
                 |  API |    | Antarmuka |
                 |______|    |    CMS    |
                             |___________|
```

Walau terlihat agak susah dipahami, tapi memang seperti itulah alur kerjanya. Tolong kalau salah mohon koreksi di komentar :smile:.

Saya akan bahas di tulisan nanti tentang bagaimana browser bekerja, tapi pada dasarnya browser hanya bisa menampilkan website menggunakan HTML, CSS, Javascript. Nah posisi Wordpress adalah sebagai 'jembatan' antara database dengan browser dan juga pihak ketiga, secara singkatnya seperti itu.

Walau terlihat sederhana, tetapi karena memerlukan database dan juga server, maka pada umumnya perlu biaya untuk mengoperasikan website yang menggunakan Wordpress. Selain itu juga servernya harus cukup kuat karena Wordpress akan berkomunikasi terus-menerus dengan database.

## Kemudahan

Apakah Wordpress saya rekomendasikan ? Tentu. Kalau seandainya tidak ada masalah dengan biaya dan manajemen seperti melakukan update terhadap Wordpress dan plugin yang dipakai. Selain itu, Wordpress sudah lumayan lama eksis sebagai salah satu CMS yang paling banyak dipakai. Selain tentunya ada Drupal dan Joomla.

Banyak tutorial yang bertebaran dimana-mana. Sehingga waktu yang diperlukan untuk mempelajari Wordpress tidak terlalu butuh waktu lama, tergantung sejauh apa kita mau mendalaminya. UI di CMS nya pun juga mudah untuk dipahami. Masing-masing bagian memiliki keterangan masing-masing. Sehingga untuk pemula untuk menggunakan Wordpress masih bisa dibilang mudah.

## Mahal

Kalau soal biaya operasional, menurut saya tergantung. Semuanya kembali ke awal, mau membuat website yang seperti apa, target market seluas apa, mau website yang kerjanya seperti apa. Banyak pertimbangan dan perhitungan dulu sebelum memutuskan memilih server lalu plugin apa saja yang mau digunakan.

## Keamanan

Wordpress yang alur kerjanya seperti yang sudah saya gambarkan diatas, memang pada dasarnya semua tersimpan di 1 tempat yang bernama server. Walau dulu banyak isu bertebaran yang bilang Wordpress rentan di hack, tapi faktanya sampai saat ini Wordpress masih eksis dan tetap populer.

Secara natural karena Wordpress itu open-source, hampir setiap celah keamanan selalu bisa diperbaiki disetiap update. [Kode yang digunakan oleh Wordpress tersedia di Github](https://github.com/WordPress/wordpress-develop) dan siapapun di seluruh dunia bisa mengirim patch kalau ada celah keamanan, perbaikan bug, improvisasi, fitur baru, dan lain-lain.

Kalaupun Wordpress tidak aman, mungkin seperti [kata Chris Coyier di sini](https://css-tricks.com/wordpress-and-jamstack/) apakah sebenarnya yang membuat tidak aman itu memang Wordpress atau dari penggunanya. Apakah cara kita menggunakan Wordpress sudah aman, apakah kita selalu melakukan update setiap ada notifikasi versi baru, dan lain sebagainya. Mungkin sebenarnya memang kita saja yang belum menggunakannya dengan cara yang aman.

Kalau terjadi hack, lalu Wordpress tidak ada memberi notifikasi (via email atau sosial media), apakah server tempat kita hosting sudah benar-benar keamanannya sesuai dengan standar minimum untuk mengoperasikan Wordpress.

## API

Mungkin inilah salah satu kelebihan Wordpress. Dengan adanya API di sisi internal maupun eksternal, membuat Wordpress bisa memberikan kustomisasi hampir disemua sisi. Entah berapa banyak plugin-plugin untuk Wordpress yang [bisa dilihat disini](https://wordpress.org/plugins/). Secara natural pada dasarnya fungsi plugin bisa untuk bermacam-macam tujuan. Untuk SEO, ada Yoast. Toko online, ada WooCommerce. Mau kirim notifikasi setiap ada artikel baru ? Bisa. Kirim tweet ke Twitter ? Bisa. Mengambil data foto dari Instagram untuk bikin galeri ? Bisa. Dari Flickr, Imgur, atau yang lain ? Bisa.

Dari sisi eksternal, mungkin bisa dikatakan API Wordpress kebanyakan hanya dipergunakan oleh para pengembang yang ingin memakai konten dari instalasi Wordpress yang sudah ada terlebih dulu. Entah untuk keperluan apapun, bahkan data dari Wordpress bisa digunakan untuk membuat website lagi. Konten-ception :laughing:.

Singkatnya karena hampir di semua proses yang dilakukan Wordpress, plugin bisa melakukan hooking, atau mungkin dengan istilah yang lebih mudah dipahami, **Nebeng**. Misalnya saat Wordpress sedang menyusun konten untuk navigasi, plugin bisa ikut dalam proses tersebut lalu juga bisa melakukan berbagai hal. Menambahkan ikon, menambahkan item tambahan untuk navigasi, menambahkan markup tambahan, dan sebagainya.

## Aplikasi untuk membuat aplikasi

Mungkin ini terdengar sedikit aneh, tapi mungkin untuk lebih mudah dipahami, software untuk mendukung software lainnya. Software apa ? Bebas. Imajinasikan saja apa yang kita inginkan dari sebuah website, lalu coba cari di Google. Kalau tidak ditemukan itu berarti belum ada saja yang kepikiran untuk membuat pluginnya :laughing:.

Umumnya karena Wordpress pada dasarnya untuk membuat website, maka biasanya digunakan untuk membuat artikel, lalu artikel tersebut akan dibagikan ke berbagai channel, mulai dari ke newsletter, sosial media, ke aplikasi android, feed reader, feed hub, dan sebagainya.

---

I do love working and writing on Wordpress. Bahkan sejak mengenal Markdown, dan belum adanya support untuk Markdown di Wordpress, tinggal bikin saja menggunakan tool lain, lalu import ke Wordpress, setelahnya bersiap memperbaiki error kalau ada. Kalau sudah selesai, publish.

Sekarang Wordpress sudah mendukung Markdown, walaupun mungkin via plugin, tapi seingat saya plugin tersebut pun sudah mendukung hampir semua fitur Markdown. Bahkan setahu saya banyak fitur PHP Markdown extra yang di port ke platform lain. Saat ini, standar (atau biasa juga disebut *specification* atau singkatnya *spec* saja) untuk Markdown yang paling banyak diimplementasikan adalah spec [CommonMark](https://commonmark.org/). Nanti akan saya bahas tentang Markdown dan kenapa mudah untuk dibaca dan dipergunakan untuk membuat berbagai dokumen.

---

Sepertinya ini sudah terlalu panjang untuk bisa disebut sebuah catatan. Sampai jumpa di tulisan selanjutnya :wave:.

Tambahan: diagram diatas jelek rupanya. Nanti cari cara bisa tidak susah kalo mau buat diagram pakai Jekyll. Seingat saya ada plugin yang bernama jekyll-spaceship.

Tambahan kedua: nanti mau menambahkan widget Google Translate biar pembaca dari luar Indonesia bisa baca juga, itu pun kalau ada :laughing:.

Tambahan ketiga: sebenarnya saya ingin membahas tentang [Hashnode](https://hashnode.com) sebagai alternatif daripada Medium, tapi sesuai deskripsi di website mereka: "Hashnode is a free content creation platform and community that allows you to publish articles on your own domain and helps you stay connected with a growing developer community". Yep fokusnya mungkin ke komunitas para developer. Juga belum ada dukungan untuk bahasa selain English nampaknya :disappointed_relieved:

---

## Referensi

- [Wordpress](https://wordpress.org/)
- [Wordpress API](https://codex.wordpress.org/WordPress_APIs)
- [Yoast](https://yoast.com/)
- [WooCommerce](https://woocommerce.com/)
- [CSS-Tricks - WordPress and Jamstack](https://css-tricks.com/wordpress-and-jamstack/)
