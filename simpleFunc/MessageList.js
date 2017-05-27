class MessageList extends React.Component {
//(2)Add getChildContext
 getChildContext() {
    return {color: "purple"};
  }
  render() {
    const color = "purple";
    const children = this.props.messages.map((message) =>
      <Message text={message.text} color={color} />
    );
    return <div>{children}</div>;
  }
}
//(1)Add MessageList.childContextTypes
MessageList.childContextTypes = {
  color: PropTypes.string
};