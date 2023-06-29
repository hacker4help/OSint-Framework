function search() {
    var target = document.getElementById('target').value;
    var output = document.getElementById('output');
    var loadingImage = document.getElementById('loading-image');
  
    // Hide the output and show the loading image
    output.style.display = 'none';
    loadingImage.style.display = 'block';
    loadingImage.style.alignItems = "center"
  
    // Simulate a delay to represent the actual search process
    // setTimeout(function () {
    //   // Perform OSINT search using target information
  
    //   // Display the results
    //   output.textContent = "Results for: " + target;
  
    //   // Hide the loading image and show the results
    //   loadingImage.style.display = 'none';
    //   output.style.display = 'block';
    // }, 2000); // Simulated 2-second delay for demonstration purposes
  }
  