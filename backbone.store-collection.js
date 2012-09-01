Backbone.StoreCollection = Backbone.Collection.extend({
  
  get: function(id, options) {
    var modelFromStore = Backbone.Collection.prototype.get.call(this, id); // (super)
    
    if(modelFromStore) {
      options.success(modelFromStore);
    }
    else {
      var newModel = new this.model({ id: id }),
          _this = this;
      newModel.fetch({
        success: function(model, response) {
          _this.add(model);
          options.success(model, response);
        },
        error: function(model, response) {
          _this.remove(model);
          options.error(model, response);
        }
      });
    }
  }
});