var x = ""
var result = ""

function evenNumCap(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    x += inputVal;
    
    for (let i = 0; i < x.length; i++){
        if(i %2 == 0){
            result += x[i].toUpperCase();
        }
        else{
            result += x[i]
        }
    }
    console.log(result);
    // Displaying the value
    var div = document.getElementById("displayMessage");
    div.textContent = result;

    x = "";
    result = "";
}

function btnCopy() {
    // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied to clipboard.");
  }


  async function btnCopyImg() {
    try {
      const response = await fetch('spongebob.PNG');
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ]);
      console.log('Image copied.');
    } catch (err) {
      console.error(err.name, err.message);
    }
  };