document.getElementById('alert').addEventListener("click", function(){alert('Congrats! You Clicked the Button!');
console.log('clicked');
                                                                     });

var promptbutton = document.getElementById("prompt");
promptbutton.addEventListener("click", function() {
	var value = prompt("What is your name?")
	for (i = 0; i < 5; i++) { console.log(value);
	;};
});

 var array1=['Red',	'Orange',	'Yellow',	'Green',	'Blue',	'Indigo',	'Violet'];
  
   for(i = 0; i < array1.length; i++) { 
    document.write(array1[i]);
    document.write('<br>');
  };

 var Mouse = document.getElementById('MouseEvents');
    Mouse.addEventListener("mouseover",function(){      
    console.log('Mouse Entered the Box');
  });
      Mouse.addEventListener("mouseout",function(){      
    console.log('Mouse Left the Box');
  });


var checkbutton = document.getElementById("check");
checkbutton.addEventListener("click", function() {
	if (document.getElementById("first").value == document.getElementById("second").value) {
		alert("True");
	}
	else {
		alert("False");
	};
});




