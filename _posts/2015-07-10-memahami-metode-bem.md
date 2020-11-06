---
title: Memahami Metode BEM
tags: [front-end, tips]
---

> Kenapa di beberapa file penamaan class-nya banyak menggunakan -- atau __ ?

Dasarnya ada beberapa dan sedang saya coba terapkan:

- [BEM](http://bem.info/)
- [Post Nicolas Gallagher](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)
- [Artikel di CSSwizardry](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

Sebenarnya hanya berusaha mengubah kebiasaan lama. Sebelumnya terbiasa memakai penamaan `class` yang kurang *semantic*, misalnya;

```html
<nav class="main-nav">
  <ul>
    <li class="item"><a href="#">Item 1</a></li>
    <li class="item"><a href="#">Item 2</a></li>
    <li class="item"><a href="#">Item 3</a></li>
  </ul>
</nav>
```

Perhatikan. Tidak ada yang salah memang, tapi bagian susahnya adalah keterkaitan `item` dengan `main-nav` yang kurang mudah dipahami. `item` yang terletak didalam `<nav>` atau `.main-nav` bisa apa saja. Logo, *search form*, *dropdown*, dan lain-lain. Kalau kita melihat CSS yang menjadi alasan *markup* diatas mungkin bisa dipahami, Tapi bagaimana kalau kita cuma membaca HTML-nya?

Makanya terciptalah BEM oleh Yandex. BEM (*block*, *element*, *modifier*) mengenalkan metode penamaan yang sedikit susah untuk diterapkan tapi lumayan mudah untuk dipahami. Berikut adalah contoh berdasarkan contoh di atas menggunakan *syntax* SCSS:

```scss
.main-nav {
  background-color: #333;

  &__logo {
    display: inline-block;

    &--on-right {
      float: right;
    }
  }
}
```

SCSS diatas jika di *compile* maka hasilnya seperti berikut:

```css
.main-nav {
  background-color: #333;
}
.main-nav__logo {
  display: inline-block;
}
.main-nav__logo--on-right {
  float: right;
}
```

dan berikut adalah *markup* yang bisa kita buat:

```html
<nav class="main-nav">
  <img class="main-nav__logo" src="...">
    ...
</nav>
```

atau bisa juga seperti berikut:

```html
<nav class="main-nav">
    ...
  <img class="main-nav__logo--on-right" src="...">
</nav>
```

Dari kedua contoh di atas, kita bisa memahami bahwa `main-nav__logo` adalah elemen dari `main-nav` dan `main-nav__logo--on-right` adalah variasi dari `main-nav__logo` yang terletak di kanan.

Alasan kenapa menggunakan `--` atau `__` bisa dilihat pada contoh di atas, `main-nav` lebih baik daripada `mainnav` kan?.

Contoh dari saya masih berantakan, dan mungkin BEM memang terlihat agak aneh dan dalam penerapannya memerlukan pengetikan yang lebih banyak. Lagipula tidak semuanya harus menggunakan metode BEM. Misalnya:

```css
.text-left   { text-align: left;   }
.text-center { text-align: center; }
.text-right  { text-align: right;  }
```

Beberapa contoh di atas sifatnya *helper-classes* dan berdiri sendiri.

Berikut sedikit kutipan dari CSSwizardry mengenai penerapan BEM:

> One of the hardest parts of BEM is deciding when to start and stop scope, and when (or not) to use it. It’s a case of ‘you’ll just know when you know’.
>
> <cite>CSSwizardry</cite>

Menurut pendapat saya pribadi, BEM lebih berguna untuk *styling* di elemen yang sifatnya variasi dari elemen lain. Misalnya seperti berikut:

```css
.button { }
.button--yellow { }
.button--red { }
```

Kita bisa memahami bahwa `.button--yellow` dan `.button--red` adalah variasi lain dari `.button` tapi sifatnya tidak terlalu khusus dan tetap *reusable*.

*Well*, intinya semua kembali ke keperluan kita. Menurut saya kalau kalian menggunakan *framework* CSS yang kalian bangun sendiri, maka tetap jaga agar struktur CSS kalian *reusable* dan jaga prinsip DRY lalu nanti terapkan BEM untuk menerapkan *style* sesuai keperluan.
