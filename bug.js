This error occurs when you use a state variable in a functional component before it has been initialized.  This commonly happens when you try to access the state variable within the component's body before the component has finished mounting and React has had the chance to set the initial state.