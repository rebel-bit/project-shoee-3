<template>
  <div id="app">
    <div id="header">
      <div class="container">
        <!-- navbar  -->
        <div class="navbar d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <a class="nav-link text-white" href="#">Celler Center</a>
            <div class="hr1"></div>
            <div class="dropdown">
              <a
                class="nav-link text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Download
              </a>
              <div
                class="dropdown-menu p-2 text-muted"
                style="max-width: 200px"
              >
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/0de1b00ed7ab7c3b566444f67a6b8db5.png"
                  width="150px"
                  alt=""
                />
                <div class="d-flex flex-column ml-2">
                  <img
                    class="pb-2"
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png"
                    width="80px"
                    alt=""
                  />
                  <img
                    class="pb-2"
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png"
                    width="80px"
                    alt=""
                  />
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1ae215920a31f2fc75b00d4ee9ae8551.png"
                    width="80px"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="hr1"></div>
            <a class="nav-link text-white" href="#">Ikuti Kami di</a>
            <a class="text-white" href="#"
              ><i class="fab fa-facebook-square"></i
            ></a>
            <a class="nav-link text-white" href="#"
              ><i class="fab fa-instagram-square"></i
            ></a>
            <a class="text-white" href="#"
              ><i class="fas fa-user-graduate"></i
            ></a>
          </div>
          <div class="d-flex align-items-center">
            <div class="dropdown">
              <a
                class="nav-link text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-bell"></i> Notifikasi
              </a>
              <div
                class="dropdown-menu p-2 ml-5 mr-5 dropdown-menu-lg-right"
                style="max-width: 200px"
              >
                <center>
                  <p>Log in untuk melihat notifikasi</p>
                </center>
              </div>
            </div>
            <a class="nav-link text-white" href="/profil"
              ><i class="fas fa-question-circle"></i> Bantuan</a
            >
            <div class="dropdown">
              <a
                class="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-globe"></i> Bahasa
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Bahasa Indonesia</a>
                <a class="dropdown-item" href="#">English</a>
              </div>
            </div>
            <a href="/register" class="text-white" v-if="!logout">Daftar</a>
            <div class="dropdown">
              <a
                class="nav-link text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                v-if="logout"
              >
                <i class="fas fa-user-circle" style="font-size: 20px"></i>
              </a>
              <div
                v-if="roles === 'admin'"
                class="dropdown-menu dropdown-menu-lg-right"
                aria-labelledby="navbarDropdown"
              >
                <a class="dropdown-item" href="/profilAdmin">Profil</a>
                <a class="dropdown-item" href="/admin">Data Customer</a>
                <a @click="out" class="dropdown-item" href="/">Logout</a>
              </div>
              <div
                v-else-if="roles === 'customer'"
                class="dropdown-menu dropdown-menu-lg-right"
                aria-labelledby="navbarDropdown"
              >
                <a class="dropdown-item" href="/profilUser">Profil</a>
                <a class="dropdown-item" href="/custamer">Toko Saya</a>
                <a class="dropdown-item" href="/custamer1">Toko Saya</a>
                <a @click="out" class="dropdown-item" href="/">Logout</a>
              </div>
            </div>
            <div class="hr1 mx-2" v-if="!logout"></div>
            <a href="/login" class="text-white" v-if="!logout">Login</a>
          </div>
        </div>
        <!-- input search brand -->
        <div class="d-flex align-items-center mt-4">
          <div class="d-flex align-items-center">
            <a class="text-white nav-link"
              ><img
                class="brand-img mr-2"
                style="margin-top: -28px"
                src="brand.png"
              />Shopoo</a
            >
          </div>
          <div class="wrap-navbar-input">
            <div class="wrap-search">
              <input
                type="text"
                class="form-control"
                placeholder="Cari Produk di Store diskon s/d 50%"
              />
              <div class="wrap-icon-s">
                <i class="fa fa-search"></i>
              </div>
            </div>
            <div class="under-input d-flex mt-2">
              <span style="color: white" class="mr-3">Daster Arab</span>
              <span style="color: white" class="mr-3">Helm Bogo</span>
              <span style="color: white" class="mr-3">Sepatu Converse</span>
              <span style="color: white" class="mr-3">Masker Sensi</span>
              <span style="color: white" class="mr-3">Jilbab Instan</span>
              <span style="color: white" class="mr-3">Sepeda Poligon</span>
              <span style="color: white" class="mr-3">Piyama Anak</span>
              <span style="color: white" class="mr-3">Speaker Bluetooth</span>
            </div>
          </div>
          <i
            style="margin-left: 60px; font-size: 25px"
            class="fas fa-shopping-cart form-inline my-2 my-lg-0"
          ></i>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div id="container">
      <div class="footer">
        <div class="container pt-5">
          <p class="title font-weight-bold">
            Shopoo Indonesia - Jual Beli di Ponsel
          </p>
          <p class="desc">
            Shopoo adalah mobile-platform pertama di Asia Tenggara (Indonesia,
            Filipina, Malaysia, Singapura, Thailand, Vietnam) dan Taiwan yang
            menawarkan transaksi jual beli online yang menyenangkan, gratis, dan
            terpercaya via ponsel. Bergabunglah dengan jutaan pengguna lainnya
            dengan mulai mendaftarkan produk jualan dan berbelanja berbagai
            penawaran menarik kapan saja, di mana saja. Keamanan transaksi kamu
            terjamin - Terima pesanan kamu atau dapatkan uang kamu kembali
            dengan Garansi Shopoo. Ayo gabung dalam komunitas Shopoo dan mulai
            belanja sekarang!
          </p>

          <p class="title font-weight-bold">Pembeli Suka Belanja Online</p>
          <p class="desc">
            Temukan apapun kebutuhanmu dengan harga terbaik cuma di Shopoo.
            Shopoo adalah pusat perbelanjaan online dimana kamu bisa mendapatkan
            update terkini dari penjual yang kamu ikuti, sekaligus dari pengguna
            favorit kamu. Berbelanja dan berjualan menjadi lebih menyenangkan
            dengan fitur sosial, dimana kamu bisa menyebarkan produk yang kamu
            jual ataupun barang favorit kamu hanya dengan satu klik saja!
            Belanja semua kebutuhanmu di Shopoo dengan hati yang tenang! Cek
            rating dan review toko-toko yang ada dan temukan penjual yang
            terpercaya dengan mudah. Kami selalu mengutamakan keamanan transaksi
            untuk para pembeli kami! Dengan Garansi Shopoo, kamu akan
            mendapatkan uangmu kembali jika kamu tidak menerima pesanan dengan
            baik. Tidak yakin apa yang ingin kamu beli? Fitur hashtag dapat
            membantumu menemukan tren produk terkini. Jelajahi berbagai kategori
            produk, seperti Kemeja Pria, Perlengkapan Rumah, Tas Selempang Pria,
            Hobi & Koleksi, Makanan & Minuman, Pakaian Wanita, Fashion Anak,
            Clucth Tas Wanita, Kosmetik, Otomotif, Handphone & Aksesoris, Ibu &
            Bayi, Jam Tangan Analog, Kamera Mirrorless, Souvenir & Pesta,
            Perawatan & Kesehatan, Sepatu Pria, Aksesoris Fashion, Fashion
            Muslim, Serba Serbi, Komputer & Aksesoris, Sepatu Wanita,
            Elektronik, Perlengkapan Olahraga, Voucher, dan masih banyak lagi!
            Gunakan fitur Pencarian atau Rekomendasi untuk menemukan produk yang
            paling sesuai dengan keinginanmu secara instan. Berbelanja menjadi
            semakin hemat dengan voucher dan cashback di Shopoo. Ayo mulai
            belanja di Shopoo sekarang!
          </p>
          <hr />
          <div class="d-flex justify-content-between">
            <div class="d-flex flex-column">
              <p class="desc font-weight-bold">LAYANAN PELANGGAN</p>
              <p class="mb-1 desc">Bantuan</p>
              <p class="mb-1 desc">Metode Pembayaran</p>
              <p class="mb-1 desc">Shopoo Pay</p>
            </div>
            <div class="d-flex flex-column ml-5">
              <p class="desc font-weight-bold">JELAJAHI SHOPOO</p>
              <p class="mb-1 desc">Tentang Kami</p>
              <p class="mb-1 desc">Karir</p>
              <p class="mb-1 desc">Kebijakan Shopee</p>
            </div>
            <div class="d-flex flex-column ml-5">
              <p class="desc font-weight-bold">PEMBAYARAN</p>
              <div class="d-flex align-items-center">
                <img src="bca.png" width="60" />
                <img class="ml-2" src="bni.png" width="60" />
              </div>
              <div class="d-flex align-items-center">
                <img src="indomaret.png" width="60" />
                <img class="ml-2 mt-1" src="alfamart.png" width="60" />
              </div>
            </div>
            <div class="d-flex flex-column ml-5">
              <p class="desc font-weight-bold">IKUTI KAMI</p>
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center">
                  <i class="fab fa-facebook-square"></i>
                  <span class="desc ml-2" style="color: white">Facebook</span>
                </div>
                <div class="d-flex align-items-center">
                  <i class="fab fa-instagram-square"></i>
                  <span class="desc ml-2" style="color: white">Instagram</span>
                </div>
                <div class="d-flex align-items-center">
                  <i class="fab fa-twitter-square"></i>
                  <span class="desc ml-2" style="color: white">Twitter</span>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column ml-5">
              <p class="desc font-weight-bold">DOWNLOAD APLIKASI SHOPOO</p>
              <div class="d-flex align-items-center">
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/0de1b00ed7ab7c3b566444f67a6b8db5.png"
                  width="80px"
                  alt=""
                />
                <div class="d-flex flex-column ml-2">
                  <img
                    class="pb-2"
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png"
                    width="80px"
                    alt=""
                  />
                  <img
                    class="pb-2"
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png"
                    width="80px"
                    alt=""
                  />
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1ae215920a31f2fc75b00d4ee9ae8551.png"
                    width="80px"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div class="d-flex justify-content-between pb-3">
            <span style="color: white">
              &copy; Shopee 2020. Hak Cipta Dilindungi
            </span>
            <span style="color: white"
              >Negara: Singapura | Indonesia | Taiwan | Thailand | Malaysia |
              Vietnam | Filipina |</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      roles: JSON.parse(sessionStorage.getItem("USER_DATA")).role,
      logout: {},
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      let user = JSON.parse(sessionStorage.getItem("USER_DATA"));
      this.roles = user === null ? "" : user.role;
      this.logout = user;
    },
    out() {
      sessionStorage.clear();
    },
  },
};
</script>

