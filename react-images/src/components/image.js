var React = require('react');
var Reflux     = require('reflux');
var Router = require('react-router');
var BannersStore = require('../stores/bannersStore');
 
var Link = require('react-router').Link;
 

var Image21 = React.createClass({
      mixins: [
        Router.Navigation,
        Router.State,
        Reflux.ListenerMixin
      ],

      getInitialState: function() {
        var bannerId = parseInt(this.getParams().id);
        return {
          banner: BannersStore.getBanner(bannerId)
        }
      },
  render: function() {

  return (
      <div>
      <img src={this.state.banner.imageUrl}/>
      </div>
    )
  }
 
});
 
module.exports = Image21;