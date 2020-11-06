---
title: Cara Mudah Embed Video di Jekyll
tags: [jekyll, tips]
---

Memasukkan sebuah video ke post memang hal yang sangat umum dilakukan. Selain memberikan konten yang lebih beragam biar tidak bosan, dengan adanya video juga bisa memperjelas maksud dari post tersebut. Hampir semua CMS memberi support untuk memasukkan video ke dalam sebuah post.

Jekyll pun seperti itu. Memasukkan video ke post di Jekyll memang kebanyakan menggunakan plugin. Apalagi untuk video yang responsif. Sayangnya untuk yang hosting Jekyll di GitHub penggunaan plugin dilarang karena alasan keamanan.

Tapi masalah yang saya jelaskan di atas sudah saya temukan solusinya. *Workaround* yang dipergunakan adalah menggunakan fitur `include` di Jekyll. Di post Adam Harris yang linknya tersedia di bagian akhir post ini menggunakan file bernama `YoutubePlayer.html`, tapi saya ganti nama filenya menjadi `youtube` untuk lebih mudah dipergunakan walau kehilangan *syntax highlight* di editor. Berikut adalah isi dari file `includes/youtube` yang saya pergunakan:

```html
{% raw %}
<!-- _includes/youtube -->
<div class="embed-container">
  <iframe src="//www.youtube.com/embed/{{ include.id }}"></iframe>
</div>
{% endraw %}
```

Untuk penjelasan mengenai *mark-up* HTML di atas bisa [kesini](https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php).

Singkatnya, pengaturan tinggi dan lebar diatur dengan CSS di *parent element* yaitu `<div>` yang diberi `class="embed-container"`. Lalu iframe yang berada di dalam *parent element* dibuat full dengan `height: 100%` dan `width: 100%`.

Lalu `{% raw %}{{ include.id }}{% endraw %}` dipergunakan agar bisa menggunakan `{% raw %}{% include...id="blablabla" %}{% endraw %}`

Untuk menggunakannya di post yang ingin kita tambahkan video, kita tinggal melakukan `{% raw %}{% include youtube id="$YOUTUBE-VIDEO-ID" %}{% endraw %}` dimana `$YOUTUBE-VIDEO-ID` adalah id dari video yang ingin kita masukkan. Misalnya untuk memasukkan video [Hardwell On Air 236](https://www.youtube.com/watch?v=qCnzav6tFfY) bisa melakukan cara berikut:

```
{% raw %}
{% include youtube id="qCnzav6tFfY" %}
{% endraw %}
```

Gampang atau mudah ?

Cara ini tidak hanya untuk video yang berasal dari YouTube, tapi juga untuk layanan lainnya. Misalnya untuk Vimeo bisa menggunakan *mark-up* berikut:

```html
{% raw %}
<!-- example: _includes/vimeo -->
<div class="embed-container">
  <iframe src="//player.vimeo.com/video/{{ include.id }}"></iframe>
</div>
{% endraw %}
```

Lalu lakukan *embed* di post:

```
{% raw %}
{% include vimeo id="$VIMEO-VIDEO-ID" %}
{% endraw %}
```

## Colophon

Bisa dibilang saya ambil dari post Adam Garrett-Harris. Saya edit sedikit biar lebih gampang dipergunakan. Langsung aja ke [post asli](https://adam.garrett-harris.com/2015-04-04-how-to-easily-embed-youtube-videos-in-jekyll-sites-without-a-plugin/) kalau mau baca versi aslinya.

Sebagai penutup, selamat menikmati Hardwell On Air episode 236.

<!-- include youtube id="qCnzav6tFfY" -->
