'use strict';

var React = require('react');
var request = require('superagent');

var Tarzan = React.createClass({
  propTypes: {
    source: React.PropTypes.string
  },
  getInitialState: function () {
    return {
      yell: ''
    };
  },
  getTarzanYell: function () {
    request
      .get(this.props.source)
      .accept('application/json')
      .end(function(error, result) {
        var yellObj = result.body;
        if (error) {
          console.log(error);
          return;
        }
        if (this.isMounted()) {
          console.log(result);
          this.setState({
            yell: yellObj.yell
          });
          return;
        }
      }.bind(this));
  },
  componentDidMount: function() {},
  handleClick: function(event) {
    this.getTarzanYell();
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <button type="button" className="btn btn-primary" onClick={this.handleClick}>
            Get Tarzan Yell
          </button>
          <div>
            <h2>{this.state.yell}</h2>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Tarzan;
