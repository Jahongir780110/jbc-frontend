<template>
  <b-card no-body>
    <b-tabs v-model="tabIndex" card class="add-vacancy">
      <b-tab title="Add Vacancy" active>
        <div class="px-md-5 px-3 mt-3 pb-2">
          <h1 class="title">Add Vacancy</h1>
          <b-form-group
            label="Job title"
            label-for="input-1"
            label-cols-lg="1"
            class="mt-5"
          >
            <b-form-input
              id="input-1"
              v-model.trim="$v.form.title.$model"
              placeholder="Enter job title"
              :class="{ 'is-invalid': $v.form.title.$error }"
              trim
            ></b-form-input>
            <div v-if="$v.form.title.$error" class="text-danger">
              <small>Please enter at least 5 characters</small>
            </div>
          </b-form-group>

          <div class="row">
            <div class="col-md-6 col-12">
              <b-form-group
                label="Initial salary ($)"
                label-for="input-2"
                label-cols-xl="2"
                label-cols-lg="3"
                prepend="$"
                class="mt-4"
              >
                <b-form-input
                  id="input-2"
                  v-model.trim="$v.form.salaryFrom.$model"
                  type="number"
                  placeholder="From"
                  :class="{ 'is-invalid': $v.form.salaryFrom.$error }"
                  trim
                ></b-form-input>
                <div v-if="$v.form.salaryFrom.$error" class="text-danger">
                  <small>Please enter only digits</small>
                </div>
              </b-form-group>
            </div>
            <div class="col-md-6 col-12">
              <b-form-group
                label="Final salary ($)"
                label-for="input-3"
                label-cols-xl="2"
                label-cols-lg="3"
                prepend="$"
                class="mt-4"
              >
                <b-form-input
                  id="input-3"
                  v-model.trim="$v.form.salaryTo.$model"
                  type="number"
                  placeholder="To"
                  :class="{ 'is-invalid': $v.form.salaryTo.$error }"
                  trim
                ></b-form-input>
                <div v-if="$v.form.salaryTo.$error" class="text-danger">
                  <small>Please enter only digits</small>
                </div>
              </b-form-group>
            </div>
          </div>

          <b-form-group
            label="Skills"
            label-for="input-4"
            label-cols-lg="1"
            class="mt-4"
          >
            <b-form-tags
              v-model.trim="$v.form.skills.$model"
              input-id="input-4"
              placeholder="Add skill..."
              :class="{ 'is-invalid': $v.form.skills.$error }"
              trim
            ></b-form-tags>
            <div v-if="$v.form.skills.$error" class="text-danger">
              <small>Please add skills</small>
            </div>
          </b-form-group>

          <b-form-group
            v-slot="{ ariaDescribedby }"
            label="Location"
            label-cols-lg="1"
            class="mt-4 location"
          >
            <b-form-radio-group
              id="radio-group-5"
              v-model="form.location"
              :options="locations"
              :aria-describedby="ariaDescribedby"
              name="location"
            ></b-form-radio-group>
          </b-form-group>

          <b-form-group
            v-slot="{ ariaDescribedby }"
            label="Type"
            label-cols-lg="1"
            class="mt-4 type"
          >
            <b-form-radio-group
              id="radio-group-6"
              v-model="form.typeOfEmployment"
              :options="types"
              :aria-describedby="ariaDescribedby"
              name="type"
            ></b-form-radio-group>
          </b-form-group>

          <label class="mt-4">Description</label>
          <vue-editor
            ref="editor1"
            initial-edit-type="wysiwyg"
            :options="options"
          ></vue-editor>

          <div class="buttons px-0 mt-4">
            <b-button variant="primary" @click="create">Create</b-button>
            <b-button variant="outline-secondary ml-2" @click="resetAll"
              >Reset</b-button
            >
          </div>
        </div>
      </b-tab>

      <b-tab title="All Vacancies">
        <div class="px-xl-5 px-3 mt-3 pb-2">
          <h1 class="title">All vacancies</h1>

          <b-table
            class="mt-5"
            :items="vacancies"
            :fields="fields"
            hover
            responsive="xl"
            outlined
          >
            <template #cell(actions)="row">
              <b-button
                size="sm"
                variant="info"
                class="mr-1"
                @click="editVac(row)"
              >
                Edit
              </b-button>
              <b-button size="sm" variant="danger" @click="deleteVac(row)">
                Delete
              </b-button>
            </template>
          </b-table>
        </div>
      </b-tab>

      <b-tab v-if="isEditing" title="Edit Vacancy">
        <div class="px-md-5 px-3 mt-3 pb-2">
          <h1 class="title">Edit Vacancy</h1>
          <b-form-group
            label="Job title"
            label-for="input-1"
            label-cols-xl="1"
            label-cols-lg="2"
            class="mt-5"
          >
            <b-form-input
              id="input-1"
              v-model.trim="$v.form.title.$model"
              placeholder="Enter job title"
              :class="{ 'is-invalid': $v.form.title.$error }"
              trim
            ></b-form-input>
            <div v-if="$v.form.title.$error" class="text-danger">
              <small>Please enter at least 5 characters</small>
            </div>
          </b-form-group>

          <div class="row">
            <div class="col-md-6 col-12">
              <b-form-group
                label="Initial salary ($)"
                label-for="input-2"
                label-cols-xl="2"
                label-cols-lg="3"
                prepend="$"
                class="mt-4"
              >
                <b-form-input
                  id="input-2"
                  v-model.trim="$v.form.salaryFrom.$model"
                  type="number"
                  placeholder="From"
                  :class="{ 'is-invalid': $v.form.salaryFrom.$error }"
                  trim
                ></b-form-input>
                <div v-if="$v.form.salaryFrom.$error" class="text-danger">
                  <small>Please enter only digits</small>
                </div>
              </b-form-group>
            </div>
            <div class="col-md-6 col-12">
              <b-form-group
                label="Final salary ($)"
                label-for="input-3"
                label-cols-xl="2"
                label-cols-lg="3"
                prepend="$"
                class="mt-4"
              >
                <b-form-input
                  id="input-3"
                  v-model.trim="$v.form.salaryTo.$model"
                  type="number"
                  placeholder="To"
                  :class="{ 'is-invalid': $v.form.salaryTo.$error }"
                  trim
                ></b-form-input>
                <div v-if="$v.form.salaryTo.$error" class="text-danger">
                  <small>Please enter only digits</small>
                </div>
              </b-form-group>
            </div>
          </div>

          <b-form-group
            label="Skills"
            label-for="input-4"
            label-cols-lg="1"
            class="mt-4"
          >
            <b-form-tags
              v-model.trim="$v.form.skills.$model"
              input-id="input-4"
              placeholder="Add skill..."
              :class="{ 'is-invalid': $v.form.skills.$error }"
              trim
            ></b-form-tags>
            <div v-if="$v.form.skills.$error" class="text-danger">
              <small>Please add skills</small>
            </div>
          </b-form-group>

          <b-form-group
            v-slot="{ ariaDescribedby }"
            label="Location"
            label-cols-lg="1"
            class="mt-4 location"
          >
            <b-form-radio-group
              id="radio-group-25"
              v-model="form.location"
              :options="locations"
              :aria-describedby="ariaDescribedby"
              name="edit-location"
            ></b-form-radio-group>
          </b-form-group>

          <b-form-group
            v-slot="{ ariaDescribedby }"
            label="Type"
            label-cols-lg="1"
            class="mt-4 type"
          >
            <b-form-radio-group
              id="radio-group-26"
              v-model="form.typeOfEmployment"
              :options="types"
              :aria-describedby="ariaDescribedby"
              name="edit-type"
            ></b-form-radio-group>
          </b-form-group>

          <b-form-group label="isActive" label-cols-lg="1" class="mt-4 switch"
            ><b-form-checkbox id="switch" v-model="form.isActive" switch>
            </b-form-checkbox>
          </b-form-group>

          <label class="mt-4">Description</label>
          <vue-editor
            ref="editor2"
            initial-edit-type="wysiwyg"
            :options="options"
          ></vue-editor>

          <div class="buttons px-0 mt-4">
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
import { mapGetters, mapActions } from 'vuex'
import { required, minLength, numeric } from 'vuelidate/lib/validators'

