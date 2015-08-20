---
layout: post
title: Penggunaan !important di CSS
tags: [css]
---
> Apakah pendeklarasian `!important` di CSS diperlukan?
> Apakah CSS kita akan 'bekerja' sesuai dengan yang kita inginkan kalau `!important` tidak dideklarasikan?

Jawabannya simple, **tergantung**. Pendeklarasian `!important` sebenarnya tidak terlalu diperlukan di beberapa bagian. Tapi di beberapa hal, memang terkadang harus dipergunakan. Misalnya di *utility classes* atau di *print style*.

*Important* artinya penting dalam bahasa indonesia. Buat yang belum tahu, `!important` di CSS biasanya dipergunakan untuk deklarasi style yang sifatnya sangat penting. Walaupun setelahnya ada pendeklarasian style yang juga mengubah *selector* yang sama. Mungkin agak susah dipahami, tapi sedikit contoh mungkin akan membantu.

## Tanpa `!important`

CSS

```css
h1 { color: #ff425f; }
.black-text { color: #000; }
```

HTML

```html
<h1 class="black-text">Test</h1>
```

Hasil:

![Tanpa !important](/assets/img/tanpa-!important.png)

## Dengan `!important`

CSS

```css
h1 { color: #ff425f !important; }
.black-text { color: #000; }
```

HTML

```html
<h1 class="black-text">Test</h1>
```

Hasil:

![Dengan !important](/assets/img/dengan-!important.png)

Pada contoh di atas, kita menyatakan bahwa *h1* hurufnya berwarna pink dan *black-text* hurufnya berwarna hitam. Saat kita menggunakan 2 *selector* tersebut di 1 elemen, keduanya bisa menghasilkan sesuatu yang berbeda.

Pada contoh pertama, warna pink di *h1* tidak 'bekerja' sesuai dengan yang kita nyatakan sebelumnya karena *class black-text* di deklarasikan setelahnya. Sehingga teks yang dihasilkan berwarna hitam.

Sedangkan pada contoh kedua, teks tetap berwarna pink karena kita mendeklarasikan `!important`. Walaupun setelahnya ada *class black-text* tapi karena pendeklarasian `!important` jadi teks tetap berwarna pink.

Pendeklarasian `!important` tidak diwajibkan. Bahkan menurut gue sangat tidak dianjurkan. Karena kalau setelahnya kita juga melakukan *styling* terhadap suatu elemen bisa saja deklarasi kita tidak dipergunakan oleh browser kecuali kita menyatakan `!important` di deklarasi kita.

Di beberapa hal, deklarasi `!important` memang kadang sangat diperlukan. Sejauh ini gue menggunakan `!important` di beberapa *utility class*. Beberapa contoh:

```css
.hidden, .visible-print { display: none !important; }
.list-no-style { list-style: none !important; }
```

Dan di *print style* juga diperlukan, agar saat di print deklarasi yang kita nyatakan memang benar-benar 'bekerja' sebagaimana mestinya, contoh:

```css
@media print {
  /* html5boilerplate */
  *,
  *:before,
  *:after {
    background: transparent !important;
    color: #000 !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
  img {
    max-width: 100% !important;
  }
  /* bootstrap */
  .hidden-print {
    display: none !important;
  }
  .visible-print {
    display: block !important;
  }
}
```

Sudah paham kan? Sebenarnya pertanyaan diatas mendadak muncul beberapa bulan yang lalu tapi baru bisa dituliskan sekarang karena agak susah juga untuk menjelaskannya. Setelah beberapa bulan, penjelasannya tetap aja berantakan. Mohon maaf ya kalau agak susah dipahami.
