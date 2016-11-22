var Cat=function(wathers){
    var self={};
    self.wathers=[wathers];

    self.shouting=function(){
        console.log('cat is shouting...');
        for(var i=0;i<self.wathers.length;i++){
            self.wathers[i].doAction();
        }
    }
    return self;
}
var cat = Cat(mouse);
cat.shouting();