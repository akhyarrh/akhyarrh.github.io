---
title: Ekperimen Pertama dengan Flexbox
tags:
  - css
  - desain
  - eksperimen
  - flexbox
---

Eksperimen pertama dengan `flexbox`. Awalnya agak susah memahami `flex-direction`. Setelah beberapa kali *trial & error*, akhirnya sukses juga. Bagian susahnya adalah awalnya bingung dengan markup dan CSS. Karena `flexbox` memang benar-benar sebuah modul CSS yang baru.

<!--more-->

Biar nanti tidak bingung, akan saya jelaskan sedikit mengenai `flexbox`.

![Flexbox](/assets/img/flexbox.png)

Bagian yang perlu diperhatikan adalah `main axis`, `main start`, dan `main end`. Sifat ketiga elemen ini (bersama dengan 3 elemen `cross`) benar-benar sangat fleksibel. `main axis` bisa dari kiri ke kanan, kanan ke kiri, atas ke bawah, atau bawah ke atas.

Saya akan bahas mengenai `cross` lain kali, kali ini saya fokus ke `main`.

Berikut demo dari gist yang saya buat. Perhatikan HTML dan konten hasil render.

<p class="sassmeister" data-gist-id="a88d1a8d9c8c8a562835" data-height="400" data-theme="tomorrow">
  <a href="http://sassmeister.com/gist/a88d1a8d9c8c8a562835">Play with this gist on SassMeister.</a>
</p>
<script src="//cdn.sassmeister.com/js/embed.js" async></script>

**Note: kalau embed tidak terbuka di Firefox, silakan buka di Chrome.**

Sedikit penjelasan, cek tab HTML line 9-12 dan line 14-17.

```html
<!-- tab HTML, line 9-12 -->
<div class="row">
  <p class="bg-aqua">flow-direction</p>
  <p class="bg-navy">row</p>
</div>
```

```html
<!-- tab HTML, line 14-17 -->
<div class="row-reverse">
  <p class="bg-aqua">row-reverse</p>
  <p class="bg-navy">flow-direction</p>
</div>
```

Sekarang cek tab Result, hasilnya markup di line 14-17 dirender terbalik. Tidak ada yang salah, itu memang benar. Hal itu disebabkan CSS berikut:

```css
/* tab CSS, line 31-34 */
.row-reverse {
  display: flex;
  flex-direction: row-reverse;
}
```

Sedangkan CSS untuk markup line 9-12:

```css
/* tab CSS, line 26-29 */
.row {
  display: flex;
  flex-direction: row;
}
```

Perhatikan properti `flex-direction`, `main axis` diatur disini dan sifatnya fleksibel. Tergantung kondisi `flow container` (elemen yang memiliki properti `display: flex`). Jika `display: flow` maka di `ltr` (left to right) *flow* `main axis` dari kiri ke kanan. Jika di `rtl` (right to left), maka *flow* `main axis` dari kanan ke kiri.

Bagian paling pentingnya adalah memahami jika `flex-direction` menggunakan properti yang sifatnya 'membalik' posisi elemen. Jika `row-reverse` atau `column-reverse` maka elemen disusun dari `main end` ke `main start`.

Masih bingung ? Silakan hubungi via [Email](mailto:akhyarrh@gmail.com) atau [Twitter](https://twitter.com/akhyarrh). Eksperimen saya di atas bisa [clone di Gist](https://gist.github.com/akhyarrh/a88d1a8d9c8c8a562835) atau langsung [mainkan di SassMeister](http://sassmeister.com/gist/a88d1a8d9c8c8a562835).

Ciao.
