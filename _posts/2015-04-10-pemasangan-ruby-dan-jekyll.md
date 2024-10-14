---
title: Pemasangan Ruby dan Jekyll
date: 2015-04-10
tags: [jekyll,ruby]
---

Seperti yang gue bilang di post sebelumnya, bahwa gue akan memberikan tutorial tentang cara install **Ruby** dan **Jekyll**. Sebelum kita melangkah ke perjalanan yang lebih jauh, tutorial gue lebih cocok sama yang menggunakan Linux, Ubuntu lebih tepatnya, atau **Lubuntu** lebih tepatnya lagi. Untuk pengguna Mac dan sejenisnya, mungkin kalian bisa menggunakan **Homebrew** tapi cara pemasangannya ga bisa gue jelasin karena gue ga punya Mac. Untuk pengguna Windows dan sejenisnya, ke Google aja ya.

Jadi pada tutorial kali ini (dan mungkin juga untuk seterusnya), gue cuma coba di Lubuntu, kemungkinan besar juga bisa untuk sesama jenisnya (Ubuntu, Xubuntu, Ubuntu GNOME, dan lain-lain). Buat kalian yang memakai sistem operasi yang lain, bisa diikuti atau cari tutor untuk sistem operasi kalian. Mohon maaf.

Pada dasarnya pemasangan Ruby pada Ubuntu lumayan mudah. Lewat terminal juga bisa. Lalu selanjutnya kita perlu JavaScript runtime, yang paling terkenal adalah [Nodejs](https://nodejs.org).

## Keperluan
- PC, laptop, netbook, smartphone, intinya perangkat yang menggunakan sistem operasi Ubuntu atau sejenisnya
- Koneksi internet
- Imajinasi

## Langkah-langkah

Menginstal ruby, ruby-dev, bundler, dan nodejs

Kecuali Nodejs, semuanya tersedia di *official repository* Ubuntu. Untuk Nodejs bisa menggunakan [PPA chris lea](https://launchpad.net/~chris-lea/+archive/ubuntu/node.js/ "node.js : chris lea"). Kita perlu menambahkan PPA tersebut ke repo list kita. Simple aja, lewat terminal:

```bash
$ sudo add-apt-repository ppa:chris-lea/node.js
```

Kita update lalu kita instal semuanya langsung

```bash
$ sudo apt-get update
$ sudo apt-get install synaptic ruby ruby-dev bundler nodejs
```

Selanjutnya, pasang Jekyll

```bash
$ sudo gem install jekyll
```

Selesai. Tinggal kita siapkan foldernya

```bash
$ jekyll new NAMA_FOLDER
$ cd NAMA_FOLDER
$ jekyll serve
```

**Perhatikan,** `NAMA_FOLDER` itu terserah kalian.

Sekarang buka browser, lalu di *address-bar* masukkan `localhost:4000`.

Kalau kalian punya masalah, silakan jelaskan permasalahan kalian di kolom komentar.
Selanjutnya gue akan membahas tentang hosting untuk Jekyll. Sebenarnya banyak alternatif yang bagus, tapi gue hanya akan membahas tentang cara hosting Jekyll di Github karena gratis, mudah diurus, dan mendukung *custom domain*.

Oke sekian dulu. Kita akan jumpa lagi di tulisan yang lain.

Ciao
