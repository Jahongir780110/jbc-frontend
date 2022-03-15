<template>
  <div class="job pt-4">
    <div class="info">
      <div class="container">
        <the-job :is-shrinked="true" :data="vacancy"></the-job>
        <b-card class="job-description mt-4" title="Description">
          <div v-html="vacancy.description"></div>
        </b-card>
      </div>
    </div>

    <div class="form mt-5">
      <div class="container">
        <div class="wrapper">
          <h2 class="font-weight-bold text-center form-title">
            Send your data
          </h2>

          <div class="text text-center mt-3 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            laborum praesentium explicabo tempora impedit? Eos.
          </div>

          <div class="fields row mt-5">
            <div class="col-sm-6 col-12">
              <b-form-group
                id="input-group-1"
                label="First name:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model.trim="$v.form.firstName.$model"
                  type="text"
                  placeholder="First name"
                  :class="{ 'is-invalid': $v.form.firstName.$error }"
                  required
                ></b-form-input>
                <div v-if="$v.form.firstName.$error" class="text-danger">
                  <small>Please enter at least 3 characters</small>
                </div>
              </b-form-group>
            </div>

            <div class="col-sm-6 col-12">
              <b-form-group
                id="input-group-2"
                label="Last name:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model.trim="$v.form.lastName.$model"
                  placeholder="Last name"
                  :class="{ 'is-invalid': $v.form.lastName.$error }"
                  required
                ></b-form-input>
                <div v-if="$v.form.lastName.$error" class="text-danger">
                  <small>Please enter at least 3 characters</small>
                </div>
              </b-form-group>
            </div>

            <div class="col-sm-6 col-12 mt-sm-3">
              <b-form-group
                id="input-group-3"
                label="Email:"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  v-model.trim="$v.form.email.$model"
                  type="email"
                  placeholder="Email"
                  :class="{ 'is-invalid': $v.form.email.$error }"
                  required
                ></b-form-input>
                <div v-if="$v.form.email.$error" class="text-danger">
                  <small>Please enter valid email address</small>
                </div>
              </b-form-group>
            </div>

            <div class="col-sm-6 col-12 mt-sm-3">
              <b-form-group
                id="input-group-4"
                label="Phone number:"
                label-for="input-4"
              >
                <b-form-input
                  id="input-4"
                  v-model.trim="$v.form.phoneNumber.$model"
                  type="number"
                  placeholder="Phone number"
                  :class="{ 'is-invalid': $v.form.phoneNumber.$error }"
                  required
                ></b-form-input>
                <div v-if="$v.form.phoneNumber.$error" class="text-danger">
                  <small>Please enter valid phone number</small>
                </div>
              </b-form-group>
            </div>

            <div class="file col-12 mt-sm-3">
              <b-form-group id="input-group-5" label="CV:" label-for="input-5">
                <b-form-file
                  id="input-5"
                  v-model.trim="$v.form.resume.$model"
                  placeholder="Choose a file or drop it here..."
                  drop-placeholder="Drop file here..."
                  :class="{ 'is-invalid': $v.form.resume.$error }"
                  @change="sendCV"
                ></b-form-file>
                <div v-if="$v.form.resume.$error" class="text-danger">
                  <small>Please add valid cv</small>
                </div>
              </b-form-group>
            </div>

            <div class="col-12 mt-sm-3">
              <b-form-group
                id="input-group-6"
                label="Cover letter:"
                label-for="input-6"
              >
                <b-form-textarea
                  id="input-6"
                  v-model.trim="$v.form.cover.$model"
                  rows="4"
                  max-rows="6"
                  :class="{ 'is-invalid': $v.form.cover.$error }"
                ></b-form-textarea>
                <div v-if="$v.form.cover.$error" class="text-danger">
                  <small>Please enter at least 20 characters</small>
                </div>
              </b-form-group>
            </div>
          </div>

          <button
            class="form-button mt-4 mx-auto"
            :class="{ disabled: isLoading }"
            @click="send"
          >
            Send
          </button>
        </div>
      </div>
    </div>

    <div class="opinion-short mt-5 pt-4 pb-md-0 pb-2">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-6 col-10 mx-auto left">
            <img
              src="~/static/images/man-with-laptop.png"
              alt="Man with laptop"
              class="w-100"
            />
          </div>
          <div class="col-sm-6 col-12 right pl-4 mt-sm-0 mt-3">
            <div class="opinion-title">True Cloud Web</div>
            <div class="text mt-3 ml-md-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo minima nihil ab optio in totam dolorem, veniam saepe,
              facilis possimus quas, officia dolor nisi architecto repellendus
              excepturi qui corporis quia ad? Corrupti ut eaque quos aliquam
              corporis. Possimus, alias error!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { required, minLength, email, numeric } from 'vuelidate/lib/validators'

export default {
  name: 'CareersPage',
  layout: 'header-changed',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        resume: null,
        cover: '',
        cvUrl: '',
      },
      isLoading: false,
    }
  },
  validations: {
    form: {
      firstName: {
        required,
        minLength: minLength(3),
      },
      lastName: {
        required,
        minLength: minLength(3),
      },
      email: {
        required,
        email,
      },
      phoneNumber: {
        required,
        numeric,
      },
      resume: {
        required,
      },
      cover: {
        required,
        text: minLength(20),
      },
    },
  },
  computed: {
    ...mapGetters({
      vacancies: 'getVacancies',
    }),
    vacancy() {
      return this.vacancies.find(
        (vac) => vac.id === this.$nuxt.$route.params.id
      )
    },
  },
  methods: {
    ...mapActions({
      apiPostCV: 'apiPostCV',
      apiRespondVacancy: 'apiRespondVacancy',
    }),
    async send() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }

      const data = {
        id: this.$nuxt.$route.params.id,
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        email: this.form.email,
        phone: this.form.phoneNumber,
        cv: this.form.cvUrl,
        coverLetter: this.form.cover,
      }

      try {
        this.isLoading = true
        const result = await this.apiRespondVacancy(data)
        this.isLoading = false
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
    async sendCV(event) {
      const fd = new FormData()
      fd.append('resume', event.target.files[0])
      this.isLoading = true
      try {
        const result = await this.apiPostCV(fd)
        this.isLoading = false
        if (result.error) {
          this.form.resume = null
          throw new Error(result.error)
        } else {
          this.form.cvUrl = result.file.url
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
