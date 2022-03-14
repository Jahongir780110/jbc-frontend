export default function ({ $axios, redirect, store, req }) {
  if (store.getters['auth/token']) {
    $axios.setToken(store.getters['auth/token'], 'Bearer')
  } else {
    $axios.setToken(false)
  }
  $axios.onError((error) => {
    if (
      error.response.data?.state === undefined &&
      error.response.status === 401
    ) {
      redirect('/admin/login')
    }
  })
}
