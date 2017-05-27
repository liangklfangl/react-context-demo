
class TodoList extends React.PureComponent {
  render() {
    return (<ul>
      {this.props.todos.map(todo => 
        <li key={todo}><ThemedText>{todo}</ThemedText></li>
      )}
    </ul>)
  }
}