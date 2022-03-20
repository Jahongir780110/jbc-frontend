export const strict = false

export const state = () => ({
  vacancies: [],
  employees: [],
  blogs: [],
  isFirstTime: true,
})

export const mutations = {
  setVacancies(state, val) {
    state.vacancies = val
  },
  setEmployees(state, val) {
    state.employees = val
  },
  setBlogs(state, val) {
    state.blogs = val
  },
  setFirstTime(state, val) {
    state.isFirstTime = val
  },
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    try {
      await dispatch('auth/autoLogin')
      await dispatch('apiGetVacancies')
      await dispatch('apiGetEmployees')
      await dispatch('apiGetBlogs')
    } catch (e) {
      console.log(e)
    }
  },

  async apiGetVacancies({ commit }) {
    try {
      const vacancies = await this.$axios.$get('/vacancy/list')
      const result = vacancies.map((vac) => {
        return {
          id: vac._id,
          title: vac.title,
          salaryFrom: vac.salary.from,
          salaryTo: vac.salary.to,
          skills: vac.skills,
          location: vac.location,
          typeOfEmployment: vac.typeOfEmployment,
          description: vac.description,
          isActive: vac.isActive,
          date: vac.createdAt,
        }
      })
      commit('setVacancies', result)
    } catch (e) {
      console.log(e)
    }
  },
  async apiPostVacancy(context, vac) {
    try {
      const result = await this.$axios.$post('/vacancy/create', vac)
      return result
    } catch (e) {
      return { error: e.response.data.errors[0].msg }
    }
  },
  async apiUpdateVacancy(context, data) {
    try {
      const result = await this.$axios.put(
        '/vacancy/update/' + data.id,
        data.vac
      )
      return result
    } catch (e) {
      return {
        error: e.response.data.errors[0].msg,
      }
    }
  },
  async apiDeleteVacancy(context, id) {
    try {
      const result = await this.$axios.$delete('/vacancy/delete/' + id)
      return result
    } catch (e) {
      return {
        error: e.response.data.message,
      }
    }
  },
  async apiRespondVacancy(context, data) {
    try {
      const result = await this.$axios.post('/vacancy/respond/', data)
      return result
    } catch (e) {
      return {
        error: e.response.data.message,
      }
    }
  },

  async apiGetEmployees({ commit }) {
    try {
      const employees = await this.$axios.$post('/employees/list')
      const result = employees.map((emp) => {
        return {
          id: emp._id,
          firstName: emp.firstName,
          lastName: emp.lastName,
          imgUrl: emp.photo,
          position: emp.position,
          from: emp.from,
          to: emp.to,
        }
      })
      commit('setEmployees', result)
    } catch (e) {
      console.log(e)
    }
  },
  async apiPostEmployee(context, emp) {
    try {
      const result = await this.$axios.$post('/employees/create', emp)
      return result
    } catch (e) {
      return { error: e.response.data.errors[0].msg }
    }
  },
  async apiUpdateEmployee(context, data) {
    try {
      const result = await this.$axios.put(
        '/employees/update/' + data.id,
        data.emp
      )
      return result
    } catch (e) {
      return {
        error: e.response.data.message,
      }
    }
  },
  async apiDeleteEmployee(context, id) {
    try {
      const result = await this.$axios.$delete('/employees/delete/' + id)
      return result
    } catch (e) {
      return {
        error: e.response.data.message,
      }
    }
  },

  async apiGetBlogs({ commit }) {
    try {
      const result = await this.$axios.$post('/post/list')
      const blogs = result.map((res) => {
        return {
          id: res.id,
          img: res.img,
          text: res.text,
          title: res.title,
          date: this.$moment(res.createdAt).format('MMMM Do YYYY'),
        }
      })
      commit('setBlogs', blogs)
    } catch (e) {
      console.log(e)
    }
  },
  async apiPostBlog(context, blog) {
    try {
      const result = await this.$axios.$post('/post/create', blog)
      return result
    } catch (e) {
      return { error: e.response.data.message }
    }
  },
  async updateBlog(context, data) {
    try {
      const result = await this.$axios.put('/post/update/' + data.id, data.blog)
      return result
    } catch (e) {
      return {
        error: e.response.data.message,
      }
    }
  },
  async apiDeletePost(context, id) {
    try {
      const result = await this.$axios.$delete('/post/delete/' + id)
      return result
    } catch (e) {
      return {
        error: e.response.data.message,
      }
    }
  },

  async apiPostAvatar(context, fd) {
    try {
      const result = await this.$axios.$post('/upload/avatar', fd)
      console.log('result', result)
      return result
    } catch (e) {
      return { error: e.response.data.message }
    }
  },
  async apiPostImage(context, fd) {
    try {
      const result = await this.$axios.$post('/upload/image', fd)
      return result
    } catch (e) {
      return { error: e.response.data.message }
    }
  },
  async apiPostCV(context, fd) {
    try {
      const result = await this.$axios.$post('/upload/resume', fd)
      return result
    } catch (e) {
      return { error: e.response.data.message }
    }
  },

  async apiPostContact(context, data) {
    try {
      const result = await this.$axios.$post('/contact', data)
      return result
    } catch (e) {
      return { error: e.response.data.message }
    }
  },

  changeFirstTime({ commit }, val) {
    commit('setFirstTime', val)
  },
}

export const getters = {
  getVacancies: (state) => state.vacancies,
  getEmployees: (state) => state.employees,
  getBlogs: (state) => state.blogs,
  getFirstTime: (state) => state.isFirstTime,
}
