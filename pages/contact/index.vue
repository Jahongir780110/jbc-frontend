<template>
  <div class="contact">
    <div class="container">
      <div class="row mt-5">
        <h1 class="title font-weight-bold px-1">Contact us</h1>
      </div>

      <div class="row mt-3">
        <div
          class="col-lg-5 col-12 details px-2 d-lg-flex d-block flex-column justify-content-between"
        >
          <div class="contact-card d-flex">
            <div class="icon">
              <i class="mdi mdi-email-outline"></i>
            </div>
            <div class="content ml-3">
              <h4 class="font-weight-bold">Email us</h4>
              <div><nuxt-link to="/">prodvd@gmail.com</nuxt-link></div>
              <div class="text mt-1">
                Leave us a message. We are waiting for you.
              </div>
            </div>
          </div>
          <div class="contact-card d-flex mt-3">
            <div class="icon">
              <i class="mdi mdi-phone-outline"></i>
            </div>
            <div class="content ml-3">
              <h4 class="font-weight-bold">Call us</h4>
              <div><nuxt-link to="/">+998 99 999 99 99</nuxt-link></div>
              <div class="text mt-1">Call us any time.</div>
            </div>
          </div>
          <div class="contact-card d-flex mt-3">
            <div class="icon">
              <i class="mdi mdi-map-marker"></i>
            </div>
            <div class="content ml-3">
              <h4 class="font-weight-bold">Visit us</h4>
              <div><nuxt-link to="/">Tashkent, Centre-5</nuxt-link></div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 px-2 mt-lg-0 mt-4 col-12 ml-auto map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.306772736118!2d69.27390578616522!3d41.3239421294403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b383af242e1%3A0x5858b30fc1a40024!2zMzUg0YPQu9C40YbQsCDQkNCx0LTRg9C70LvQsCDQmtCw0LTRi9GA0LgsINCi0LDRiNC60LXQvdGCLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1645896040333!5m2!1sru!2s"
            width="100%"
            height="450"
            style="border: 1px solid silver; border-radius: 5px"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>

    <div class="form mt-5 py-5">
      <div class="container">
        <h1 class="font-weight-bold">Leave us a message</h1>
        <p class="mb-0 text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
          incidunt quas natus reprehenderit voluptatibus similique nostrum sed
          velit laboriosam ut.
        </p>

        <div class="row fields mt-4">
          <div class="col-sm-6 col-12">
            <b-form-group label="Full name:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model.trim="$v.form.fullName.$model"
                type="text"
                placeholder="Enter your full name"
                :class="{ 'is-invalid': $v.form.fullName.$error }"
                required
              ></b-form-input>
              <div v-if="$v.form.fullName.$error" class="text-danger">
                <small>Please enter at least 4 characters</small>
              </div>
            </b-form-group>
          </div>

          <div class="col-sm-6 col-12">
            <b-form-group label="Email address:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model.trim="$v.form.email.$model"
                type="email"
                placeholder="Enter your email address"
                :class="{ 'is-invalid': $v.form.email.$error }"
                required
              ></b-form-input>
              <div v-if="$v.form.email.$error" class="text-danger">
                <small>Please enter valid email</small>
              </div>
            </b-form-group>
          </div>

          <div class="col-12">
            <b-form-group label="Message:" label-for="input-3">
              <b-form-textarea
                id="input-3"
                v-model.trim="$v.form.text.$model"
                placeholder="Enter your message"
                rows="6"
                max-rows="8"
                :class="{ 'is-invalid': $v.form.text.$error }"
              ></b-form-textarea>
              <div v-if="$v.form.text.$error" class="text-danger">
                <small>Please enter at least 20 characters</small>
              </div>
            </b-form-group>
          </div>

          <div class="col-12 mt-3">
            <button class="contact-button" @click="send">Send message</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
  name: 'ContactPage',
  layout: 'header-changed',
  data() {
    return {
      form: {
        fullName: '',
        email: '',
        text: '',
      },
    }
  },
  validations: {
    form: {
      fullName: {
        required,
        minLength: minLength(4),
      },
      email: {
        required,
        email,
      },
      text: {
        required,
        text: minLength(20),
      },
    },
  },
  methods: {
    ...mapActions({
      apiPostContact: 'apiPostContact',
    }),
    async send() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      const data = {
        fullName: this.form.fullName,
        email: this.form.email,
        message: this.form.text,
      }

      try {
        const result = await this.apiPostContact(data)
        if (!result.error) {
          this.$bvToast.toast('Message successfully send', {
            title: `Success`,
            variant: 'success',
            solid: true,
            toaster: 'b-toaster-top-center',
          })
          this.reset()
        } else {
          throw new Error(result.error)
        }
      } catch (e) {
        this.$bvToast.toast('Something went wrong! Please try again.', {
          title: `Error`,
          variant: 'danger',
          solid: true,
          toaster: 'b-toaster-top-center',
        })
      }
    },
    async reset() {
      this.form.firstName = ''
      this.form.lastName = ''
      this.form.email = ''
      this.form.phoneNumber = ''
      this.form.resume = null
      this.form.cover = ''
      this.form.cvUrl = ''
      await this.$nextTick()
      this.$v.$reset()
    },
  },
}
</script>
