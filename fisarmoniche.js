let abilita_fisarmoniche = function () {
  console.log('start');
  let fisarmoniche = document.querySelectorAll(".fisarmonica");
  fisarmoniche.forEach(function(fisa){
    fisa.querySelectorAll("h3")[0].addEventListener("click", function(){fisa.classList.toggle("open");});
  })
}


window.onload = setTimeout(abilita_fisarmoniche, 2000);
