const choude_subtitle = document.getElementsByClassName('choude_subtitle')

const button_fr = document.getElementById('fr')
const button_en = document.getElementById('en')
let isEnglish = true

function french() {
    choude_subtitle.innerHTML = "les visualisations architecturales, créations logiciels"
}
function english() {
    choude_subtitle.innerHTML = "architectural renders, software creations"
}
button_fr.addEventListener("click", function(e) {
    french()
});
button_en.addEventListener("click", function() {
    english()
});
