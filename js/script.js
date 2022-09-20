// Get the select menu


// combine together


document.addEventListener('click', function (event) {

	// Only run on our select menu
	if (event.target.id !== 'submitButton') return;
    //get cvalues
    var campaignName = document.querySelector('#campaignName').value;
    var campaignType = document.querySelector('#campaignType').value;
    var campaignAudience = document.querySelector('#campaignAudience').value;
    var campaignFrom = document.querySelector('#campaignFrom').value;
    var campaignCategory = document.querySelector('#campaignCategory').value;
    var campaignPromo = document.querySelector('#campaignPromo').value;
    var addthemtogether = campaignName + " | " + campaignType + " | " + campaignAudience + " | " + campaignFrom + " | " + campaignCategory + " | " + campaignPromo;
    console.log("it is: "+ addthemtogether);
	// Do stuff...
    var currentNode = document.getElementById('campaignFullName');
    currentNode.innerText = addthemtogether;



var btn = document.getElementById('copyButton');
var clipboard = new ClipboardJS(btn);

clipboard.on('success', function (e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
});

clipboard.on('error', function (e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
});


var element = document.getElementById("results");
  element.classList.remove("hide");

}, false);


