// Get the button element by its ID
const button = document.getElementById('myButton');

// Add a click event listener to the button
button.addEventListener('click', function() {
    // Code to be executed when the button is clicked
    console.log('Button clicked!');
});
document.getElementById('button').addEventListener('mouseenter',()=>{
    button.innerHTML='not ok'
})