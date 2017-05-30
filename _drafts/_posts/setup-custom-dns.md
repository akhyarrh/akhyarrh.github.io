---
title: Mengubah DNS di Linux
tags:
- linux
- tips
date: 2017-05-31 19:00
published: true
layout: post
---
Cara ini sudah sangat lama saya pergunakan. Jadi kalau misalnya tidak bekerja dengan benar atau ada kesalahan, hubungi saya di [Twitter](https://twitter.com/akhyarrh) atau lewat [email](mailto:akhyarrh@gmail.com).

Catatan: cara ini **hanya untuk pengguna Linux** (Mac mungkin juga bisa). Sudah saya coba di Lubuntu 14.04 dan Mint 17.2. Untuk pengguna Windows, silakan melakukan browsing untuk mencari caranya.

<!--more-->

## Steps

### Backup

```sh
sudo cp /etc/dhcp/dhclient.conf /etc/dhcp/dhclient.conf.bak
```

### Edit

```sh
sudo nano /etc/dhcp/dhclient.conf
```

Masukkan setting berikut di bagian paling bawah, IP DNS disesuaikan dengan yang ingin kalian pergunakan. Dalam contoh ini, saya akan menggunakan Public DNS Google

```
# IPv4
supersede domain-name-servers 8.8.8.8, 8.8.4.4;
# IPv6
supersede domain-name-servers 2001:4860:4860::8888, 2001:4860:4860::8844;
```

### Simpan

Tekan <kbd>Ctrl</kbd> + <kbd>X</kbd>, <kbd>Y</kbd>, <kbd>Enter</kbd>.

### Toggle networking

Sebenarnya di beberapa tutorial, disarankan untuk melakukan reboot, tapi menurut saya melakukan toggle lebih cepat.

Sederhana saja caranya matikan jaringan internet, lalu nyalakan lagi. Hubungkan kembali jaringan internetnya.

## Test

Cara paling gampang untuk melakukan test apakah DNS berganti atau tidak adalah lewat terminal.

Buka terminal (<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd>)

Jalankan command `nm-tool`.

![Contoh output nm-tool](/assets/img/Screenshot_2015-10-07_16-42-30.png)

## Colophon

- [Free and Public DNS Servers](http://pcsupport.about.com/od/tipstricks/a/free-public-dns-servers.htm)
- [Top 5 Free Public DNS Servers](http://www.thegeekyglobe.com/top-5-free-public-dns-servers.html)
- [Public DNS di Google Developers](https://developers.google.com/speed/public-dns/docs/using)