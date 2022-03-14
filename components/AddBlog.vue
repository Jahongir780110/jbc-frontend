<template>
  <b-card no-body>
    <b-tabs v-model="tabIndex" card class="add-blog">
      <b-tab title="Add Blog" active>
        <div class="px-md-5 px-3 mt-3 pb-2">
          <h1 class="title">Add Blog</h1>
          <b-form-group
            label="Blog title"
            label-for="input-1"
            label-cols-xl="1"
            label-cols-lg="2"
            class="mt-5"
          >
            <b-form-input
              id="input-1"
              v-model.trim="$v.title.$model"
              placeholder="Enter blog title"
              :class="{ 'is-invalid': $v.title.$error }"
              trim
            ></b-form-input>
            <div v-if="$v.title.$error" class="text-danger">
              <small>Please enter at least 5 characters</small>
            </div>
          </b-form-group>

          <b-form-group
            label="Blog image"
            label-for="input-2"
            label-cols-xl="1"
            label-cols-lg="2"
            class="mt-4 photo"
          >
            <b-form-file
              id="input-2"
              ref="photo1"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
              :class="{ 'is-invalid': $v.photo.$error }"
              @change="sendPhoto"
            ></b-form-file>
            <div v-if="$v.photo.$error" class="text-danger">
              <small>Please choose valid image</small>
            </div>
          </b-form-group>

          <label class="mt-4">Content</label>
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

      <b-tab title="All Blogs">
        <div class="px-md-5 px-3 mt-3 pb-2">
          <h1 class="title">All Blogs</h1>

          <b-table
            class="mt-5"
            :items="getBlogs"
            :fields="fields"
            hover
            outlined
          >
            <template #cell(actions)="row">
              <b-button
                size="sm"
                variant="info"
                class="mr-1"
                @click="editBlog(row)"
              >
                Edit
              </b-button>
              <b-button size="sm" variant="danger" @click="deleteBlog(row)">
                Delete
              </b-button>
            </template>
          </b-table>
        </div>
      </b-tab>

      <b-tab v-if="isEditing" title="Edit Blog">
        <div class="px-md-5 px-3 mt-3 pb-2">
          <h1 class="title">Edit Blog</h1>
          <b-form-group
            label="Blog title"
            label-for="input-1"
            label-cols-xl="1"
            label-cols-lg="2"
            class="mt-5"
          >
            <b-form-input
              id="input-1"
              v-model.trim="$v.title.$model"
              placeholder="Enter blog title"
              :class="{ 'is-invalid': $v.title.$error }"
              trim
            ></b-form-input>
            <div v-if="$v.title.$error" class="text-danger">
              <small>Please enter at least 5 characters</small>
            </div>
          </b-form-group>

          <b-form-group
            label="Blog image"
            label-for="input-e2"
            label-cols-xl="1"
            label-cols-lg="2"
            class="mt-4 photo"
          >
            <b-form-file
              id="input-e2"
              ref="photo2"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
              :class="{ 'is-invalid': $v.photo.$error }"
              @change="sendPhoto"
            ></b-form-file>
            <div v-if="$v.photo.$error" class="text-danger">
              <small>Please choose valid image</small>
            </div>
          </b-form-group>

          <label class="mt-4">Content</label>
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
import { mapActions, mapGetters } from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'AddVacancy',
  data() {
    return {
      title: '',
      photo: null,
      options: {
        hideModeSwitch: true,
      },
      fields: [
        'id',
        { key: 'title', label: 'Blog title' },
        { key: 'date', label: 'Date' },
        { key: 'actions', label: 'Actions' },
      ],
      tabIndex: 1,
      isEditing: false,
      editId: null,
    }
  },
  validations: {
    title: {
      required,
      minLength: minLength(5),
    },
    photo: {
      required,
    },
  },
  computed: {
    ...mapGetters({
      getBlogs: 'getBlogs',
    }),
  },
  methods: {
    ...mapActions({
      apiSendImage: 'apiPostImage',
      apiPostBlog: 'apiPostBlog',
      apiGetBlogs: 'apiGetBlogs',
      apiDeletePost: 'apiDeletePost',
      updateBlog: 'updateBlog',
    }),

    resetAll() {
      this.reset()
      this.$refs.editor1.invoke('reset')
    },
    reset() {
      this.title = ''
      this.photo = null
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
      this.$refs.editor2.invoke('reset')
    },

    async create() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }

      const blog = {
        title: this.title,
        img: this.photo,
        text: this.$refs.editor1.invoke('getHTML'),
      }

      try {
        const result = await this.apiPostBlog(blog)
        if (!result.error) {
          this.$bvToast.toast('Blog successfully created', {
            title: `Success`,
            variant: 'success',
            solid: true,
            toaster: 'b-toaster-top-center',
          })
          this.reset()
          this.$refs.editor1.invoke('reset')
          this.apiGetBlogs()
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

    editBlog(row) {
      const id = row.item.id
      this.isEditing = true
      this.editId = id
      setTimeout(() => {
        this.tabIndex = 3
        const blog = this.getBlogs.find((b) => b.id === id)

        this.title = blog.title
        this.photo = blog.img
        this.$nextTick(() => {
          this.$refs.editor2.invoke('setHTML', blog.text)
        })
      }, 500)
    },
    async deleteBlog(row) {
      try {
        const result = await this.apiDeletePost(row.item.id)
        if (!result.error) {
          this.$bvToast.toast(result.message, {
            title: `Success`,
            variant: 'success',
            solid: true,
            toaster: 'b-toaster-top-center',
          })
          this.apiGetBlogs()
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

      const blog = {
        title: this.title,
        img: this.photo,
        text: this.$refs.editor2.invoke('getHTML'),
      }

      try {
        const result = await this.updateBlog({
          id: this.editId,
          blog,
        })
        if (!result.error) {
          this.$bvToast.toast(result.data.message, {
            title: `Success`,
            variant: 'success',
            solid: true,
            toaster: 'b-toaster-top-center',
          })
          this.reset()
          this.apiGetBlogs()
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
      fd.append('image', event.target.files[0])
      try {
        const result = await this.apiSendImage(fd)
        if (!result.error) {
          this.photo = result.file.url
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
