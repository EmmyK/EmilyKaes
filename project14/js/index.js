document.getElementById('text1').addEventListener("keyup", function(){
    var newText = document.getElementById('text1').value;

    document.getElementById('text2').value = newText;

  });

document.getElementById('update-img').addEventListener("click", function(){
    var dog = document.getElementById('get-img').value;
    console.log(dog);

document.getElementById('kitten');
    kitten.setAttribute('src', dog);
    kitten.setAttribute('alt', 'Img');
    kitten.setAttribute('title', 'New Image');
  });

var paragraph = document.getElementById('to-style');
  document.getElementById('font-button').addEventListener("click", function(){
        var newsize = document.getElementById('font-size').value;

    paragraph.style.fontSize = newsize;
  });
    
 document.getElementById('get-attr').addEventListener("click", function(){
    var input = document.getElementById('kitten2');
    console.log(input.getAttribute('src'));
    console.log(input.getAttribute('alt'));
  });

document.getElementById('count').addEventListener("click", function(){
            var headersByAll = document.querySelectorAll(document.getElementById('element-type').value);
   
document.getElementById('element-count').value = headersByAll.length;
    
        var textcount = document.getElementById('element-count');
console.log(headersByAll.length);
for(i = 0; i < headersByAll.length; i++){
      console.log(headersByAll[i]);
    }
  });