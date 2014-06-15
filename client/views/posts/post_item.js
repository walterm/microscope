Template.postItem.helpers({
  domain: function(){
    var a = document.createElement("a");
    // This = each individual post item
    a.href = this.url;
    return a.hostname;
  }
});