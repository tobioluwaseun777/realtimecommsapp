const socket = io.connect({
    reconnection: false,
    reconnectionAttempts: 0
  });
  
const container = document.querySelector('#mycontainer')

socket.on('connect', () => {
    // Convert inputElements to an array and iterate using forEach checks an input tag on input action
    Array.from(container.getElementsByTagName('input')).forEach(inputElement => {
    inputElement.addEventListener('keyup', function() { 
      // not using arrow functions here to support the this keyword
      const inputId = this.id; // Get the ID of the input element
      const text = this.value  // Get the current value of input element
      console.log('Typing in input:', inputId, this.value);
      // Do something with the specific input element
      socket.emit('text-typing-event', {
        // passing the input tag id and input value as the emitted data to the subscribers.
        inputId, 
        value:text 
      })  
  
    });
  });
  



// Convert checkboxElements to an array and iterate using forEach
Array.from(container.querySelectorAll('input[type="checkbox"]')).forEach(checkboxElement => {
  checkboxElement.addEventListener('change', function() {
    const checkboxId = this.id; // Get the ID of the checkbox element
    const isChecked = this.checked; // Get the current checked state of check box
    console.log(`Checkbox ${checkboxId} is ${isChecked ? 'checked' : 'unchecked'}`);
    // Do something with the specific checkbox element
    socket.emit('checklist-change', {
        // passing the input tag id and input value as the emitted data to the subscribers.
        checkboxId, 
        checkedState:isChecked 
      })  
  });
});


})

socket.on('disconnect', () => {
    console.log('Disconnected from server');
  });
