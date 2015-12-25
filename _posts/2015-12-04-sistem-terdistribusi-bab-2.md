---
published: true
title: 'Sistem Terdistribusi: Bab 2'
layout: post
categories: [sister]
---
<h2 class="text-center">Bab 2 Komunikasi</h2>

## Komunikasi Data

Komunikasi data adalah merupakan bagian dari telekomunikasi yang secara khusus
berkenaan dengan transmisi atau pemindahan data dan informasi diantara
komputer-komputer   dan   piranti-piranti   yang   lain   dalam   bentuk
digital   yang dikirimkan melalui media komunikasi data.

Komunikasi data merupakan baguan vital dari suatu masyarakat informasi   karena
sistem   ini   menyediakan   infrastruktur   yang   memungkinkan
komputer-komputer dapat berkomunikasi satu sama lain.

<!--more-->

### Komponen Komunikasi Data

- Pengirim
- Penerima
- Data
- Media   pengiriman
- Protokol

![Komunikasi Data](/assets/img/sisterdis/bab-2-gambar-1.png)

## Protokol

Protokol dapat diartikan sebagai sebuah aturan yang mendefinisikan beberapa
fungsi yang ada dalam sebuah jaringan komputer, misalnya mengirim pesan, data,
informasi dan fungsi lain yang harus dipenuhi oleh sisi pengirim dan sisi
penerima agar komunikasi dapat berlangsung dengan benar, walaupun sistem yang
ada dalam jaringan tersebut berbeda sama sekali.

### Komponen Protokol

1. Aturan atau prosedur, mengatur pembentukan/pemutusan hubungan
1. Format atau bentuk, mengatur proses transfer data representasi pesan
1. Kosakata (vocabulary), jenis pesan dan makna masing-masing pesan

### Fungsi Protokol

Secara umum fungsi dari protokol adalah untuk menghubungkan sisi pengirim
dan sisi penerima dalam berkomunikasi serta dalam bertukar informasi agar dapat
berjalan dengan baik dan benar.

Sedangkan fungsi protokol secara detail dapat dijelaskan berikut:

- Fragmentasi dan *reassembly*

Fungsi dari fragmentasi dan *reassembly* adalah membagi informasi yang dikirim
menjadi beberapa paket data pada saat sisi pengirim mengirimkan informasi dan
setelah diterima maka sisi penerima akan menggabungkan lagi menjadi paket
informasi yang lengkap.

- *Encapsulation*

Fungsi dari *encapsulation* adalah melengkapi informasi yang dikirimkan dengan
address, kode-kode koreksi dan lain-lain.

- *Connection control*

Fungsi dari *connection control* adalah membangun hubungan (*connection*)
komunikasi dari sisi pengirim dan sisi penerima, dimana dalam membangun hubungan
ini juga termasuk dalam hal pengiriman data dan mengakhiri hubungan.

- *Flow control*

Berfungsi sebagai pengatur perjalanan data dari sisi pengirim ke sisi penerima.

- *Error control*

Fungsi dari *error control* adalah mengontrol terjadinya kesalahan yang terjadi
pada waktu data dikirimkan.

- *Transmission service*

Fungsi dari *transmission service* adalah memberi pelayanan komunikasi data
khususnya yang berkaitan dengan prioritas dan keamanan serta perlindungan data.

## Susunan Protokol

Protokol jaringan disusun oleh dalam bentuk lapisan-lapisan (*layer*). Hal ini
mengandung arti supaya jaringan yang dibuat nantinya tidak menjadi rumit.
Tujuan dari setiap layer ini adalah memberi layanan ke layer yang ada
di atasnya.

Antara setiap layer yang berdekatan terdapat sebuah interface. Interface
menentukan layanan layer yang di bawah kepada layer yang di atasnya.

Pada   saat   merencanakan   sebuah   jaringan,   hendaknya   memperhatikan
bagaimana menentukan interface yang tepat yang akan ditempatkan di antara dua
layer yang bersangkutan.

## Standarisasi Protokol (ISO 7498)

*International Standards Organization* (ISO) membuat suatu arsitektur komunikasi
yang dikenal sebagai *Open System Interconnection* (OSI), model yang
mendefinisikan standar untuk menghubungkan komputer-komputer dari vendor-vendor
yang berbeda.

Model Layer OSI dibagi dalam dua group: **upper layer** dan **lower layer**.
*Upper layer* fokus pada applikasi pengguna dan bagaimana file direpresentasikan
di komputer. *Lower layer* adalah intisari komunikasi data melalui jaringan
aktual.

