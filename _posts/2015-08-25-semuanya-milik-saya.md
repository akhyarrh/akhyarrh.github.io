# Semuanya Milik Saya

Masalah lama sebuah situs yang statis: **commenting system**. Itulah alasan kenapa dulu saya sempat menggunakan [komments](https://komments.net). Support markdown dan code block. Sempurna. Awalnya saya pikir bagus, tapi masalahnya adalah JavaScript. Di satu sisi hanya JavaScript satu-satunya alternatif untuk 'menghadirkan' konten yang dinamis di situs yang statis, tapi di sisi lain saya bukan fans JavaScript.

Pilihan lama datang, [Disqus](https://disqus.com). Saya kembali bingung. Disqus memang bagus, bahkan menurut saya mendekati sempurna. Hanya saja, Disqus tidak *open-source*.

> But there is one problem: Disqus isn’t open source. So we have all these hackers rushing to switch their blogs over to static site generators with Disqus comments, which is effectively an exodus from completely free systems like WordPress to proprietary systems like Disqus.
>
> <cite><a href="http://dumbmatter.com/2011/08/jekyll-and-other-static-site-generators-are-currently-harmful-to-the-free-open-source-software-movement/">Jeremy Scheff</a></cite>

Lagi-lagi saya memilih untuk mencari alternatif lain.

Alternatif kedua: **self-hosted**. Dengan alternatif ini, semua data adalah punya saya. Saya bisa menjamin semua data kalian yang ada di saya akan aman. Pilihan pertama adalah [Juvia](https://github.com/phusion/juvia). Kesan pertama, namanya cantik. Jadi kepikiran nanti kalau punya anak perempuan akan saya kasih nama Juvia. Ruby on Rails (?) seingat saya. Alasan saya tertarik adalah karena Rails. Saya tertarik untuk belajar Rails, walau saat ini masih berjuang mendapatkan resource yang mudah untuk dipelajari dan dipahami.

Pilihan kedua: [HashOver](https://github.com/jacobwb/hashover-next). Kali ini PHP. Sangat populer dan mudah untuk mendapatkan resource sebagai bahan pembelajaran. Di Indonesia mungkin sangat banyak resource untuk belajar PHP tanpa perlu mencari resource dari luar.

Masalah yang paling utama dari self-hosted adalah... **BERLEBIHAN!**. Coba saja pikirkan, ini cuma blog yang simpel. Sampai saat ini GitHub sudah memberi lebih dari cukup dengan [GitHub pages](https://pages.github.com). Kalaupun saya memang harus membeli sepaket shared hosting atau bahkan VPS, tapi yang saya perlukan cuma PHP, sedangkan Ruby (Rails) tidak saya temukan di paket hosting yang ditawarkan perusahaan hosting yang ada di Indonesia.

Jalan lain untuk self-hosted adalah menggunakan [Heroku](https://heroku.com), [OpenShift](https://openshift.com), atau cloud provider lainnya. Sayangnya, apa yang mereka berikan untuk yang menggunakan paket hosting gratisan kurang memuaskan. Menggunakan [Google AppEngine](https://cloud.google.com/appengine/) mungkin juga bisa, tapi kalau penggunaan kita sudah melewati kuota akhirnya harus bayar juga.

Setelah beberapa minggu sangat kebingungan, blog ini sempat saya takedown, saya hiatus mengurus blog ini, lihat saja margin antara 10 Juli dan 20 Agustus. Beberapa hari terakhir baru saya redesign lalu blog ini up lagi. Saya ganti username GitHub, Twitter, Facebook, dan beberapa akun lainnya. Saya ingin perubahan. Saya ingin blog ini 100% milik saya. Semua data mulai dari postingan, data-data komentar, markup, struktur folder. Khusus untuk commentary system, saya punya standar pribadi.

**Pertama**, open-source. GitHub, Jekyll, Poole (base dari tema yang saya gunakan sekarang), hampir semua elemen di blog ini open-source. Aneh kelihatannya kalau menggunakan layanan yang closed-source.

**Kedua**, free. Setidaknya cukup untuk membuat blog ini tetap berjalan stabil. Freemium tidak masalah asalkan masih menyediakan layanan yang free dan itu cukup untuk blog saya.

**Ketiga**, semua data komentar ada di saya. Menggunakan Komments dan Disqus artinya data komentar ada di database mereka. Makanya itu saya hindari. Menggunakan self-hosted pun sebenarnya data komentar juga ada di server, tapi setidaknya di server pribadi.

Berdasarkan 3 kriteria diatas, ada 2 approach yang saya dapatkan. Pertama: menggunakan `mailto:`. Kedua: menggunakan [Pooleapp](http://pooleapp.com).

Dengan menggunakan `mailto:`, maka komentar yang masuk akan langsung dikirim ke email saya. Bisa saya cek dulu lalu baru saya masukkan. Bagian susahnya adalah manajemen. Karena semua komentar yang masuk adalah email, maka harus ada manajemen yang tepat agar tidak berantakan. Sistem manajemen yang mudah adalah menggunakan fitur yang ada di Jekyll yaitu menggunakan `_data` atau {% raw %}`{% include %}`{% endraw %}.

Pooleapp memberi layanan yang lebih baik. Mereka akan memformat komentar yang masuk ke format yang bisa langsung dimasukkan ke folder `_data`. Lalu render di post menggunakan liquid tag {% raw %}`{% for comment in site.data.comments.session %}`{% endraw %}.

Masalahnya adalah Pooleapp tidak open-source.

-----

*Well*, seperti itulah beberapa masalah minggu ini. Saya masih mencari cara agar orang-orang bisa mengejek saya langsung. Untuk sementara, silakan [mention saya di Twitter](https://twitter.com/akhyarrh) kalau ada komentar.

Kayaknya cukup lah ya. Saya masih ada beberapa hal yang harus dikerjakan. Salah satunya mengerjakan boilerplate untuk Jekyll yang benar-benar siap pakai.

Ciao.
