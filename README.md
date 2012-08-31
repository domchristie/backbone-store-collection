Backbone Store Collection
=========================

Extends a collection's `get` method to fetch models from the server if they not found locally.

Write ups: [Using Backbone.js Class Properties as Data Stores](http://domchristie.co.uk/posts/31) and [Part 2](http://domchristie.co.uk/posts/32)

Usage
-----

Define your store collection first:

    Blog.Collections.Posts = Backbone.StoreCollection.extend({
      url: '/posts'
    });

Instantiate the store collection as a class property. Add models to the store on initialize:

    Blog.Models.Post = Backbone.Model.extend({
      initialize: function() {
        this.constructor.store().add(this);
      }
    }, {
      store: function() {
        return this._store = this._store ||
          new Blog.Collections.Posts(null, { model: this });
      }
    });

Retrieve any instantiated models using `get`:

    var post;
    Blog.Models.Post.store().get(1, {
      success: function(model, response) {
        post = model;
      },
      error: function(model, response) {
        // say sorry
      }
    });

Todo
----
Add tests.

Licence
-------
Backbone Store Collection is copyright &copy; 2012 [Dom Christie](http://domchristie.co.uk) and released under the MIT license.