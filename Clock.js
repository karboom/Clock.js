function clock(){
    this.hour = 0;
    this.min = 0;
    this.sec = 0;
    this._tid = null;
}

clock.prototype.start = function(){
    this._tid = setInterval((function(obj){return function(){obj.update();}})(this),1000);
};

clock.prototype.update = function(){
    if(this.sec == 59){
        this.sec = 0;
    }else{
        this.sec += 1;
        this.hasOwnProperty('onsec') && this.onsec();
    };

    if(this.sec == 00){
        this.min += 1;
        this.hasOwnProperty('onmin') && this.onmin();
    };

    if(this.min == 0){
        this.hour += 1;
        this.hasOwnProperty('onhour') && this.onhour();
    };

};

clock.prototype.stop = function(){
    clearInterval(this._tid);
};

clock.prototype.reset = function(){
    this.stop();
    this.sec = 0;
    this.min = 0;
    this.hour = 0;
};
