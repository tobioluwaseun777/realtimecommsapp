const socket = io({
    reconnection: false,
    reconnectionAttempts: 0
  })



socket.on('connect', () => {
    socket.on('text-typing-event', (data) => {
       document.querySelector(`#${data.inputId}`).value = data.value;
    })

    socket.on('checklist-change', (data) => {
        const idOfTextboxToManipulate = data.checkboxId.split('checkfor')[1];
        const divToShowOrHide =  document.querySelector(`#${idOfTextboxToManipulate}`);
        data.checkedState ? divToShowOrHide.parentNode.style.display = "" : divToShowOrHide.parentNode.style.display = "none";
    })
})

socket.on('disconnect', () => {
    console.log('Disconnected from server');
  });