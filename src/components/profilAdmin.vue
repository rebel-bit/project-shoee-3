<template>
  <div>
    <div class="aaa" v-for="data in users" :key="data.id">
      <div class="row">
        <div class="rightcolumna">
          <div class="card1">
            <img
              src="https://i.pinimg.com/736x/3b/a2/c4/3ba2c46051c4fc2e7eb353f2eb1f08e4.jpg"
              style="border-radius: 100px"
              width="100"
              height="100"
            />
            <div style="margin-left: 20px; padding-top: 20px">
              <p>
                <b>{{ data.username }}</b>
              </p>
              <button @click="edit(data)" type="button" style="border: none">
                <i class="far fa-edit"></i> Edit Profil</button
              ><br />
            </div>
          </div>
          <div class="das">
            <p>
              <b
                ><i class="far fa-data"></i><i class="far fa-user"></i> Profil
                Saya</b
              >
            </p>
            <p>
              <b>Username &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b>
              {{ data.username }}
            </p>
            <p>
              <b
                >Nama
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b
              >
              {{ data.name }}
            </p>
            <p>
              <b
                >Email
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b
              >
              {{ data.email }}
            </p>
            <p>
              <b
                >No Telepon
                &nbsp;&nbsp;&nbsp;&nbsp;:</b
              >
              {{ data.telpon }}
            </p>
            <p><b>Tanggal Lahir :</b> {{ data.tanggal }}</p>
          </div>
        </div>
        <div class="leftcolumna">
          <div class="card">
            <div class="border1 row">
              <form @submit.prevent="add" style="margin-left: 20px">
                <input type="hidden" v-model="form.id" />
                <table border="0" align="center">
                  <tr>
                    <td>Username</td>
                    <td>
                      <input
                        style="width: 370px; margin-left: 50px"
                        type="text"
                        required
                        v-model="form.username"
                        placeholder="Masukkan Username..."
                      />
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <td>Nama</td>
                    <td>
                      <input
                        style="width: 370px; margin-left: 50px"
                        type="text"
                        required
                        v-model="form.name"
                        placeholder="Masukkan Nama..."
                      />
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <td>Email</td>
                    <td>
                      <input
                        style="width: 370px; margin-left: 50px"
                        type="text"
                        required
                        v-model="form.email"
                        placeholder="Masukkan Email..."
                      />
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <td>No Telepon</td>
                    <td>
                      <input
                        style="width: 370px; margin-left: 50px"
                        type="text"
                        required
                        v-model="form.telpon"
                        placeholder="Masukkan No Telpon..."
                      />
                    </td>
                  </tr>
                  <br />
                  <tr>
                    <td>Tanggal Lahir</td>
                    <td>
                      <input
                        style="width: 370px; margin-left: 50px"
                        type="date"
                        v-model="form.tanggal"
                        name="tanggal"
                      />
                    </td>
                  </tr><br>
                  <tr>
                    <td>Password</td>
                    <td>
                      <input
                        style="width: 370px; margin-left: 50px"
                        type="password"
                        required
                        v-model="form.telpon"
                        placeholder="Ganti Password..."
                      />
                    </td>
                  </tr>
                </table><br>
                <button
                    type="button"
                    v-show="updateSubmit"
                    @click="update(form)"
                    style="margin: auto; width: 370px"
                  >
                    <b> Update </b>
                  </button>
              </form>
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
        username: "",
        name: "",
        gender: "",
        password: "",
        email: "",
        telpon: "",
        tanggal: "",
      },
      users: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/users")
        .then((res) => {
          this.users = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/users/", this.form).then((res) => {
        this.load();
        (this.form.id = ""),
          (this.form.username = ""),
          (this.form.name = ""),
          (this.form.gender = ""),
          (this.form.email = ""),
          (this.form.telpon = "");
          (this.form.password = "");
        (this.form.tanggal = "");
      });
    },
    edit(data) {
      this.updateSubmit = true;
      this.form.id = data.id;
      this.form.username = data.username;
      this.form.name = data.name;
      this.form.gender = data.gender;
      this.form.email = data.email;
      this.form.telpon = data.telpon;
      this.form.password = data.password;
      this.form.tanggal = data.tanggal;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/users/" + form.id, {
          username: this.form.username,
          name: this.form.name,
          gender: this.form.gender,
          email: this.form.email,
          telpon: this.form.telpon,
          password: this.form.password,
          tanggal: this.form.tanggal,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.username = "";
          this.form.name = "";
          this.form.gender = "";
          this.form.email = "";
          this.form.telpon = "";
          this.form.password = "";
          this.form.tanggal = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(data) {
      axios.delete("http://localhost:3000/users/" + data.id).then((res) => {
        this.load();
        let index = this.users.indexOf(form.username);
        this.users.splice(index, 1);
      });
    },
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}
.aaa {
  font-family: Arial;
  padding: 10px;
  padding-top: 200px;
  padding-bottom: 70px;
  background: #f1f1f1;
}
/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumna {
  margin-left: 20px;
  float: left;
  width: 71%;
}
/* Right column */
.rightcolumna {
  float: left;
  width: 25%;
  background-color: #f1f1f1;
  padding-left: 20px;
}
/* Add a card effect for articles */
.card1 {
  background-color: #f1f1f1;
  padding: 20px;
  display: flex;
  margin-top: 20px;
}
.card {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
.das {
  margin-left: 20px;
}
</style>
