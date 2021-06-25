const handleChange = ({ target }) => {
  const { name } = target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  console.log(this.state);
  this.setState({
    [name]: value,
  });
}

export default handleChange;