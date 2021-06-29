function receivesAFunction(cb){
    return cb();
}

function returnsANamedFunction(foo){
    return foo = function () {};
}


function returnsAnAnonymousFunction(){
    return function(){};
}