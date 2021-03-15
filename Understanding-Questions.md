# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The syntethic event fires which triggers the handler. This handler has a disptach function which fires the action type ADD_ONE to the reducer. The reducer recognizes this case and creates a copy of the previous state obj, incrementing the state.total value by 1. React recognizes that the state object has been updated and rerenders the necessary components to update the UI.
...

* TotalDisplay shows the total plus 1.
