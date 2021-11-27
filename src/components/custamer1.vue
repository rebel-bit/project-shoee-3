<template>
  <div class="app"><br><br><br><br><br><br>
    <div class="pr">
      <div class="border1 row">
        <div class="awd">
          <h3>Tambahkan Barang</h3>
          <form @submit.prevent="add">
            <input type="hidden" v-model="form.id" />
            <label for=""><b> Nama Barang : </b></label><br />
            <input
              type="text"
              required
              v-model="form.namaBarang"
              placeholder="Masukkan Nama Barang..."
            /><br /><br />
            <label for=""><b> Harga : </b></label><br />
            <input
              type="text"
              required
              v-model="form.harga"
              placeholder="Masukkan Harga..."
            /><br /><br />
            <label for=""><b> Jumlah : </b></label><br />
            <select v-model="form.stok">
              <option value="">Pilih Jumlah</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <label for=""><b> Gambar : </b></label><br />
            <input
              type="text"
              required
              v-model="form.gambar"
              placeholder="Masukkan Gambar..."
            /><br /><br />
            <button
              type="submit"
              v-show="!updateSubmit"
              style="margin: auto"
              @click="f()"
            >
              <b> Tambahkan </b>
            </button>
            <!-- jika tidak update maka tombol update tidak muncul -->
            <button type="button" v-show="updateSubmit" @click="update(form)">
              <b> Update </b>
            </button>
            <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
          </form>
          <br />
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
        stok: "",
        gambar: "",
        harga: "",
        gambar: "",
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
    add() {
      axios.post("http://localhost:3000/barang/", this.form).then((res) => {
        this.load();
        alert("Sukses Ditambahkan");
        this.$router.push("/one")((this.form.id = "")),
          (this.form.namaBarang = ""),
          (this.form.stok = ""),
          (this.form.gambar = ""),
          (this.form.harga = "");
        this.form.gambar = "";
      });
    },
    edit(user) {
      this.updateSubmit = true;
      this.form.id = user.id;
      this.form.namaBarang = user.namaBarang;
      this.form.stok = user.stok;
      this.form.gambar = user.gambar;
      this.form.harga = user.harga;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/barang/" + form.id, {
          namaBarang: this.form.namaBarang,
          stok: this.form.stok,
          gambar: this.form.gambar,
          harga: this.form.harga,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.namaBarang = "";
          this.form.stok = "";
          this.form.gambar = "";
          this.form.harga = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios.delete("http://localhost:3000/barang/" + user.id).then((res) => {
        this.load();
        let index = this.barang.indexOf(form.namaBarang);
        this.barang.splice(index, 1);
      });
    },
  },
};
</script>

<style>


.border1 {
  border: 1px solid black none;
  background-color: rgb(156, 5, 156);
  color: white;
  padding: 10px;
  background-color: none;
  width: 50%;
  margin-left: 300px;
  margin-bottom: 20px;
}
.pr {
  display: flex;
}
 
</style>