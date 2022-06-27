const canvas_list = document.getElementById('canvas_list');

$("#toggle_lamp").click(() => {
    $('#lamp').toggle('visible', 0)
})

$("#change_color").click(() => {
    $('body').attr('type', (i, a) => a == "black" ? "white" : "black")
})

$("#save_image").click(() => {

    html2canvas(document.getElementById('square'), {
        // foreignObjectRendering: true
        // useCORS: true
    }).then(canvas => {
        saveAs(canvas.toDataURL(), `omori-text.png`)
    })

})