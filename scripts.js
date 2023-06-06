document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("form");
    var inputs = form.querySelectorAll("input");
    var missingFields = [];
  
    inputs.forEach(function(input) {
      if (input.value === "") {
        missingFields.push(input.name);
      }
    });
  
    if (missingFields.length > 0) {
      var missingFieldsMessage = "Por favor, complete los siguientes campos: \n" + missingFields.join(", ");
      alert(missingFieldsMessage);
    } else {
      if (confirm("¡Gracias por completar el formulario de adopción! ¿Desea limpiar el formulario para completar otro?")) {
        form.reset();
      }
    }
  });