<script>
export default {
  functional: true,

  props: {
    /**
     * Имя иконки, в формате camelCase
     */
    name: {
      type: String,
      required: true,
      default: ''
    }
  },

  render (h, context) {
    const { props, data } = context

    // eslint-disable-next-line
    import(/* webpackChunkName: "[request]" */ '@/assets/icons/' + props.name + '.svg')

    const useData = {
      attrs: { 'xlink:href': `#${props.name}` }
    }

    return <svg
      class={'app-icon'}
      {...data}
    >
      <use {...useData} />
    </svg>
  }
}
</script>