export default {
  name: 'AddVacancy',
  data() {
    return {
      form: {
        title: '',
        salaryFrom: null,
        salaryTo: null,
        skills: [],
        location: 'Office',
        typeOfEmployment: 'Full time',
        isActive: false,
      },
      locations: [
        { text: 'Office', value: 'Office' },
        { text: 'Remote', value: 'Remote' },
      ],
      types: [
        { text: 'Full time', value: 'Full time' },
        { text: 'Part time', value: 'Part time' },
      ],
      options: {
        hideModeSwitch: true,
      },
      fields: [
        'id',
        'title',
        { key: 'salary', label: 'Salary ($)' },
        'skills',
        'location',
        'type',
        { key: 'actions', label: 'Actions' },
      ],
      tabIndex: 1,
      isEditing: false,
      editId: null,
    }
  },
  validations: {
    form: {
      title: {
        required,
        minLength: minLength(5),
      },
      salaryFrom: {
        required,
        numeric,
      },
      salaryTo: {
        required,
        numeric,
      },
      skills: {
        required,
      },
    },
  },
  computed: {
    ...mapGetters({
      getVacancies: 'getVacancies',
    }),
    vacancies() {
      return this.getVacancies.map((vac) => {
        return {
          id: vac.id,
          title: vac.title,
          salary: vac.salaryFrom + '-' + vac.salaryTo,
          skills: vac.skills.slice(0, 3) + '...',
          location: vac.location,
          type: vac.typeOfEmployment,
        }
      })
    },
  },
  methods: {
    ...mapActions({
      apiGetVacancies: 'apiGetVacancies',
      postVacancy: 'apiPostVacancy',
      updateVacancy: 'apiUpdateVacancy',
      deleteVacancy: 'apiDeleteVacancy',
    }),
    resetAll() {
      this.reset()
      this.$refs.editor1.invoke('reset')
    },
    reset() {
      this.form.title = ''
      this.form.salaryFrom = null
      this.form.salaryTo = null
      this.form.skills = []
      this.form.location = 'Office'
      this.form.typeOfEmployment = 'Full time'
      this.form.isActive = false
      this.$v.$reset()
    },
    cancel() {
      this.isEditing = false
      this.editId = null
      this.tabIndex = 1
      this.form.isActive = false
      this.reset()
      this.$refs.editor2.invoke('reset')
    },
    async create() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }

      const vacancy = {
        title: this.form.title,
        salary: {
          from: this.form.salaryFrom,
          to: this.form.salaryTo,
        },
        skills: this.form.skills,
        location: this.form.location,
        typeOfEmployment: this.form.typeOfEmployment,
        description: this.$refs.editor1.invoke('getHTML'),
        isActive: true,
      }

      try {
        const result = await this.postVacancy(vacancy)
        if (!result.error) {
          this.$bvToast.toast(result.message, {
            title: `Success`,
            variant: 'success',
            solid: true,
            toaster: 'b-toaster-top-center',
          })
          this.reset()
          this.$refs.editor1.invoke('reset')
          this.apiGetVacancies()
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
    editVac(row) {
      const id = row.item.id
      this.isEditing = true
      this.editId = id
      setTimeout(() => {
        this.tabIndex = 3
        const vac = this.getVacancies.find((v) => v.id === id)

        this.form.title = vac.title
        this.form.salaryFrom = vac.salaryFrom
        this.form.salaryTo = vac.salaryTo
        this.form.skills = vac.skills
        this.form.location = vac.location
        this.form.typeOfEmployment = vac.typeOfEmployment
        this.form.isActive = vac.isActive
        this.$nextTick(() => {
          this.$refs.editor2.invoke('setHTML', vac.description)
        })
      }, 500)
    },
    async deleteVac(row) {
      try {
        const result = await this.deleteVacancy(row.item.id)
        if (!result.error) {
          this.$bvToast.toast(result.message, {
            title: `Success`,
            variant: 'success',
            solid: true,
            toaster: 'b-toaster-top-center',
          })
          this.apiGetVacancies()
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
      const vacancy = {
        title: this.form.title,
        salary: {
          from: this.form.salaryFrom,
          to: this.form.salaryTo,
        },
        skills: this.form.skills,
        location: this.form.location,
        typeOfEmployment: this.form.typeOfEmployment,
        description: this.$refs.editor2.invoke('getHTML'),
        isActive: this.form.isActive,
      }

      try {
        const result = await this.updateVacancy({
          id: this.editId,
          vac: vacancy,
        })
        if (!result.error) {
          this.$bvToast.toast(result.data.message, {
            title: `Success`,
            variant: 'success',
            solid: true,
            toaster: 'b-toaster-top-center',
          })
          this.reset()
          this.$refs.editor2.invoke('reset')
          this.apiGetVacancies()
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
  },
}
</script>
