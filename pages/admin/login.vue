<template>
  <div class="admin-login">
    <h1 class="font-weight-bold">Login Form</h1>
    <div>
      <b-form-input
        v-model.trim="$v.form.email.$model"
        type="email"
        placeholder="Enter email"
        class="mt-5"
        :class="{ 'is-invalid': $v.form.email.$error }"
        required
      ></b-form-input>
      <div v-if="$v.form.email.$error" class="text-danger">
        <small>Please enter valid email</small>
      </div>
    </div>

    <div>
      <b-form-input
        v-model.trim="$v.form.password.$model"
        type="password"
        placeholder="Enter password"
        class="mt-3"
        :class="{ 'is-invalid': $v.form.password.$error }"
        required
      ></b-form-input>
      <div v-if="$v.form.password.$error" class="text-danger">
        <small>Please enter at least 6 characters</small>
      </div>
    </div>
    <b-button variant="primary" class="mt-4" @click="login">Login</b-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
  name: 'AminLoginPage',
  layout: 'admin',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },
  methods: {
    ...mapActions({
      apiLogin: 'auth/login',
    }),
    async login() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }

      try {
        const result = await this.apiLogin({ ...this.form })
        if (!result.error) {
          this.$router.push('/admin')
        } else {
          throw new Error(result.error)
        }
      } catch (e) {
        this.$bvToast.toast(e.message, {
          title: `Error`,
          variant: 'danger',
          solid: true,
          toaster: 'b-toaster-top-center',
        })
      }
    },
  },
}
</script>
