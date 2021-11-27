<template>
  <div class="all">
    <div class="up" style="padding-bottom: 200px">
      <article class="article">
        <div class="bungkus">
          <h2><b>Daftar</b></h2>
          <br />
          <!-- <label>Username</label> -->
          <form>
            <input
              required
              type="text"
              v-model="username"
              class="form_login"
              placeholder="Username  "
            /><br />
            <input
              required
              type="text"
              v-model="email"
              class="form_login"
              placeholder="Email "
            />

            <!-- <label>Password</label> -->
            <br /><input
              required
              type="password"
              v-model="password"
              class="form_login"
              placeholder="Password "
            />

            <bottom @click="login()" class="btn btn-lg btn-success btn-block"
              ><b>Daftar</b></bottom
            >
            <br />
            <h6>ATAU</h6>
            <center>
              <button style="background-color: blue; color: white" class="btn">
                <a style="color: white" href="https://www.facebook.com/login/"
                  ><i class="fab fa-facebook-square"></i>&nbsp;&nbsp;Facebook
                </a>
              </button>
              &nbsp;&nbsp;&nbsp;<button
                style="background-color: #5d9fb6"
                class="btn"
              >
                <a
                  style="color: white"
                  href="https://accounts.google.com/servicelogin"
                  ><i class="fab fa-google"></i>&nbsp;&nbsp;Google</a
                >
              </button>
              &nbsp;&nbsp;&nbsp;<button
                style="background-color: black"
                class="btn"
              >
                <a
                  style="color: white"
                  href="https://accounts.google.com/servicelogin"
                  ><i class="fab fa-apple"></i>&nbsp;&nbsp;Apple</a
                >
              </button>
            </center>
            <div class="smuaa">
              <p style="color: white">
                Dengan mendaftar, Anda setuju dengan
                <a
                  style="color: silver"
                  href="https://shopee.co.id/legaldoc/termsOfService/?__classic__=1"
                  >Syarat,<br />
                  Ketentuan dan Kebijakan dari Shoope & Kebijakan <br />
                  Privasi
                </a>
              </p>
            </div>
            <center>
              <span>Punya akun?&nbsp;</span
              ><b><a style="color: white" href="/login">Log In</a></b>
            </center>
            <br />
          </form>
        </div>
      </article>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async getUsers() {
      const user = await axios.get("http://localhost:3000/users");
      this.useres = user.data;
    },
    async login() {
      const payload = {
        username: this.username,
        email: this.email,
        password: this.password,
        role: "admin",
      };
      const register = await axios.post("http://localhost:3000/users", payload);
      var convertToString = JSON.stringify(register.data);
      sessionStorage.setItem("USER_DATA", convertToString);
      this.$router.push("/");
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>
<style>
.form_login {
  box-sizing: border-box;
  width: 460px;
  padding: 10px;
  font-size: 11pt;
  margin-bottom: 20px;
}

.smuaa {
  font-size: 13px;
  text-align: center;
  padding: 20px;
}
</style>
