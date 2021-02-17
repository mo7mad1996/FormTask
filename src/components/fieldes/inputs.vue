<template>
  <div>
    <!--  Start name field  -->
    <div>
      <label for="name">name</label>
      <input id="name" @focus="focus" v-model="name" name=name />

      <div v-show="name.length > 10 || !name" class="err disapled">
        {{ name ? "Enter less than 10 Letters" : "this field required" }}
      </div>
    </div>
    <!--  end name field  -->

    <!--  Start Email field  -->
    <div>
      <label for="Email">Email</label>
      <input
        id="Email"
        type="Email"
        autocomplete="off"
        @focus="focus"
        v-model="Email"
        name=Email
      />

      <div
        v-show="
          Email.indexOf('@') == -1 ||
					Email.indexOf('@') >= Email.length - 1 ||
					!Email
        "
        class="err disapled"
      >
        {{ Email ? "Must insert @ before domain name" : "this field required" }}
      </div>
    </div>
    <!--  end Email field  -->

    <!--  Start password field  -->
    <div>
      <label for="password">password</label>
      <input @focus="focus" id="password" type="password" v-model="Password" name=password />

      <div v-show="Password.length > 20 || !Password" class="err disapled">
        {{ Password ? "Enter less than 20 Letters" : "this field required" }}
      </div>
    </div>
    <!--  End password field  -->
  </div>
</template>

<script>
export default {
  // data start
  data() {
    return {
      name: "",
      Email: "",
      Password: "",
    };
  },
  // data End

  // computed start
  computed: {
    nameOk() {
      // check if name is okay
      if (this.name.length < 10 && this.name) {
        return true;
      } else {
        return false;
      }
    },
    passwordOk() {
      // check if Password is okay
      if (this.Password.length < 20 && this.Password) {
        return true;
      } else {
        return false;
      }
    },
    emailOk() {
      // check if Email is okay
      if (
        this.Email.indexOf("@") > -1 &&
        this.Email.indexOf("@") < this.Email.length - 1 &&
        this.Email
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  // computed End

  // methods string
  methods: {
    focus(e) {
      e.target.nextElementSibling.classList.remove("disapled");
    },
  },
  // methods End

	watch: {
		nameOk(){
			this.$emit('upname', this.nameOk)
		},
		emailOk(){
			this.$emit('upemail', this.emailOk)
		},
		passwordOk(){
			this.$emit('uppass', this.passwordOk)
		}
	}
};
</script>
