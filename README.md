
- [ ] Node js is a opensource javascript runtime developed in C++ uses v8 js engine used to develop api network servers. (Runtime is program or env. that runs other programs)
- [ ] Used for developing server side code api, micro services and take out javascript from browsers.

V8 js engine is also used by chrome browser which helps to convert your code to machine language so that system can understand.
It is non blocking does not wait for IO operations, or db tasks instead uses event loops and call backs to handle this so that 1000 of operations can be performed without any blockers.
This is why node js is so fast and efficient.
Single Threaded - single thread that executes the javascript code. - one set of instructions are executed at a time.
Event Loop is a mechanism that allows node js to perform non blocking IO operations.

Request => Event Loop => Register callback => Intense Operations

 Event Loop picks up the callback and executes it <= Added to Event Queue<= Trigger Callback <= Operation Complete 

- [ ] Set type in package.json to “module” to use ES6, default is commons.
- [ ] If you use any other name of script except start or test you need to run “npm run dev”
- [ ] Dev dependencies which are not needed for production environment.
