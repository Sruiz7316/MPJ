// making the file-input functional

var imageFile = null // variable to hanlde image File

function getFirstPredictionFromResult (predictions) {
  var tag = predictions[0].tagName
  return tag.toUpperCase()[0] + tag.substr(1)
}

function readURL (input) {
  // After we choose an image
  if (input.files && input.files[0]) {
    imageFile = input.files[0]
    // 1. Show the image on the dashboard
    var reader = new FileReader()

    reader.onload = function (e) {
      $('.image-upload-wrap').hide()

      $('.file-upload-image').attr('src', e.target.result) // set the url string
      $('.file-upload-content').show()

      $('.image-title').html(input.files[0].name)
    }

    reader.readAsDataURL(input.files[0])
  } else {
    removeUpload()
  }
}

function removeUpload () {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone())
  $('.file-upload-content').hide()
  $('.image-upload-wrap').show()
}
$('.image-upload-wrap').bind('dragover', function () {
  $('.image-upload-wrap').addClass('image-dropping')
})
$('.image-upload-wrap').bind('dragleave', function () {
  $('.image-upload-wrap').removeClass('image-dropping')
})

// $(document).on('click', '#close-preview', function () {
//   $('.image-preview').popover('hide')
//   // Hover befor close the preview
//   $('.image-preview').hover(
//     function () {
//       $('.image-preview').popover('show')
//     },
//     function () {
//       $('.image-preview').popover('hide')
//     }
//   )
// })

// $(function () {
//   // Create the close button
//   var closebtn = $('<button/>', {
//     type: 'button',
//     text: 'x',
//     id: 'close-preview',
//     style: 'font-size: initial;'
//   })
//   closebtn.attr('class', 'close pull-right')
//   // Set the popover default content
//   $('.image-preview').popover({
//     trigger: 'manual',
//     html: true,
//     title: '<strong>Preview</strong>' + $(closebtn)[0].outerHTML,
//     content: "There's no image",
//     placement: 'bottom'
//   })
//   // Clear event
//   $('.image-preview-clear').click(function () {
//     $('.image-preview')
//       .attr('data-content', '')
//       .popover('hide')
//     $('.image-preview-filename').val('')
//     $('.image-preview-clear').hide()
//     $('.image-preview-input input:file').val('')
//     $('.image-preview-input-title').text('Browse')
//   })
//   // Create the preview image
//   $('.image-preview-input input:file').change(function () {
//     var img = $('<img/>', {
//       id: 'dynamic',
//       width: 250,
//       height: 200
//     })
//     var file = this.files[0]
//     var reader = new FileReader()
//     // Set preview image into the popover data-content
//     reader.onload = function (e) {
//       $('.image-preview-input-title').text('Change')
//       $('.image-preview-clear').show()
//       $('.image-preview-filename').val(file.name)
//       img.attr('src', e.target.result)
//       $('.image-preview')
//         .attr('data-content', $(img)[0].outerHTML)
//         .popover('show')
//     }
//     reader.readAsDataURL(file)
//   })
// })

function addImageToBox () {
  let uploadImageSrc = $('#fileUploadImage').attr('src')

  let elContent =
    '<div class="col-lg-4 col-sm-6 mb-4">' +
    '<div class="card h-100">' +
    '<a href="#"><img class="card-img-top"' +
    ' src="' +
    uploadImageSrc +
    '" alt="your image">' +
    '</a>' +
    '<div class="card-body">' +
    '<h4 class="card-title">' +
    '<a style="font: 12px" href="#" id="prediction-name">...</a>' +
    '</h4>' +
    '<p class="card-text">Lorem ipsum dolor sit amet, consectetur' +
    ' adipisicing elit. Amet numquam aspernatur eum quasi sapiente ' +
    ' nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, ' +
    ' dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem! ' +
    '</p>' +
    '</div>' +
    '</div>' +
    '</div>'
  let contentArea = $('#boxesContent')
  contentArea.append(elContent)

  if (imageFile != null) {
    // 2. Post the image to the API
    var binaryReader = new FileReader()

    binaryReader.onload = function (e) {
      var request = postBinaryImage(e.target.result) // send the array of bytes
      // when request is done
      // show the result to the user.
      request.done(function (result) {
        // console log the response
        console.log('The result from the api is', result)
        if (result.predictions) {
          var prediction = getFirstPredictionFromResult(result.predictions)
          // prediction == carnations,roses...
          $('#prediction-name').text(prediction)
        }
      })
    }

    binaryReader.readAsArrayBuffer(imageFile)
  }
}

$(document).ready(function () {
  $('#submitImage').click(addImageToBox)
})

/////////////////////Sign out to work/////

document
    .getElementById('button-modal-signup')
    .addEventListener('click', e => {
      e.preventDefault()