<style>
#header {
  background: linear-gradient(-180deg, purple, rgb(177, 4, 177));
  height: 150px;
  width: 100%;
  position: fixed;
  color: white;
  z-index: 10000;
}

.container {
  max-width: 1200px;
  padding: 0;
}

.navbar {
  padding: 0;
}

.navbar a {
  font-size: 14px;
}

.hr1 {
  width: 2px;
  height: 15px;
  background-color: #ffffff;
}

.wrap-search {
  position: relative;
  width: 100%;
  height: 40px;
  background-color: #ffffff;
  border-radius: 6px;
}

.wrap-icon-s {
  position: absolute;
  background: linear-gradient(-180deg, purple, rgb(177, 4, 177));
  border-radius: 3px;
  width: 60px;
  height: 87%;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-control {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border: none;
  background-color: transparent;
}

.form-control:focus {
  box-shadow: none;
  border-radius: 6px;
}

.icon-shop {
  width: 50px;
  height: 50px;
  margin-left: 40px;
}

.brand-img {
  width: 45px;
  height: 55px;
}

.text-white {
  font-size: 30px;
  font-weight: 400;
}

.under-input span {
  font-size: 12px;
  font-weight: 100;
}

.wrap-navbar-input {
  margin-left: 50px;
  width: 67%;
}
#container {
  position: relative;
  color: white;
  background: linear-gradient(-180deg, purple, rgb(177, 4, 177));
}
</style>
