Meteor.publish('posts', function() {
  return Posts.find();
})

//controls what is published to client