<figure>
  <img src="/assets/img/sisterdis/bab-2-gambar-2.png" alt="Pembagian Layer OSI">
  <figcaption class="text-center"><i>Pembagian Model Layer OSI</i></figcaption>
</figure>

### Penjelasan Model OSI Layer

| Model OSI                                                                     | Keterangan                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|-------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![Application Layer](/assets/img/sisterdis/bab-2-osi-layer-application.png)   | **Application Layer**: Menyediakan jasa untuk aplikasi pengguna. Layer ini bertanggungjawab atas pertukaran informasi antara program komputer, seperti program e- mail, dan service lain yang jalan di jaringan, seperti server printer atau aplikasi komputer lainnya.                                                                                                                                                                    |
| ![Presentation Layer](/assets/img/sisterdis/bab-2-osi-layer-presentation.png) | **Presentation Layer**: Bertanggung jawab bagaimana data dikonversi dan diformat untuk transfer data. Contoh konversi format text ASCII untuk dokumen, .gif dan JPG untuk gambar. Layer ini membentuk kode konversi, translasi data, enkripsi dan konversi.                                                                                                                                                                                |
| ![Session Layer](/assets/img/sisterdis/bab-2-osi-layer-session.png)           | **Session Layer**: Menentukan bagaimana dua terminal menjaga, memelihara dan mengatur koneksi, bagaimana mereka saling berhubungan satu sama lain. Koneksi di layer ini disebut *session*.                                                                                                                                                                                                                                                 |
| ![Transport Layer](/assets/img/sisterdis/bab-2-osi-layer-transport.png)       | **Transport Layer**: Bertanggung jawab membagi data menjadi segmen, menjaga koneksi logika “end-to-end” antar terminal, dan menyediakan penanganan error (error handling).                                                                                                                                                                                                                                                                 |
| ![Network Layer](/assets/img/sisterdis/bab-2-osi-layer-network.png)           | **Network Layer**: Bertanggung jawab menentukan alamat jaringan, menentukan rute yang harus diambil selama perjalanan, dan menjaga antrian trafik di jaringan. Data pada layer ini berbentuk paket.<br> Fungsi utama dari layer network adalah pengalamatan dan routing. Pengalamatan pada layer network merupakan pengalamatan secara logical.                                                                                            |
| ![Data Link Layer](/assets/img/sisterdis/bab-2-osi-layer-data-link.png)       | **Data Link Layer** Menyediakan link untuk data, memaketkannya menjadi frame yang berhubungan dengan *hardware* kemudian diangkut melalui media.                                                                                                                                                                                                                                                                                           |
| ![Physical Layer](/assets/img/sisterdis/bab-2-osi-layer-physical.png)         | **Physical Layer**: Bertanggung jawab atas proses data menjadi bit dan mentransfernya melalui media, seperti kabel, dan menjaga koneksi fisik antar sistem.Layer ini mengatur tentang bentuk interface yang berbeda-beda dari sebuah media transmisi. Secara umum masalah- masalah  desain  yang  ditemukan  di  sini  berhubungan secara mekanik, elektrik dan interface prosedural, dan media fisik yang berada di bawah physical layer. |

Hubungan antara model referensi OSI dengan protokol internet dapat dilihat dalam tabel di bawah ini.

