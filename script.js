 
function highlight() {
    //Write your code here
  var boldWords = document.querySelectorAll('strong')
  boldWords.forEach(function(word) {
    word.style.color = 'green';
  });
}
function return_normal() {
   var boldWords = document.querySelectorAll('strong')
  boldWords.forEach(function(word) {
    word.style.color = 'black';
  });
}


function return_normal() {
    //Write your code here
	let boldWords = document.getElementByTagName('strong');
	for(let i=0;i<boldWords.length; i++){
		boldWords[i].style.color = 'black';
	}
    
}
