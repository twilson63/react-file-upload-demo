const React = require('react')
const fetch = require('isomorphic-fetch')

const App = React.createClass({
  getInitialState() {
    return {
      file: '',
      name: ''
    }
  },
  handleFile (e) {
    const reader = new window.FileReader()
    reader.addEventListener('load', () => {
      this.setState({file: reader.result})
    }, false)

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
  },
  handleName (e) {
    this.setState({name: e.target.value})
  },
  handleSubmit (e) {
    e.preventDefault()
    fetch('http://localhost:4000/people', {
      method: 'post',
      body: JSON.stringify(this.state),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => console.log(res))
  },
  render() {
    return (
      <div>
        <h1>File Upload Demo</h1>
        <p>This is a demo of a simple file upload using a json document</p>
        <p>And the File Reader API</p>
        <form onSubmit={this.handleSubmit}>
          <input type="file" onChange={this.handleFile} />
          <div>
            <img src={this.state.file} style={{height: '200px'}} />
          </div>
          <div>
            <label>Name</label>
            <input type="text"
              value={this.state.name}
              onChange={this.handleName}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }
})

module.exports = App
