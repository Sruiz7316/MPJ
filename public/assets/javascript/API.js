// if (#fileinput== true) {

// $.ajax({
//     url: "https://myplantjournal.cognitiveservices.azure.com/customvision/v3.0/Prediction/a06d1a56-f77c-4caf-ae99-fbecf3f9fce2/classify/iterations/carnation%20and%20roses/image",
//     type: 'GET',
//     processData: false,
//     headers: { 'Prediction-Key' : 'Content-Type' },
//     Body: <
//     success: function (data) {
//       alert(JSON.stringify(data));
//     },
//     error: function(){
//       alert("Cannot get data");
//     }
// });

// }

// (function ($) {
//     var data = new Uint32Array(1);
//     data[0] = 0xFD008001;
//     $.ajax({
//        url: '<IP of Address>',
//        type: 'POST',
//        contentType: false,
//        processData: false,
//        //data:'253,0,128,1',
//        data:data,

//        crossDomain: true
//     });
//  })(jQuery);

//= = =to post octet-stream
function postBinaryImage (imageData) {
  console.log('Posting image...', imageData)
  return $.ajax({
    url:
      'https://myplantjournal.cognitiveservices.azure.com/customvision/v3.0/Prediction/a06d1a56-f77c-4caf-ae99-fbecf3f9fce2/classify/iterations/carnation%20and%20roses/image?Prediction-Key=6e214e70c9104648a2b1f3bddba828db&Content-Type=application/octet-stream',
    type: 'POST',
    headers: {
      'Prediction-Key': COMPUTER_VISION_SECRET
    },
    contentType: 'application/octet-stream',
    data: imageData,
    processData: false
  })
}

function postWebUrlImage (imageUrl) {
  console.log('Posting image url...', imageUrl)
  console.warn('this function is not fully implemented')
}

// git add not tracking files//
// trying again to track this file//
