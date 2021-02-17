<template>
  <form @submit.prevent="submit" ref="form">
    <h2>Create Account</h2>

    
    <Inputs @upname="upname" @upemail="upemail" @uppass="uppass" />
    <Map />
    <Images />

    <!-- submit btn -->
    <input
      type="submit"
      name="next"
      class="next action-button"
      value="Create"
    />
  </form>
</template>

<script>
import Inputs from "./fieldes/inputs";
import Map from './fieldes/Map';
import Images from "./fieldes/Images";

export default {
  // components
  components: {
    Inputs,
    Map,
    Images,
  },

  data() {
    return {
      nameOk: false,
      passwordOk: false,
      emailOk: false,
    };
  },

  // methods Start
  methods: {
    submit() {
      if (this.nameOk && this.passwordOk && this.emailOk) {
        this.$refs.form.submit();
      } else {
        //show Errors
        document
          .querySelectorAll(".disapled")
          .forEach((el) => el.classList.remove("disapled"));
      }
    },
    upname(val) {
      this.nameOk = val;
    },
    upemail(val) {
      this.emailOk = val;
    },
    uppass(val) {
      this.passwordOk = val;
    },
  },
  // methods End
};
</script>

<style>
/* Google Font */
@import url("https://fonts.googleapis.com/css2?family=Tajawal&display=swap");

/*form styles*/
form {
  font-family: Tajawal;
  width: 400px;
  margin: 50px auto;
  position: relative;
  background: #eee;
  padding: 10px;
  box-shadow: 0 0 4px #0003;
  border-radius: 4px;
}
/*header*/
form h2 {
  text-align: center;
  padding-bottom: 10px;
}
/*inputs*/
form input {
  padding: 10px 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
  box-sizing: border-box;
  font-family: montserrat;
  color: #2c3e50;
  font-size: 13px;
}

form label {
  font-size: 14px;
  text-transform: capitalize;
}

/* errors */
form .err {
  margin-bottom: 10px;
  font-size: 0.8em;
  color: tomato;
  text-align: right;
}
form .err.disapled {
  display: none;
}

/*button*/
form .action-button {
  width: 100px;
  background: #27ae60;
  font-weight: bold;
  color: white;
  border: 0 none;
  border-radius: 1px;
  cursor: pointer;
  padding: 10px 5px;
  margin: 10px auto;
  text-transform: uppercase;
  display: block;
}
form .action-button:hover,
form .action-button:focus {
  box-shadow: 0 0 0 2px white, 0 0 0 3px #27ae60;
}
</style>
