---
title: Privasi
---
Blog menggunakan 3 layanan yang kemungkinan akan mengumpulkan data pengguna dengan level yang berbeda.

## Github

Blog ini di hosting di Github. Kode untuk Jekyll nya ada di branch/tree yang bernama `source`. Sedangkan yang di host oleh Github ada di branch `master`. Walau Github cuma melakukan host terhadap blog ini, ada kemungkinan mereka mengumpulkan data pengunjung di sisi server.

[Buka ini untuk membaca kebijakan privasi Github](https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement).

## Formspree

Jika kamu mengirim email lewat [halaman kontak](/kontak/), maka nama & email yang kamu masukkan akan diproses oleh Formspree untuk meneruskan pesan kalian ke email saya.

[Buka ini untuk membaca kebijakan privasi Formspree](https://formspree.io/legal/privacy-policy).

## Google Analytics

Blog ini menggunakan layanan Google Analytics untuk mengirimkan data tentang apa yang kalian lakukan disini, halaman mana yang paling banyak dikunjungi, dan sebagainya. Blog ini sudah menggunakan kode Google Analytics yang sama dengan yang ada di [HTML5-boilerplate](https://github.com/h5bp/html5-boilerplate/blob/master/dist/index.html#L33-L37).

<a href="javascript:gaOptout()">Klik disini untuk opt-out dari Google Analytics di website ini.</a>

[Buka ini untuk membaca kebijakan privasi Google](https://policies.google.com/privacy?hl=id).

<script>
// Set to the same value as the web property used on the site
var gaProperty = 'UA-36665422-2';

// Disable tracking if the opt-out cookie exists.
var disableStr = 'ga-disable-' + gaProperty;
if (document.cookie.indexOf(disableStr + '=true') > -1) {
  window[disableStr] = true;
}

// Opt-out function
function gaOptout() {
  document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
  window[disableStr] = true;
}
</script>
