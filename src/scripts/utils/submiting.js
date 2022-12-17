function isSubmitting (form) {
  if (form.dataset.submiting === 'true') return true

  form.dataset.submiting = 'true'
  return false
}

function offSubmitting (form) {
  form.dataset.submiting = 'false'
}

export {
  isSubmitting,
  offSubmitting
}
