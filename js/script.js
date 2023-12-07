// Get the select menu

// combine together

document.addEventListener(
  "click",
  function (event) {
    // Only run on submit button click
    if (event.target.id !== "submitButton") return;
    //get cvalues
    // var campaignName = document.querySelector("#campaignName").value;
    // var campaignType = document.querySelector("#campaignType").value;
    // var campaignFrom = document.querySelector("#campaignFrom").value;
    // var campaignCategory = document.querySelector("#campaignCategory").value;
    // var campaignPromo = document.querySelector("#campaignPromo").value;
    // var type = document.querySelector("#type").value;
    // var channel = document.querySelector("#channel").value;
    // var messageType = document.querySelector("#messageType").value;
    // var test = document.querySelector("#test").value;
    // var step = document.querySelector("#step").value;
    // var language = document.querySelector("#language").value;
    // create the campaign string
    // var addthemtogether =
    //   campaignName +
    //   " | " +
    //   campaignType +
    //   " | " +
    //   campaignAudience +
    //   " | " +
    //   campaignFrom +
    //   " | " +
    //   campaignCategory +
    //   " | " +
    //   campaignPromo;
    // console.log("it is: " + addthemtogether);

// Select all select and input elements within #main
var elements = document.querySelectorAll('#main select, #main input');

// Initialize an array to store the values
var values = [];
let result;

// Loop through the selected elements
for (var i = 0; i < elements.length -1; i++) {
    var element = elements[i];
    
    // Check the type of the element
    if (element.tagName === 'SELECT') {
        // If it's a select element, get its selected value
        var selectedValue = element.value;
        
        // Replace null with "NA" if the value is null
        if (selectedValue === '') {
            selectedValue = "NA";
        }
        
        values.push(selectedValue);
    } else if (element.tagName === 'INPUT') {
        // If it's an input element, get its value
        var inputValue = element.value;
        
        // Replace null with "NA" if the value is null
        if (inputValue === '') {
            inputValue = "NA";
        }
        
        values.push(inputValue);
    }
}

// Join the values with dashes as separators
  result = values.join('-');

// Print the result
console.log('Values:', result);


    // write to page
    var currentNode = document.getElementById("campaignFullName");
    // currentNode.innerText = addthemtogether;
    currentNode.innerText = result;
    // create copy button
    var btn = document.getElementById("copyButton");
    var clipboard = new ClipboardJS(btn);
    // success and error events for copy
    clipboard.on("success", function (e) {
      console.info("Action:", e.action);
      console.info("Text:", e.text);
      console.info("Trigger:", e.trigger);
    });

    clipboard.on("error", function (e) {
      console.info("Action:", e.action);
      console.info("Text:", e.text);
      console.info("Trigger:", e.trigger);
    });
    // show campaign name section
    var element = document.getElementById("results");
    element.classList.remove("hide");
    // scroll to bottom of the window upon click
    window.scrollTo(0, document.body.scrollHeight);
  },
  false
);