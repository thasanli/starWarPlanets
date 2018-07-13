

const ROOT_URL = "https://swapi.co/api/planets/"
const results = document.querySelector(".results")
const planetImages = {
  "Alderaan": "https://vignette.wikia.nocookie.net/starwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20061211013805",
  "Yavin IV": "https://vignette.wikia.nocookie.net/starwars/images/d/d4/Yavin-4-SWCT.png/revision/latest?cb=20170712005330",
  "Hoth": "https://vignette.wikia.nocookie.net/starwars/images/1/1d/Hoth_SWCT.png/revision/latest?cb=20160630022322",
  "Dagobah": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Dagobah_ep3.jpg/revision/latest?cb=20100122163146",
  "Bespin": "https://vignette.wikia.nocookie.net/starwars/images/1/11/Bespin-SWCT.png/revision/latest?cb=20170709211642",
  "Endor": "https://vignette.wikia.nocookie.net/starwars/images/1/1d/Endor_BF2.png/revision/latest?cb=20171014232605",
  "Naboo": "https://vignette.wikia.nocookie.net/swg/images/e/ea/NabooFromSpace.jpg/revision/latest?cb=20060903011613",
  "Coruscant": "https://vignette.wikia.nocookie.net/jdr-psw/images/e/ec/Coruscant.jpg/revision/latest?cb=20150926073733&path-prefix=fr",
  "Kamino": "https://vignette.wikia.nocookie.net/starwars/images/a/a9/Eaw_Kamino.jpg/revision/latest?cb=20090527045541",
  "Tatooine": "https://vignette.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131019121937"
}


class GetStarWars {
  constructor(image) {
    this.image = image
  }

  getInfo(searchTerm, num) {
    $.ajax({
      url: ROOT_URL,
      dataType: "json",
      success: (data) => {
        console.log(data)

      },
      error: (error) => {
        console.log("There was an error")
      }
    })
  }
  getMultiple(amount) {
    results.innerHTML = ``
    if (amount <= 0) {
      return
    }
    //Create a for loop that loops the amount of times the value of the variable "amount" is worth. For example, if "amount" is equal to 6, the loop should go 6 times. Inside the loop call the getInfo method.
    //getInfo("planets", 1)
    //getInfo("planets", 2)
    //getInfo("planets", 3)
    //getInfo("planets", 4)
    //getInfo("planets", 5)
    //getInfo("planets", 6)
  }
  displayInfo(data) {
    results.innerHTML += `
    `
  }
}
let forImages = new GetStarWars()


// var div = '<div class="planets" id = "planetsContainer">
// <img src="">
// Name: <p class="name"></p>
// Population: <p class="population"></p>
// Diameter: <p class="diameter"></p>
// Climate: <p class="climate"></p> 
// </div>'
