Template.postItem.helpers({
  domain: function(){
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
})

//post item helper - formats handlebar {{domain}} to just display hostname