export default function ({ store, redirect, $axios }) {
  if (!store.getters['auth/isAuthenticated']) redirect('/admin/login')
}
