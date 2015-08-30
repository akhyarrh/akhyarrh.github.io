---
title: "Image Compression"
tags:
  - tips
---

Gambar adalah konten kedua terbanyak di web menurut saya. Bahkan gif pun juga termasuk gambar, walaupun bergerak. Dulu ukuran file gambar tidak terlalu diperhatikan. Saya juga dulu dengan sembarangan melakukan upload gambar ke blog tanpa peduli berapa ukurannya. Tapi itu dulu, sekarang sudah beda. Hanya saja masih ada beberapa website yang belum melakukan *compression* terhadap konten gambar yang mereka punya. Padahal seharusnya mereka melakukannya agar web mereka cepat dan tidak terlalu banyak memakai kuota data.

Dalam dunia web, ada tehnik yang disebut **image compression**. Sesuai namanya, untuk melakukan pengurangan ukuran gambar tanpa menurunkan kualitasnya secara drastis. Dengan ukuran gambar yang relatif kecil, maka loading akan semakin cepat karena data yang di download tidak akan terlalu besar. Ambil contoh di [post saya ini]({% post_url 2015-06-28-oh-firefox %}), berikut ukuran file-filenya:

File | Ukuran
:---|---:
index.html | 7,9 KB
favicon.ico | 14,7 KB
chrome-css3test-result.png | 96,1 KB
chrome-html5test-result.png | 30,2 KB
chrome-version-tested.png | 26,3 KB
firefox-css3test-result.png | 71,1 KB
firefox-html5test-result.png | 26,0 KB
firefox-version-tested.png | 111,6 KB
oooh.png | 2,0 KB
**Total** | **385,9 KB**

Tipis? Banget. Itu pun berisi 6 file gambar yang resolusinya lumayan besar, tapi dengan melakukan *compression* hasil akhirnya jadi sangat kecil. Imbasnya, loading lebih cepat jadi kalo kalian masih menemukan loading di halaman blog saya yang lambat maka bershowerlah.

Walaupun di blog saya jarang terdapat gambar, tapi kira-kira aja misalnya sebuah halaman web yang berisi sekitar 10 gambar. Jika masing-masing file gambar berukuran 1,5 MB, maka 1,5 * 10 = 15 MB. Kampret banget kan modal kuota data 15 MB hanya untuk 1 halaman web. Kalau seharian kita mengecek foto-foto di web tersebut, bisa aja sampai 1 GB. GILA !!!

Makanya *image compression* itu penting. Selain untuk memudahkan pengunjung, nilai web kita di Google PSI juga bagus yang artinya web kita sudah menerima perubahan yang lebih baik.

![Pffftt](/assets/img/pffftt.png)

Ada beberapa cara untuk melakukan *compression*, untuk pengguna Linux mungkin bisa mengikuti cara saya menggunakan [image_optim](https://github.com/toy/image_optim) tapi harus terpasang Ruby & Nodejs dulu. Tinggal install `image_optim` menggunakan `gem` lalu gunakan via terminal.

```
# install image_optim dan binary yang diperlukan
# cara install pngout:
# https://github.com/toy/image_optim#pngout-installation-optional
gem install image_optim image_optim_pack
npm install -g svgo

# compress semua file gif, jpg, jpeg, png, atau svg
# di folder assets/img dan yang berada di subfolder
image_optim assets/img -r
```

Untuk pengguna Mac dan Windows, saya tidak bisa memberi tahu cara yang tepat. Tapi [Creative Bloq](http://www.creativebloq.com/) punya list tools yang bisa dipergunakan untuk melakukan *image compression*. Banyak banget, ada 18 tools untuk pengguna Windows dan Mac. Langsung aja menuju ke [artikel mereka ini](http://www.creativebloq.com/design/image-compression-tools-1132865).

## Resource

- [Image compression di Wikipedia](https://en.wikipedia.org/wiki/Image_compression)
- [Image Compression for Web Developers di HTML5 Rocks](http://www.html5rocks.com/en/tutorials/speed/img-compression/)
- [The 18 best image file compression tools di Creative Bloq](http://www.creativebloq.com/design/image-compression-tools-1132865)

-----

Sekian dari saya. Kalau proses *compression* lama, itu berarti ukuran gambar-gambar kalian memang besar atau banyak, atau mungkin keduanya.

Ciao.