|         |          Model OSI           |        TCP/IP         | Protokol                                       |                                                                     |
|:--------|:----------------------------:|:---------------------:|------------------------------------------------|---------------------------------------------------------------------|
| **No.** |         **Lapisan**          |     **Aplikasi**      | **Nama Protokol**                              | **Kegunaan**                                                        |
| **7**   |         **Aplikasi**         |                       | DHCP (*Dynamic Host Configuration Protocol*)   | Protokol untuk distribusi IP pada jaringan untuk jumlah IP terbatas |
|         |                              |                       | DNS (*Domain Name Server*)                     | Database nama domain mesin dan nomer IP                             |
|         |                              |                       | FTP (*File Transfer Protocol*)                 | Protokol untuk transfer file                                        |
|         |                              |                       | HTTP (*HyperText Transfer Protocol*)           | Protokol untuk transfer file HTML dan web                           |
|         |                              |                       | MIME (*Multipurpose Internet Mail Extensions*) | Protokol untuk mengirim file binary dalam bentuk teks               |
|         |                              |                       | NNTP (*Network News Transfer Protocol*)        | Protokol untuk menerima dan mengirim newsgroup                      |
|         |                              |                       | POP (*Post Office Protocol*)                   | Protokol untuk mengambil mail dari server                           |
|         |                              |                       | SMB (*Server Message Block*)                   | Protokol untuk transfer berbagai server file DOS dan Windows        |
| **6**   |        **Presentasi**        |                       | SMTP (*Simple Mail Transfer Protocol*)         | Protokol untuk pertukaran mail                                      |
|         |                              |                       | SNMP (*Simple Network Management Protocol*)    | Protokol untuk manajemen jaringan                                   |
|         |                              |                       | TFTP (*Trivial FTP*)                           | Protokol untuk transfer file                                        |
| **5**   |           **Sesi**           |                       | NETBIOS (*Network Basic Input Output System*)  | BIOS jaringan standar                                               |
|         |                              |                       | RPC (*Remote Procedure Call*)                  | Prosedur pemanggilan jarak jauh                                     |
| **4**   |        **Transport**         |     **Transport**     | TCP (*Transmission Control Protocol*)          | Protokol pertukaran data berorientasi (*connection oriented*)       |
|         |                              |                       | UDP (*User Datagram Protocol*)                 | Protokol pertukaran data non-orientasi (*connectionless*)           |
| **3**   |         **Network**          |     **Internet**      | IP (*Internet Protocol*)                       | Protokol untuk menetapkan routing                                   |
|         |                              |                       | RIP (*Routing Information Protocol*)           | Protokol untuk memilih routing                                      |
|         |                              |                       | ARP (*Address Resolution Protocol*)            | Protokol untuk mendapatkan informasi hardware dari nomor IP         |
|         |                              |                       | RARP (*Reverse ARP*)                           | Protokol untuk mendapatkan informasi nomor IP dari hardware         |
| **2**   |         **Datalink**         | **Network Interface** | PPP (*Point to Point Protocol*)                | Protokol untuk poin ke poin                                         |
|         | LLC (*Logical Link Control*) |                       | SLIP (*Serial Line Internet Protocol*)         | Protokol dengan menggunakan sambungan serial                        |
|         | MAC (*Media Access Control*) |                       | Ethernet, FDDI, ISDN, ATM                      |                                                                     |
| **1**   |          **Fisik**           |                       |                                                |                                                                     |

## Remote Procedure Call (RPC)

*Remote Procedure Call* (RPC) adalah sebuah metode yang memungkinkan kita untuk mengakses sebuah prosedur yang berada di komputer lain. Untuk dapat melakukan ini sebuah server harus menyediakan layanan *remote procedure*.

RPC  masih  menggunakan  cara  primitif  dalam  pemrograman,  yaitu menggunakan paradigma *procedural programming*. Hal itu membuat kita sulit ketika menyediakan banyak *remote procedure*.

### Kelebihan RPC

- Relatif mudah digunakan

Pemanggilan *remote procedure* tidak jauh berbeda dibandingkan pemanggilan *local procedure*. Sehingga pemrogram dapat berkonsentrasi pada *software logic*, tidak  perlu  memikirkan  *low  level  details*  seperti  *socket*,  *marshalling*  & *unmarshalling*.

- Robust (Sempurna)

Sejak tahun 1980-an RPC telah banyak digunakan dalam pengembangan *mission-critical application* yang memerlukan *scalability*, *fault tolerance*, & *reliability*.

### Kekurangan RPC

- Tidak fleksibel terhadap perubahan

*Static relationship between client & server at run-time*.

