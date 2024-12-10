Concept :->

  An Event is a user activity which we react to , through a code.
  To react to an event, you attach an event handler OR event listener  to it. This is a block of code (usually a JavaScript function that you as a programmer create) that runs when the event fires.
  When such a block of code is defined to run in response to an event, we say we are registering an event handler.
  


  Three Ways in which you can react to an event :

1) addEventListener
-> Objects that can fire events have an addEventListener() method, and this is the recommended mechanism for adding event handlers.
-> If you've added an event handler using addEventListener(), you can remove it again using the removeEventListener() method. 
-> By making more than one call to addEventListener(), providing different handlers, you can have multiple handlers for a single event:
  /*
  myElement.addEventListener("click", functionA);
  myElement.addEventListener("click", functionB);
  */
-> 
  /*
    btn.addEventListener("click",
  () => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  },
  { signal: controller.signal } // pass an AbortSignal to this handler
  );
  */

2) Event Handler Properties
-> Objects (such as buttons) that can fire events also usually have properties whose name is on followed by the name of the event. For example, elements have a property onclick. 
  This is called an event handler property. To listen for the event, you can assign the handler function to the property.
-> With event handler properties, you can't add more than one handler for a single event. 
  For example, you can call addEventListener('click', handler) on an element multiple times, with different functions specified in the second argument:
  This is impossible with event handler properties because any subsequent attempts to set the property will overwrite earlier ones:
  /*
     element.onclick = function1;
     element.onclick = function2;
  */
-> 
  /*
     btn.onclick = () => {
     const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
     document.body.style.backgroundColor = rndCol;
     };
  */

3) Inline Event handlers
->The earliest method of registering event handlers found on the Web involved event handler HTML attributes (or inline event handlers) like the one shown above 
  — the attribute value is literally the JavaScript code you want to run when the event occurs. 
-> 
  /*
     <button onclick="alert('Hello, this is my old-fashioned event handler!');">
     Press me
     </button>
  */


    Event Object
-> Sometimes, inside an event handler function, you'll see a parameter specified with a name such as event, evt, or e. 
   This is called the event object, and it is automatically passed to event handlers to provide extra features and information.
-> 
    /*
      function bgChange(e) {
      const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
      e.target.style.backgroundColor = rndCol;
      console.log(e);
      }

      btn.addEventListener("click", bgChange);
    */
-> Here you can see we are including an event object, e, in the function, and in the function setting a background color style on e.target — which is the button itself. The target property of the event object is always a reference to the element the event occurred upon. 
  So, in this example, we are setting a random background color on the button, not the page.


    Preventing Default behaviour
-> 
  /*  
  form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault(); // Prevents the form's default submission behavior
    para.textContent = "You need to fill in both names!"; // Displays error message
  }
  });
  */
-> addEventListener: Attaches an event listener to the form for the submit event.
   preventDefault(): Stops the form from being submitted if validation fails.
   Error Handling: Displays a custom error message when any field is empt
