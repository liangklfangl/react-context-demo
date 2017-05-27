class Button extends React.Component {
Button.contextTypes = {
  color: PropTypes.string
};
//1. If contextTypes is not defined, then context will be an empty Object
//   such as Message component
  render() {
    return (
      <button style={{background: this.context.color}}>
        {this.props.children}
      </button>
    );
  }
}