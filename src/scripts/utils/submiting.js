const isSubmitting = (form) => form.dataset.submiting === 'true'
const onSubmitting = (form) => (form.dataset.submiting = 'true')
const offSubmitting = (form) => (form.dataset.submiting = 'false')

export { isSubmitting, onSubmitting, offSubmitting }
