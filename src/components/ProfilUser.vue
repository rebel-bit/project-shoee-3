<template>
  <div class="semua" >
    <div class="box1">
      <div class="img" style="display: flex">
        <div class="one">
          <img
            src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png"
            width="50px"
            height="50px"
          />
        </div>
        <div
          class="two"
          style="margin-left: 15px"
        >
          <p v-if="roles === 'customer'">
            {{ user.username }} <br /><span @click="edit(data)" style="color: silver"
              ><i class="fas fa-pencil-alt"></i>Ubah</span
            >
          </p>
        </div>
      </div>
      <hr />
      <p>
        <b
          ><a href=""
            ><i class="fa fa-user" aria-hidden="true">&nbsp;&nbsp;</i>Akun
            Saya</a
          ></b
        >
      </p>
    </div>
    <div class="box2">
      <h5>Profil Saya</h5>
      <p>
        Kelola informasi profil Anda untuk mengontrol, melindungi dan
        mengamankan akun
      </p>
      <hr />
      <div class="form1">
        <form v-if="roles === 'customer'">
          <label style="text-align: right">Username</label>&nbsp;&nbsp;&nbsp;
          <input
            style="margin-left: 45px"
            type="text"
            :value="user.username"
          /><br /><br />
          <label>Nama</label>&nbsp;&nbsp;&nbsp;
          <input
            style="margin-left: 73px"
            type="text"
            :value="user.name"
          /><br /><br />
          <label>Email</label>&nbsp;&nbsp;&nbsp;
          <input
            style="margin-left: 79px"
            type="text"
            :value="user.email"
          /><br /><br />
          <label>Nomor Telpon</label>&nbsp;&nbsp;&nbsp;
          <input
            style="margin-left: 15px"
            type="text"
            :value="user.telpon"
          /><br /><br />
          <label>Tanggal Lahir</label>&nbsp;&nbsp;&nbsp;
          <input style="margin-left: 23px" type="date" :value="user.lahir" />
          <div class="bttn">
            <button
                  type="button"
                  v-show="updateSubmit"
                  @click="update(form)"
                  style="margin: auto; width: 370px"
                >
                  <b> Update </b>
                </button>
            <br />
          </div>
        </form>
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
      roles: JSON.parse(sessionStorage.getItem("USER_DATA")).role,
      form: {
        id: "",
        username: "",
        name: "",
        email: "",
        telpon: "",
      },
      users: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
    this.getUser();
  },
  methods: {
    getUser() {
      let user = JSON.parse(sessionStorage.getItem("USER_DATA"));
      this.roles = user === null ? "" : user.role;
    },
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
          (this.form.email = ""),
          (this.form.telpon = "");
      });
    },
    edit(data) {
      this.updateSubmit = true;
      this.form.id = data.id;
      this.form.username = data.username;
      this.form.name = data.name;
      this.form.email = data.email;
      this.form.telpon = data.telpon;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/users/" + form.id, {
          username: this.form.username,
          name: this.form.name,
          email: this.form.email,
          telpon: this.form.telpon,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.username = "";
          this.form.name = "";
          this.form.email = "";
          this.form.telpon = "";
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
.semua {
  display: flex;
  border: 1px solid none;
  padding: 20px;
  background-color: #eeeeee;
  height: 630px;
  margin: auto;
  padding-top: 200px;
  padding-bottom: 650px;
}
.box1 {
  padding: 20px;
  border: 1px solid none;
  background-color: #eeeeee;
}
.box2 {
  border: 1px solid w;
  margin-left: 70px;
  padding: 20px;
  background-color: white;
  width: 1000px;
  height: 600px;
}
.form1 {
  border: 1px solid none;
  padding: 50px;
  margin-top: -40px;
}
input {
  width: 400px;
  padding: 5px;
}
label {
  text-align: right;
  border: 1px solid none;
  padding: 5px;
}
.bttn {
  margin-left: 145px;
  border: 1px solid none;
  background-color: pupe;
}
</style>
