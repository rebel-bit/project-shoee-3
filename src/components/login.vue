<template>
  <div class="all">
    <div class="up">
      <article>
        <div class="bungkus">
          <h2><b>Log In</b></h2>
          <br />
          <!-- <label>Username</label> -->
          <input
            required
            type="text"
            v-model="username"
            class="form_login"
            placeholder="Username atau email "
          />
          <!-- <label>Password</label> -->
          <br /><input
            required
            type="password"
            v-model="password"
            class="form_login"
            placeholder="Password "
          />
          <br />
          <bottom @click="login" class="btn btn-lg btn-success btn-block"
            ><b>Login</b></bottom
          >
          <div class="smua">
            <div>
              <p><a style="font-size: 13px">Lupa Password?</a></p>
            </div>
            <div style="margin-left: 114px">
              <p><a style="font-size: 13px">Log in dengan no.handphone</a></p>
            </div>
          </div>
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
          <br />
          <center>
            <span>Baru di Shopoo?&nbsp;</span
            ><b><a style="color: white" href="/register">Daftar</a></b>
          </center>
          <br />
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
      form: {
        username: "",
        password: "",
        useres: {},
      },
    };
  },

  methods: {
    async getUsers() {
      axios
        .get("http://localhost:3000/users")
        .then((res) => {
          this.useres = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    login() {
      const login = this.useres.find(
        (data) => data.username === this.username && data.password === this.password
      );
      if (login === undefined) {
        alert("Username Or Password not found");
      } else {
        var convertToString = JSON.stringify(login);
        sessionStorage.setItem("USER_DATA", convertToString);
        this.$router.push("/");
        window.location.reload();
      }
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>
<style>
.up {
  padding-top: 200px;
  padding-bottom: 60px;
  color: white;
}
h6 {
  text-align: center;
  font-size: 15px;
  color: silver;
  margin-top: 10px;
}
.form_login {
  box-sizing: border-box;
  width: 410px;
  padding: 10px;
}

.bungkus {
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  background: linear-gradient(-180deg, purple, rgb(177, 4, 177));
}

.smua {
  display: flex;
}
article {
  -webkit-flex: 3;
  -ms-flex: 3;
  flex: 3;
  padding: 10px;
  border: 1px solid none;
  margin-left: 600px;
  margin-right: 160px;
  padding: 15px;
  border-radius: 3px;
  width: 500px;
  height: 500px;
  @media (min-width: 768px) and (max-width: 1440px) {
    width: 500px;
    height: 500px;
  }
}
</style>
