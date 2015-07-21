'use strict';

var React = require('react');
var Tarzan = require('./tarzan');

var Facebook = React.createClass({
  propTypes: {
    subtitle: React.PropTypes.string,
    title: React.PropTypes.string
  },
  getInitialState: function () {
    return {};
  },
  componentDidMount: function () {},
  componentWillUnmount: function () {},

  render: function() {
    return (
      <div>
        <header>
          <div className="container">
            <div className="col-lg-12">
              <div className="col-lg-6">
                <img
                  className="img-responsive"
                  src="/images/mullet_600.png"
                  width="200"
                  alt="Mullet"/>
              </div>
              <div className="col-lg-6">
                <img
                  className="img-responsive"
                  src="/images/aws_logo.jpg"
                  width="350"
                  alt="Amazon"/>
              </div>
              <p className="title">{this.props.title}</p>
              <p className="subtitle">{this.props.subtitle}</p>
            </div>
            <Tarzan source="https://i2srlp9460.execute-api.us-west-2.amazonaws.com/prod/tarzanresource"/>
          </div>
        </header>
      </div>
    );
  }
});

module.exports = Facebook;
