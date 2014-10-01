Template.postsList.helpers({ 
  posts: function() {
  return Posts.find(); 
  }
});

//posts list helper and passes post JS objects to templates