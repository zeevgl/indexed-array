function IndexedArray(arrayData){

  //--------------------------------------------------------------
  //                              PRIVATE:
  //--------------------------------------------------------------
  var self = this;
  var indexes={};
  
  function indexArray(indexName){
    indexes[indexName]={};
    for(var i=0;i<arrayData.length;i++){
      //arrayData[i]
    }
  }
  
  
  //--------------------------------------------------------------
  //                              PUBLIC:
  //--------------------------------------------------------------
  
  this.addIndex = function(indexName, indexKey){
    indexes[indexName]=indexKey;
    indexArray(indexName);
  };
  
  this.getByIndex = function(indexName){
    
  };
  
  this.sortByIndex = function(indexName, direction){
    
  };
  
  this.addItem = function(item){
    
  }
  
}

//--------------------------------------------------------------
//                              PUBLIC STATIC:
//--------------------------------------------------------------
//SnEmoticons.themsList={
//  "default":"/app_chat/libs/emoticon/default"
//};