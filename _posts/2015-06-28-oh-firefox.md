---
title: Oh Firefox
tags: [browser,firefox, chrome]
---

Sebelum mulai, ada beberapa hal yang harus kalian perhatikan sebelum baca lebih lanjut, diantaranya:
1. Saya akan melakukan tes di 2 browser yang penggunanya lumayan banyak, **Google Chrome** dan **Mozilla Firefox**.
2. Versi Chrome: **44.0.2403.61 Beta**. Versi Firefox: **Developer Edition 40.0a2 (2015-06-03)**.
3. Kalau kalian menggunakan versi yang **_stable_**, mungkin akan beda.
4. Saya adalah fans Mozilla, karena mereka pada dasarnya bukan perusahaan.
5. Sejak awal 2012 saya beralih ke Chrome karena Firefox mulai agak lambat saat itu.
6. Tes yang dilakukan adalah tes dukungan terhadap **HTML5** dan **CSS3**.
7. Tes dilakukan dengan mengunjungi [HTML5test][html5test] dan [CSS3test][css3test]

![Chrome version used](/assets/post-img/chrome-version-tested.webp)

![Firefox version used](/assets/post-img/firefox-version-tested.webp)

## HTML5 Test
### Chrome
![Chrome HTML5 Test Result](/assets/post-img/chrome-html5test-result.webp)

### Firefox
![Firefox HTML5 Test Result](/assets/post-img/firefox-html5test-result.webp)

## CSS3 Test
### Chrome
![Chrome CSS3 Test Result](/assets/post-img/chrome-css3test-result.webp)

**Note:** berdasarkan catatan kecil di [css3test][css3test], Webkit (_engine_ yang digunakan Chrome, Opera, Safari) sebenarnya tidak mendukung `background-repeat`.

### Firefox
![Firefox CSS3 Test Result](/assets/post-img/firefox-css3test-result.webp)

## Kesimpulan
Chrome mungkin lebih baik dalam hal dukungan terhadap HTML5. Tapi jujur aja kalau kalian mencari lebih jauh, dukungan Firefox terhadap HTML5 itu juga bagus karena Chrome selain juga mendukung elemen-elemen yang direkomendasikan juga mendukung elemen-elemen yang belum direkomendasikan (sifatnya masih _draft_ dan lain sebagainya). Sedangkan Firefox mungkin memang kurang mendukung HTML5 tapi elemen-elemen yang sudah di rekomendasikan sudah mereka _support_.

Di tes terhadap _support_ untuk CSS 3, Chrome kalah, padahal udah curang. Firefox lebih baik dalam hal ini.

Sejak awal 2014, saya mencoba beralih ke Firefox tapi selalu saja ada kendala. Lambat, kadang crash, pemasangan _add-on_ yang ribet karena kadang harus _restart_ Firefox, dan yang terbaru adalah animasi yang sangat tidak berguna saat berpindah tab.

![Spinner on latest Firefox](/assets/post-img/oooh.webp)

Pada akhirnya, sampai saat ini masih bersabar untuk menggunakan Chrome. Semoga aja nanti Mozilla berhenti melakukan hal tidak berguna seperti _spinner_ tersebut dan fokus untuk memperbaiki performa dan memperbaiki pengalaman pengguna saat menggunakan Firefox.

Sebagai penutup, entah sampai kapan harus bersabar untuk menggunakan Chrome.

Oh Firefox. Tolong jadilah teman yang baik nanti.

[html5test]: https://html5test.com
[css3test]: http://css3test.com
