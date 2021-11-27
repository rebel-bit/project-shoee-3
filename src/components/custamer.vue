<template>
  <div id="appu">
    <h2 style="text-align: center; margin-bottom: 12px">
      Product <br />
      <a href="/custamer1">
        <button
          style="
            background-color: purple;
            color: white;
            width: auto;
            padding: 5px;
            border: 1px solid white;
          "
          id="pr"
        >
          Tambah Product
        </button>
      </a>
    </h2>
    <div class="continer">
      <div class="row">
        <div class="col" v-for="user in barang" :key="user.id">
          <div class="col">
            <blockquote class="col col-lg-2" @click="f()">
              <img :src="user.gambar" width="200px" height="200px" alt="..." />
            </blockquote>
            <div class="col">
              <h5 class="h5">
                {{ user.namaBarang }}
              </h5>
              <ul class="card-text list-unstyled">
                <li>
                  <small class="text-muted">Harga mulai</small>
                  <p class="h5">{{ user.harga }}</p>
                </li>
                <button
                  style="
                    background-color: purple;
                    color: white;
                    width: 60px;
                    padding: 5px;
                    border: 1px solid white;
                  "
                  id="pr"
                  @click="f()"
                >
                  Beli
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      form: {
        id: "",
        namaBarang: "",
        gambar: "",
        harga: "",
      },
      barang: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/barang")
        .then((res) => {
          this.barang = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios.delete("http://localhost:3000/barang/" + user.id).then((res) => {
        this.load();
      });
    },
    f() {
      let beli = confirm(
        "Apakah anda igin membeli prodak ini klik Ok untuk melanjutkan"
      );
      if (beli) {
        alert(
          "Ok sedang di Proses dan jangan lupa pilih berapa yang anda inginkan.."
        );
        this.$router.push("/admin");
      } else {
        alert("Pembelian Gagal");
      }
    },
  },
};
</script>
<style>
#appu {
  border: 1px solid black none;
  padding: 10px;
  margin-top: 20px;
  padding-top: 200px;
  padding-bottom: 60px;
}
#pr {
  margin-bottom: 10px;
}
.border1 {
  width: auto;
  padding: 30px;
  background-color: none;
}
#border2 {
  width: auto;
  padding: 10px;
  display: flex;
}
.card-img-top {
  padding: 5px;
  margin: auto;
}
</style>