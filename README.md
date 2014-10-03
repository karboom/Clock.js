Clock.js
========

A simple clock for javascript

###how to use
```html
<script src="path-to-your/Clock.js"></script>
```
```javascript
    var clock = new Clock();
    
    clock.onsec = function(){
        console.log('this has ran ' + this.sec + 'seconds');
    };
    
    clock.start();
```	
more for below

###properties
| property | description |
|--------|--------|
|hour|hours clock has ran|
|min|mins clock has ran|
|sec|secs clock has ran|

###method
|method|description|
|---|---|
|start |start clock|
|stop | stop clock|
|reset |stop and reset clock|

###event
|event|description|
|---|---|
|onhour|each hour call|
|onmin|each min call|
|onsec |each sec call|
