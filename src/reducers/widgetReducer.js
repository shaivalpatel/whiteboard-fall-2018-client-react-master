const widget = (state, action) =>
{
  switch (action.type) {
    case 'LOAD_WIDGETS':
      return {
        widgets: action.widgets
      }
    default:
      return {
        widgets: []
      }
  }
}

export default widget