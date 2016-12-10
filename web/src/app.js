const React = require('react')
// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
const App = React.createClass({
  getInitialState() {
    return {
      file: '',
      name: ''
    }
  },
  render() {
    return (
      <div>
        <h1>File Upload Demo</h1>
        <p>This is a demo of a simple file upload using a json document</p>
        <p>And the File Reader API</p>
        <form>
          <input type="file" />
          <div>
            <img src={this.state.file} style={{height: '200px'}} />
          </div>
          <div>
            <label>Name</label>
            <input type="text"
              value={this.state.name}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }
})

module.exports = App
