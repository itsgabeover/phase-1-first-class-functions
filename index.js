function receivesAFunction(cb){
    return cb();
}

function returnsANamedFunction(){
    const cb = () => {};
    return cb;
}


/* function returnsAnAnonymousFunction(){
    return () => {};
}

function returnsAnAnonymousFunction(){
    return function(){};
}
*/

returnsAnAnonymousFunction = () => {return () => {}}