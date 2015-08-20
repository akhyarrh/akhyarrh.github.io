---
title: "Mengenal Jekyll"
tags: [jekyll]
---
Beberapa minggu belakangan, terhitung sejak awal masa liburan, gue main-main sama [**Jekyll**](http://jekyllrb.com "Jekyll") dan [**SASS**](http://sass-lang.com "SASS"). Jekyll pada dasarnya bukan blogging platform, bukan juga CMS, tetapi *static site generator*. Fungsinya simple, mengubah apapun yang ada dan dia bisa, jadi sebuah HTML. Simple banget memang, kalo bikin HTML siapapun yang paham apa dasar HTML juga bisa.

<!--more-->

HTML pada dasarnya bisa dikuasai semua orang. Contohnya, coba bikin file, nama terserah, ekstensinya `.html`. Contoh ya gue bikin file namanya `test` dan ekstensinya `.html`. Jadi nama filenya `test.html`. Lalu masukkan kode berikut:

```html
<html>
  <head>
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

Lalu drag file tersebut ke browser dan itu udah jadi. Simple kan ?

"Lalu bergunanya Jekyll dimana lut ?"

<blockquote>
<p>Its 2014, dude. Woman are smart now.</p>
<footer>Dave Skylark</footer>
</blockquote>

Begitu juga html, dan css, dan javascript, atau web lebih tepatnya.
Sekedar info bagi kalian yang lebih suka baca dan lupakan, blog yang sementara ini masih simple memiliki banyak baris kode hanya untuk tampilannya. Pernah mikir berapa baris kode HTML yang dimiliki situs-situs kompleks macam [Github](https://github.com/"Github"), [Twitter](https://twitter.com/"Twitter"), [Google](https://google.com/"Google"), atau yang lain ?

Disinilah Jekyll berguna. Coba pikir aja, kalo misalnya kita ingin membuat web yang *responsive*, maka paling engga untuk sebaris menu di header untuk di laptop, lalu jadi horizontal di tablet/smartphone, kodenya kan panjang. Kalo menggunakan Jekyll, bikin aja file bernama `navbar.html` di folder `_includes` lalu masukkan di default layout dengan cara `(% include navbar.html %)`, Selesai.
Simple kan ?

Lalu tampilan setiap halaman juga bisa di set. Misalnya gue set cuman di setiap post boleh berkomentar.
Simple kan ?

Postingan ini hanya sebagai pengenalan aja bahwa sebenarnya blogging itu ga perlu *platform* yang powerpol. Karena kita fokus ke konten, tampilan yang simple dan ringan menurut gue penting.

Selanjutnya akan gue jelasin tentang penginstalan. Jekyll pada dasarnya perlu **Ruby**, info lebih lanjut tersedia di [Situs Ruby](https://www.ruby-lang.org/en/ "Ruby Programming Language") dan di [Wikipedia tentang Ruby (programming language)](https://en.wikipedia.org/wiki/Ruby_(programming_language) "Ruby (programming language)").

Ciao
