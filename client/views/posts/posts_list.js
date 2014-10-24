Template.postsList.helpers({ 
  posts: function() {
  return Posts.find({}, {sort: {submitted: -1}}); 
  }
});

//posts list helper and passes post JS objects to templates