Clock.js
========

A simple clock for javascript

###use case

    var clock = new Clock();
    clock1.onsec = function(){
        console.log('this has ran ' + this.sec + 'seconds');
    };
    clock1.start();
    clock1.onmin = function(){
    5 == this.min && this.reset();
};
  

###property
<table>

<tr><td>hour</td>hours clock has ran</tr>
<tr><td>min</td>mins clock has ran</tr>
<tr><td>sec</td>secs clock has ran</tr>

</table>
###method
start --start clock

stop --stop clock

reset --stop and reset clock 

###event
onhour --each hour call

onmin --each min call

onsec --each sec call
