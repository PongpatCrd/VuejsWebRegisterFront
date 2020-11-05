<template>
  <div class="container">
    <h1 class="title-space">Login</h1>
      <div class="w-75 mx-auto">
        <b-form @submit="loginUser">
          
          <label for="username"><b>Username</b></label>
          <b-input v-model="username" id="username" required></b-input>
          <br>

          <label for="password"><b>Password</b></label>
          <b-input id="password" v-model="password" type="password" required></b-input>
          <br>

          <div class="text-center group-submit-btn-space">
            <b-row>
              <b-col>
                  <b-button pill block variant="info" class="float-right col-md6" type="submit"><b>LOGIN</b></b-button>
              </b-col>
              <b-col>
                <b-button pill block variant="warning" class="float-left" type="submit"><b>REGISTER</b></b-button>
              </b-col>
            </b-row>
          </div>
        </b-form>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'LoginPage',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async loginUser (evt) {
      evt.preventDefault()
      this.$loading(true)

      const res = await this.callApi(
        'post', 
        'http://localhost:8000/api/login',
        {
          username: this.username,
          password: this.password
        }
      )

      if (res.data.user) {
        this.info('success login')
      } else {
        this.error()
      }

      this.$loading(false)
    }
  },
})
</script>

<style scoped>
  .title-space {
    margin-top: 2em;
    margin-bottom: 1em;
  }

  .group-submit-btn-space {
    margin-top: 1em;
  }
</style>