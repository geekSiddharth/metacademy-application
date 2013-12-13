/*
 Collections that are properties of the Node model
 */

define(["backbone", "base/models/node-property-models"], function(Backbone, NodePropertyModels){

  /**
   * collection of resource models
   */
  var ResourceCollection = Backbone.Collection.extend({
    model: NodePropertyModels.Resource,

    /**
     * Returns a backbone collection of the free resources TODO does this maintain the cid correctly?
     */
    getFreeResources: function(){
      return new ResourceCollection(this.where({free: 1}));
    },

    /**
     * Returns a backbone collection of the paid resources TODO does this maintain the cid correctly?
     */
    getPaidResources: function(){
      return new ResourceCollection(this.where({free: 0}));
    },

    getCore: function(){
      return new ResourceCollection(this.where({core: 1}));
    },

    getSupplemental: function(){
      return new ResourceCollection(this.where({core: 0}));
    }

  });


  /**
   * Collection of question models
   */
  var QuestionCollection = Backbone.Collection.extend({
    model: NodePropertyModels.Question
  });

  return {
    QuestionCollection: QuestionCollection,
    ResourceCollection: ResourceCollection
  };
});