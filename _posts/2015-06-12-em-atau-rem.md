---
title: "`em` atau `rem`"
tags: [front-end,css]
---

Sebelumnya, gue cuman tau pixel karena memang dulu pasar web untuk mobile memang tidak seganas sekarang. Karena sekarang pasar untuk platform mobile (smartphone, f ck u gre n r b ts), jadi penggunaan pixel untuk pengaturan ukuran sedikit kurang fleksibel. Ada 2 biji bocah yang lumayan bikin bingung, yaitu si `em` dan `rem`. Kali ini kita belajar dikit, biar kita bisa moveon dari pixel.

## `em`

*Relative sizing*. Keren banget istilahnya. Satuan `em` mungkin memang dianjurkan untuk *readability* yang lebih bagus, tapi penerapannya susah. Kalau di desain kita memang jarang terdapat elemen yang di *nesting*, mungkin tidak terlalu susah. Tapi kalo *nesting*, ~~sedikit~~ ribet. Buat yang belum *ngeh*, begini maksud gue *nesting*:

```html
<p>...<strong>nesting</strong>...</p>
<pre>
<code>
* {
  display: flex;
}
</code>
</pre>
```

Di masa-masa sekarang, hal ini lumrah. Misalnya aja Bootstrap:

```html
<div class="container">
  <div class="row">
    <div class="col-lg-6 col-md-8 col-sm-12">
      <p>bla bla bla</p>
    </div>
  </div>
</div>
```

Disini si `em` bisa jadi masalah, `em` kerjanya seperti mencari di *parent* terdekat dan kemudian mengambil nilai ukuran font yang bisa didapatkannya. Contoh:

```scss
body { font-size:62.5%; }
h1 { font-size: 2.4em; } // 24px
p  { font-size: 1.4em; } // 14px
```
dengan markup:

```html
<body>
  <h1>Titel</h1>
  <p>Bla bla bla</p>
</body>
```

Gampang. Simpel. Kalau memang kasusnya seperti itu. Bagaimana kalau markup seperti ini:

```html
<body>
  <h1>Titel</h1>
  <p>Tekan <kbd>Ctrl+Alt+T</kbd> lalu ketik di terminal <code>$ sudo apt-get update</code>. Kalau mau lebih cepat, langsung gabungkan 3 <em>command</em> berikut: </p>
  <pre>
  <code>
  $ sudo apt-get update && sudo apt-get upgrade && sudo apt-get dist-upgrade
  </code>
  </pre>
</body>
```

Bisa *styling* di `kbd`, `code`, `em`, atau di elemen `code` yang berada di dalam elemen `pre` ? Menurut gue ~~susu~~ susah. Karena setiap elemen yang berada di dalam tag `<p>` akan selalu menggunakan ukuran font yang kita deklarasikan di elemen tersebut. Singkatnya, `em` akan selalu meng-inherit ukuran di *parent*.

> Lalu gimana? Pixel kurang fleksibel dan penerapan `em` agak susah.

Makanya, `rem` dilahirkan.

**Jreeeeeeeeeeng !!!**

Anggap aja ada karnaval lewat dulu.

## `rem`

`rem`, *root em*, akan selalu melakukan inherit terhadap *root elemen*, yaitu `<html>`. Kebanyakan di css, html akan di set menggunakan `font-size: 62.5%;` jadi setelahnya tetap sama, `1rem` sama dengan `10px`. Begini misalnya:

```scss
html { font-size: 62.5%; }
body { font-size: 1.4rem; } // 14px
h1 { font-size: 2.5rem; }   // 25px
```

Mungkin membingungkan, terlihat sama seperti menggunakan `em`, tapi dengan menggunakan `rem`, kita tidak perlu membongkar css kita hanya untuk mengubah ukuran font, tambah aja nilai persen di `html` lalu cek.

Gampang. Simpel.

## Colophon

Satu-satunya sumber yang menjelaskan dengan bahasa indonesia yang mudah dipahami: ~~praktisiweb.com/font-sizing-dengan-rem/~~ Link down :cry:. Sumber luar yang lumayan komplit penjelasannya bisa baca [disini](https://j.eremy.net/confused-about-rem-and-em/).

*note:* awalnya berusaha mengingat arti *inherit* tapi gagal. Akhirnya ke Google Translate dan artinya adalah...

![Arti inherit](/assets/post-img/2015-06-12_16-14-32.webp)

Aneh
