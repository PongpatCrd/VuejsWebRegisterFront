<template>
  <div class="container">
    <div v-if="!userProfile">
      <h1 class="title-space">Register</h1>
      <div class="w-75 mx-auto">
        <b-form @submit="createUser" @>
          <label for="username"><b>Username</b></label>
          <b-input v-model="username" id="username" @change="usernameValidator" required></b-input>
          <b-form-invalid-feedback :state="validatorUsernameMsg == 'success'">
            {{validatorUsernameMsg}}
          </b-form-invalid-feedback>
          <br>

          <label for="password"><b>Password</b></label>
          <b-input id="password" v-model="password" type="password" @input="passwordValidator" required></b-input>
          <b-form-invalid-feedback :state="validatorPasswordMsg == 'success'">
            {{validatorPasswordMsg}}
          </b-form-invalid-feedback>
          <br>

          <label for="confirmPassword"><b>Confirm Password</b></label>
          <b-input v-model="confirmPassword" id="confirmPassword" type="password" required></b-input>
          <b-form-invalid-feedback :state="doComparePasswordAndConPass">
            Not match with passowrd
          </b-form-invalid-feedback>
          <br>

          <hr class="w-75">
          <br>
          <b-input-group>
            
            <b-input v-model="firstName" id="firstName" placeholder="First Name" class="col-6 mr-sm-3" required></b-input>
            <b-input v-model="lastName" id="lastName" placeholder="Last Name" class="col-6" required></b-input>
          </b-input-group>
          <br>

          <b-input v-model="mobile" id="mobile" placeholder="Mobile" :state="validatorMobileMsg == 'success'" @change="mobileValidator" required></b-input>
          <b-form-invalid-feedback :state="validatorMobileMsg == 'success'">
            {{validatorMobileMsg}}
          </b-form-invalid-feedback>
          <br>

          <b-input v-model="email" id="email" placeholder="Email" :state="validatorEmailMsg == 'success'" @change="emailValidator" required></b-input>
          <b-form-invalid-feedback :state="validatorEmailMsg == 'success'">
            {{validatorEmailMsg}}
          </b-form-invalid-feedback>
          <br><br>

          <div class="text-center">
            <b-button pill variant="info" size="lg" class="w-50" type="submit"><b>JOIN</b></b-button>
          </div>
        </b-form>
      </div>
    </div>
    
    <div v-if="userProfile">
      <div class="container">
        <div class="finish-box">
          <b-card >
            <b-row no-gutters>
              <div class="make-center">
                <b-icon
                  icon="emoji-laughing"
                  variant="info"
                  font-scale="8"
                >
                </b-icon>
              </div>
              <b-col md="8">
                <b-card-body title="Completed">
                  <b-card-text>
                    Please confirm your account in email within 24 hours, Thanks and see you soon!
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'

import * as EmailValidator from 'email-validator';

export default Vue.extend({
  name: 'RegisterPage',
  data () {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      mobile: '',
      email: '',
      validatorUsernameMsg: '',
      validatorPasswordMsg: '',
      validatorMobileMsg: '',
      validatorEmailMsg: '',
      userProfile: null
    }
  },
  computed: {
    doComparePasswordAndConPass () {
      return this.comparePasswordAndConPass()
    },
  },
  methods: {
    emailValidator () {
      if (this.email.length == 0) {
        this.validatorEmailMsg = ''
        return
      }

      if (!EmailValidator.validate(this.email)) {
        this.validatorEmailMsg = 'Invalid email format'
        } else {
        this.validatorEmailMsg = 'success'
      }
    },
    mobileValidator () {
      const regex = /^[0-9]+$/;

      if (this.mobile.length == 0) {
        this.validatorMobileMsg = ''
        return 
      }

      if (!regex.test(this.mobile)) {
        this.validatorMobileMsg = 'Mobile can only be a number'
      } else if (this.mobile.length < 10) {
        this.validatorMobileMsg = 'Follow this format for mobile ex. 0812345678'
      } else {
        this.validatorMobileMsg = 'success'
      }
    },
    passwordValidator () {
      if (this.password.length == 0) {
        this.validatorPasswordMsg = ''
        return
      } 
      if (this.password.length < 6) {
        this.validatorPasswordMsg = 'Please give at least 6 character for password'
        return
      } 
      if (/\s/.test(this.password)) {
        this.validatorPasswordMsg = 'Password must not have white-space'
        return
      }

      let passwordStrength = 0 // max 4
      if (this.password.match(/[a-z]+/)){
          passwordStrength += 1
      } 
      if (this.password.match(/[A-Z]+/)){
          passwordStrength += 1
      } 
      if (this.password.match(/[0-9]+/)){
          passwordStrength += 1
      } 
      if (this.password.match(/[$@#&!]+/)){
          passwordStrength += 1
      }

      if (passwordStrength <= 2) {
        this.validatorPasswordMsg = 'Password is too easy'
      } else {
        this.validatorPasswordMsg = 'success'
      }
    },
    comparePasswordAndConPass () {
      if (this.password != this.confirmPassword) {
        return false;
      } else {
        return true
      }
    },
    usernameValidator () {
      if (this.username.length == 0) {
        this.validatorUsernameMsg = ''
        return
      }
      if (this.username.length <= 6) {
        this.validatorUsernameMsg = 'Please give at least 6 character for username'
        return
      } 
      if (/\s/.test(this.username)) {
        this.validatorUsernameMsg = 'Username must not have white-space'
      } else {
        this.validatorUsernameMsg = 'success'
      }
    },
    async createUser (evt) {
      this.$loading(true)
      evt.preventDefault()
      if (
        this.validatorUsernameMsg == 'success' && 
        this.validatorPasswordMsg == 'success' &&
        this.comparePasswordAndConPass() &&
        this.validatorMobileMsg == 'success' &&
        this.validatorEmailMsg == 'success'
      ) {
          const res = await this.callApi(
            'post', 
            'http://localhost:8000/api/register/create_user',
            {
              'username': this.username,
              'password': this.password,
              'firstName': this.firstName,
              'lastName': this.lastName,
              'mobile': this.mobile,
              'email': this.email,
            }
          )
        
          if (res.status == 201) {
            this.success('User has been created!')
            this.userProfile = res.data.userProfile
          } else {
            this.error()
          }
      } else {
        this.error('Some data is not valid')
      }
      this.$loading(false)
    },
  },
})
</script>

<style scoped>
  .title-space {
    margin-top: 1.2em;
    margin-bottom: 0.8em;
  }

  .finish-box {
    margin: auto;
    margin-top: 20%;
    width: 70%;
  }

  .make-center {
    margin: auto;
  }
</style>