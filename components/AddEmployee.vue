<template>
  <b-card no-body>
    <b-tabs v-model="tabIndex" card class="add-employee">
      <b-tab title="Add Employee" active>
        <div class="px-md-5 px-3 mt-3 pb-2">
          <h1 class="title">Add Employee</h1>

          <div class="row mt-5">
            <div class="col-md-6 col-12">
              <b-form-group
                label="First name"
                label-for="input-1"
                label-cols-xl="2"
                label-cols-lg="3"
              >
                <b-form-input
                  id="input-1"
                  v-model.trim="$v.form.firstName.$model"
                  placeholder="Enter first name"
                  :class="{ 'is-invalid': $v.form.firstName.$error }"
                  trim
                ></b-form-input>
                <div v-if="$v.form.firstName.$error" class="text-danger">
                  <small>Please enter at least 3 characters</small>
                </div>
              </b-form-group>
            </div>

            <div class="col-md-6 col-12">
              <b-form-group
                label="Last name"
                label-for="input-2"
                label-cols-xl="2"
                label-cols-lg="3"
              >
                <b-form-input
                  id="input-2"
                  v-model.trim="$v.form.lastName.$model"
                  placeholder="Enter last name"
                  :class="{ 'is-invalid': $v.form.lastName.$error }"
                  trim
                ></b-form-input>
                <div v-if="$v.form.lastName.$error" class="text-danger">
                  <small>Please enter at least 3 characters</small>
                </div>
              </b-form-group>
            </div>
          </div>

          <div class="row mt-md-4 date">
            <div class="col-md-6 col-12">
              <b-form-group
                label="Start date"
                label-for="input-3"
                label-cols-xl="2"
                label-cols-lg="3"
              >
                <b-form-datepicker
                  id="input-3"
                  v-model.trim="$v.form.from.$model"
                  placeholder="Enter start date"
                  :class="{ 'is-invalid': $v.form.from.$error }"
                  trim
                ></b-form-datepicker>
                <div v-if="$v.form.from.$error" class="text-danger">
                  <small>Please enter start date</small>
                </div>
              </b-form-group>
            </div>

            <div class="col-md-6 col-12">
              <b-form-group
                label="End date"
                label-for="input-4"
                label-cols-xl="2"
                label-cols-lg="3"
              >
                <b-form-datepicker
                  id="input-4"
                  v-model="form.to"
                  placeholder="Enter end date"
                  reset-button
                  :min="form.from"
                  trim
                ></b-form-datepicker>
              </b-form-group>
            </div>
          </div>

          <b-form-group
            label="Position"
            label-for="input-5"
            label-cols-xl="1"
            label-cols-lg="2"
            class="mt-md-4"
          >
            <b-form-input
              id="input-5"
              v-model.trim="$v.form.position.$model"
              placeholder="Enter position"
              :class="{ 'is-invalid': $v.form.position.$error }"
              trim
            ></b-form-input>
            <div v-if="$v.form.position.$error" class="text-danger">
              <small>Please enter at leaset 3 characters</small>
            </div>
          </b-form-group>

          <b-form-group
            label="Photo"
            label-for="input-6"
            label-cols-xl="1"
            label-cols-lg="2"
            class="mt-md-4 photo"
          >
            <b-form-file
              id="input-6"
              ref="photo1"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
              :class="{ 'is-invalid': $v.form.position.$error }"
              @change="sendPhoto"
            ></b-form-file>
            <div v-if="$v.form.photo.$error" class="text-danger">
              <small>Please choose valid img</small>
            </div>
          </b-form-group>

          <div class="buttons col-xl-11 col-lg-10 ml-auto px-0">
            <b-button variant="primary" @click="create">Create</b-button>
            <b-button variant="outline-secondary ml-2" @click="reset"
              >Reset</b-button
            >
          </div>
        </div>
      </b-tab>

      <b-tab title="All Employees">
        <div class="px-md-5 px-3 mt-3 pb-2">
          <h1 class="title">All employees</h1>

          <b-table
            class="mt-5"
            :items="employees"
            :fields="fields"
            hover
            outlined
          >
            <template #cell(actions)="row">
              <b-button
                size="sm"
                variant="info"
                class="mr-1"
                @click="editEmp(row)"
              >
                Edit
              </b-button>
              <b-button size="sm" variant="danger" @click="deleteEmp(row)">
                Delete
              </b-button>
            </template>
          </b-table>
        </div>
      </b-tab>

      <b-tab v-if="isEditing" title="Edit Employee" active>
        <div class="px-md-5 px-3 mt-3 pb-2">
          <h1 class="title">Edit Employee</h1>

          <div class="row mt-5">
            <div class="col-md-6 col-12">
              <b-form-group
                label="First name"
                label-for="input-1"
                label-cols-xl="2"
                label-cols-lg="3"
              >
                <b-form-input
                  id="input-1"
                  v-model.trim="$v.form.firstName.$model"
                  placeholder="Enter first name"
                  :class="{ 'is-invalid': $v.form.firstName.$error }"
                  trim
                ></b-form-input>
                <div v-if="$v.form.firstName.$error" class="text-danger">
                  <small>Please enter at least 3 characters</small>
                </div>
              </b-form-group>
            </div>

            <div class="col-md-6 col-12">
              <b-form-group
                label="Last name"
                label-for="input-2"
                label-cols-xl="2"
                label-cols-lg="3"
              >
                <b-form-input
                  id="input-2"
                  v-model.trim="$v.form.lastName.$model"
                  placeholder="Enter last name"
                  :class="{ 'is-invalid': $v.form.lastName.$error }"
                  trim
                ></b-form-input>
                <div v-if="$v.form.lastName.$error" class="text-danger">
                  <small>Please enter at least 3 characters</small>
                </div>
              </b-form-group>
            </div>
          </div>

          <div class="row mt-md-4 date">
            <div class="col-md-6 col-12">
              <b-form-group
                label="Start date"
                label-for="input-3"
                label-cols-xl="2"
                label-cols-lg="3"
              >
                <b-form-datepicker
                  id="input-3"
                  v-model.trim="$v.form.from.$model"
                  placeholder="Enter start date"
                  :class="{ 'is-invalid': $v.form.from.$error }"
                  trim
                ></b-form-datepicker>
                <div v-if="$v.form.from.$error" class="text-danger">
                  <small>Please enter start date</small>
                </div>
              </b-form-group>
            </div>

            <div class="col-md-6 col-12">
              <b-form-group
                label="End date"
                label-for="input-4"
                label-cols-xl="2"
                label-cols-lg="3"
              >
                <b-form-datepicker
                  id="input-4"
                  v-model="form.to"
                  placeholder="Enter end date"
                  reset-button
                  :min="form.from"
                  trim
                ></b-form-datepicker>
              </b-form-group>
            </div>
          </div>

          <b-form-group
            label="Position"
            label-for="input-5"
            label-cols-xl="1"
            label-cols-lg="2"
            class="mt-md-4"
          >
            <b-form-input
              id="input-5"
              v-model.trim="$v.form.position.$model"
              placeholder="Enter position"
              :class="{ 'is-invalid': $v.form.position.$error }"
              trim
            ></b-form-input>
            <div v-if="$v.form.position.$error" class="text-danger">
              <small>Please enter at leaset 3 characters</small>
            </div>
          </b-form-group>

          <b-form-group
            label="Photo"
            label-for="input-e6"
            label-cols-xl="1"
            label-cols-lg="2"
            class="mt-md-4 photo"
          >
            <b-form-file
              id="input-e6"
              ref="photo2"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
              :class="{ 'is-invalid': $v.form.position.$error }"
              @change="sendPhoto"
            ></b-form-file>
            <div v-if="$v.form.photo.$error" class="text-danger">
              <small>Please choose valid img</small>
            </div>
          </b-form-group>

          <div class="buttons col-xl-11 col-lg-10 ml-auto px-0">
            <b-button variant="primary" @click="edit">Edit</b-button>
            <b-button variant="outline-secondary ml-2" @click="cancel"
              >Cancel</b-button
            >
          </div>
        </div>
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'AddEmployee',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        from: null,
        to: null,
        position: '',
        photo: null,
      },
      fields: [
        'id',
        { key: 'fullName', label: 'Full name' },
        { key: 'workingYears', label: 'Working years' },
        'position',
        { key: 'actions', label: 'Actions' },
      ],
      tabIndex: 1,
      isEditing: false,
      editId: null,
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
      from: {
        required,
      },
      position: {
        required,
        minLength: minLength(3),
      },
      photo: {
        required,
      },
    },
  },
  computed: {
    ...mapGetters({
      getEmployees: 'getEmployees',
    }),
    employees() {
      return this.getEmployees.map((emp) => {
        return {
          id: emp.id,
          fullName:
            emp.firstName.slice(0, 20) + ' ' + emp.lastName.slice(0, 20),
          workingYears: emp.from + ' - ' + emp.to,
          position: emp.position,
        }
      })
    },
  },
  methods: {
    ...mapActions({
      sendAvatar: 'apiPostAvatar',

      postEmployee: 'apiPostEmployee',
      apiGetEmployees: 'apiGetEmployees',
      apiDeleteEmployee: 'apiDeleteEmployee',
      apiUpdateEmployee: 'apiUpdateEmployee',
    }),
    reset() {
      this.form.firstName = ''
      this.form.lastName = ''
      this.form.from = null
      this.form.to = null
      this.form.position = ''
      this.form.photo = null
      if (this.$refs.photo1) {
        this.$refs.photo1.files = []
      }
      if (this.$refs.photo2) {
        this.$refs.photo2.files = []
      }
      this.$v.$reset()
    },
    cancel() {
      this.isEditing = false
      this.editId = null
      this.tabIndex = 1
      this.reset()
    },

    async create() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }

      const employee = {
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        from: this.form.from,
        to: this.form.to ? this.form.to : undefined,
        position: this.form.position,
        photo: this.form.photo,
      }

      try {
        const result = await this.postEmployee(employee)
        if (!result.error) {
          this.$bvToast.toast(result.message, {
            title: `Success`,
            variant: 'success',
            solid: true,
            toaster: 'b-toaster-top-center',
          })
          this.reset()
          this.apiGetEmployees()
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
    editEmp(row) {
      const id = row.item.id
      this.isEditing = true
      this.editId = id
      setTimeout(() => {
        this.tabIndex = 3
        const emp = this.getEmployees.find((e) => e.id === id)

        this.form.firstName = emp.firstName
        this.form.lastName = emp.lastName
        this.form.from = emp.from
        this.form.to = emp.to
        this.form.position = emp.position
        this.form.photo = emp.imgUrl
      }, 500)
    },
    async deleteEmp(row) {
      try {
        const result = await this.apiDeleteEmployee(row.item.id)
        if (!result.error) {
          this.$bvToast.toast(result.message, {
            title: `Success`,
            variant: 'success',
            solid: true,
            toaster: 'b-toaster-top-center',
          })
          this.apiGetEmployees()
        } else {
          throw new Error(result.error)
        }
      } catch (e) {
        this.$bvToast.toast('Something went wrong!', {
          title: `Error`,
          variant: 'danger',
          solid: true,
          toaster: 'b-toaster-top-center',
        })
      }
    },
    async edit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }

      const employee = {
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        from: this.form.from,
        to: this.form.to ? this.form.to : undefined,
        position: this.form.position,
        photo: this.form.photo,
      }

      try {
        const result = await this.apiUpdateEmployee({
          id: this.editId,
          emp: employee,
        })

        if (!result.error) {
          this.$bvToast.toast(result.data.message, {
            title: `Success`,
            variant: 'success',
            solid: true,
            toaster: 'b-toaster-top-center',
          })
          this.reset()
          this.apiGetEmployees()
        } else {
          throw new Error(result.error)
        }
        this.isEditing = false
        this.editId = null
        this.tabIndex = 1
      } catch (e) {
        this.$bvToast.toast(e.message, {
          title: `Error`,
          variant: 'danger',
          solid: true,
          toaster: 'b-toaster-top-center',
        })
      }
    },

    async sendPhoto(event) {
      const fd = new FormData()
      fd.append('avatar', event.target.files[0])
      try {
        const result = await this.sendAvatar(fd)
        if (!result.error) {
          this.form.photo = result.file.url
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
