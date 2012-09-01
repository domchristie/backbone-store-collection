Backbone Store Collection
=========================

Extends a collection's `get` method to fetch models from the server if not found locally.

Write ups: [Using Backbone.js Class Properties as Data Stores](http://domchristie.co.uk/posts/31) and [Part 2](http://domchristie.co.uk/posts/32)

Usage
-----

    Posts = Backbone.StoreCollection.extend({
      url: '/posts'
    });
    
    var posts = new Posts(),
        post = new Backbone.Model({ id: 1 });
        
    posts.add(post);
    
    // Retrieving model from collection
    posts.get(1, function() {
      success: function(model, response) {
        // do something with model
      }
    });
    
    // Fetching model from server
    posts.get(32, function() {
      success: function(model, response) {
        // do something with model
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