// Get the select menu

// combine together

document.addEventListener(
  "click",
  function (event) {
    // Only run on submit button click
    if (event.target.id !== "submitButton") return;
    //get cvalues
    var campaignName = document.querySelector("#campaignName").value;
    var campaignType = document.querySelector("#campaignType").value;
    var campaignAudience = document.querySelector("#campaignAudience").value;
    var campaignFrom = document.querySelector("#campaignFrom").value;
    var campaignCategory = document.querySelector("#campaignCategory").value;
    var campaignPromo = document.querySelector("#campaignPromo").value;
    // create the campaign string
    var addthemtogether =
      campaignName +
      " | " +
      campaignType +
      " | " +
      campaignAudience +
      " | " +
      campaignFrom +
      " | " +
      campaignCategory +
      " | " +
      campaignPromo;
    console.log("it is: " + addthemtogether);
    // write to page
    var currentNode = document.getElementById("campaignFullName");
    currentNode.innerText = addthemtogether;
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
