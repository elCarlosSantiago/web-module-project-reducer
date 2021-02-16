# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The onClick _synthetic_ event handler fires.
* The handleAddOneClick callback is called.
* Dispatch is called where it makes sure that the action obj we are passing in is in fact an object and that it has a .type property which is NOT undefined. 
* Then, within the dispatch function, the reducer is called and it is passed the current state and the action object.
*This reducer function call will return a new state object and will update the currentState with this said new obj. 
...

* TotalDisplay shows the total plus 1.
