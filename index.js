var SpeechRecognition = window.webkitSpeechRecognition

var recognition = new SpeechRecognition()

var textbox = $("#textbox")

var instructions = $("#instructions")

var content = ''

recognition.continuous = true

recognition.onstart = function()

{
    instructions.text("Voice Recognition is on")
}

recognition.onspeechend =  function(){
    instructions.text("No Activity")
}

recognition.onerror = function(){
    instructions.text("Try Again")
}

recognition.onresult = function(event) {
    var current = event.resultIndex;
    var transcript = event.results [current][0].transcript
    content +=transcript
    textbox.val(content)
}


$("#start-btn").click(function(event){
    if (content.length){
        content += ''
    }
    recognition.start()

})
textbox.on('inout', function()
{
    content = $(this).val()
})
