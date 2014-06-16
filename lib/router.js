Router.configure({
  layoutTemplate: 'layout',

  // Load this page while you wait
  loadingTemplate: 'loading',

  // Load this before you load the page
  waitOn: function(){
    return Meteor.subscribe('posts');
  }
});

Router.map(function(){
  this.route('postsList', {path: '/'});

  this.route('postPage', {
    path: 'posts/:_id',
    data: function() {
      return Posts.findOne(this.params._id);
    }
  });

  this.route('postSubmit', {
    path: '/submit'
  });
});

var requireLogin = function() {
  if(! Meteor.user()) {
    this.render('accessDenied');
    this.stop();
  }
};

Router.before(requireLogin, {only: 'postSubmit'});