- Berdasarkan prosedural/*structured programming* yang sudah ketinggalan jaman dibandingkan OOP.

### Prinsip RPC dalam program Client-Server

![RPC dalam program Client-Server](/assets/img/sisterdis/bab-2-rpc-dalam-client-server.png)

Skema  RPC  ini  dilakukan  juga  pada  proses-proses  yang  running  di  komputer berlainan

![RPC program Client-Server dalam komputer berlainan](/assets/img/sisterdis/bab-2-rpc-berlainan.png)

- Sebelum mekanisme RPC digunakan, data harus di-packaging ke dalam format transimisi. Langkah ini dinamakan *marshalling*
- *Proxy* bertanggung jawab untuk marshalling data, kemudian mengirimkan data dan meminta instans dari komponen *(remote)*
- *Stub* menerima request, unmarshall data, dan memanggil method yang diminta.
Kemudian proses mengembalikan nilai yang diinginkan

### Langkah-langkah dalam RPC

![Langkah-langkah dalam RPC](/assets/img/sisterdis/bab-2-langkah-langkah-rpc.png)

1. Prosedur client memanggil client stub
2. Client stub membuat pesan dan memanggil OS client
3. OS client mengirim pesan ke OS server
4. OS server memberikan pesan ke server stub
5. Server stub meng-*unpack* parameter-parameter untuk memanggil server
6. Server mengerjakan operasi, dan mengembalikan hasilnya ke server stub
7. Server stub mem-*pack* hasil tsb dan memanggil OS server
8. OS server mengirim pesan (hasil) ke OS client
9. OS client memberikan pesan tersebut ke client stub
10. Client  stub  meng-*unpack*  hasil  dan  mengembalikan  hasil  tersebut  ke client

## Object Remote

*Remote Method Invocation* (RMI) adalah sebuah teknik pemanggilan method remote yang lebih secara umum lebih baik daripada RPC. 
RMI menggunakan paradigma pemrograman berorientasi obyek *(Object Oriented Programming)*. 
RMI memungkinkan kita untuk mengirim obyek sebagai parameter dari *remote method*. 
Dengan dibolehkannya program Java memanggil method pada remote obyek, 
RMI membuat pengguna dapat mengembangkan aplikasi Java yang terdistribusi pada jaringan.

RMI menyediakan mekanisme dimana server dan client berkomunikasi dan memberikan informasi secara timbal balik. 
Aplikasi semacam ini seringkali disebut aplikasi objek terdistribusi.

Aplikasi objek terdistribusi seringkali melakukan hal berikut:

- Melokasikan  objek  remote:  Aplikasi  dapat  menggunakan  satu  dari  dua mekanisme untuk 
mendapatkan referensi ke objek remote. Aplikasi dapat mendaftarkan objek remote dengan fasilitas 
penamaan RMI *(naming facility)* yaitu rmiregistry atau aplikasi dapat mem-*pass* dan mengembalikan 
referensi objek remote sebagai bagian dari operasi normal.

- Berkomunikasi  dengan  objek  remote:  Detail  dari  komunikasi  antara  objek remote 
ditangani oleh RMI, bagi programmer komunikasi remote tampak seperti invokasi method Java standar.

- Memanggil *(load)* bytecode   untuk   objek   yang   di-*pass*:
Karena RMI mengizinkan pemanggil *(caller)* untuk mem-*pass* objek ke objek remote,
RMI menyediakan mekanisme yang diperlukan objek 
me-*load* kode objek, sebagaimana juga mentransmisikan datanya.

### Langkah-Langkah Pembuatan Program dengan RMI

Membangun  suatu  aplikasi  terdistribusi  menggunakan  RMI  meliputi  6  langkah. 
Keenam langkah tersebut adalah:

1. Mendefinisikan *remote interface*
2. Implementasi *remote interface* dan *server*
3. Pengembangan *client* (atau *applet*) yang menggunakan *remote interface*
4. Mengkompilasi *source files* dan mem-buat *stub* and *skeletons*
5. Memulai *(start)* RMI *registry*
6. Menjalankan *server* dan *client*

---

Referensi:

1. Rijal Fadilah, Handout Komunikasi Data dan Jaringan Komputer, [rijalfadilah.multiply.com][1]
2. Trindiana dkk., Tugas Kuliah Pengantar Sistem Terdistribusi, 2008.
3. Mudji, Model Jaringan 7 OSI Layer, [mudji.net][2]
4. Lintang, Pengenalan Hardware dan Topologi Jaringan Komputer, [staffsite.gunadarma.ac.id][3]
5. [bebas.vlsm.org][4]
6. [bebas.vlsm.org] (http://www.bebas.vlsm.org/v06/Kuliah/SistemOperasi/BUKU/bahan/bahan-bab3.pdf)
7. Isak Rickyanto, Tutorial Pengenalan Java RMI, [benpinter.net][5]
8. Ayu Anggriani dkk., Tugas Kuliah Pengantar Sistem Terdistribusi, 2008.

[1]: http://rijalfadilah.multiply.com/
[2]: http://mudji.net/press/?p=61
[3]: http://staffsite.gunadarma.ac.id/lintang/index.php?stateid=download&id=2268&part=files
[4]: http://bebas.vlsm.org/v06/Kuliah/SistemOperasi/BUKU/SistemOperasi-4.X-1/ch17s06.html
[5]: http://www.benpinter.net/article.php?story=20030818005713433
