Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('posts'); }
  //subscribes app to posts collection & waits for posts to load
});

Router.map(function() {
  this.route('postsList', {path: '/'});
});