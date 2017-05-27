class ThemeProvider extends React.Component {
 //Will invoke when state or props change!
  getChildContext() {
    return {color: this.props.color}
  }

  render() {
    return <div>{this.props.children}</div>
  }
}
//Add color props to context
ThemeProvider.childContextTypes = {
  color: React.PropTypes.string
}
