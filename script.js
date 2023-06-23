function highlight() {
    //Write your code here
	let boldwords = document.getElementByTagName('strong');// select tag name
	for(let i=0; i<boldwords.length; i++){
		boldwords[i].style.color = 'green';
	}
	


}


function return_normal() {
    //Write your code here
	let boldWords = document.getElementByTagName('strong');
	for(let i=0;i<boldWords.length; i++){
		boldWords[i].style.color = 'black';
	}
    
}
