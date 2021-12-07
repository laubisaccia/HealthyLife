$(".header__button").one("click", function () {
  joining();
});

function joining() {
  $("#main-container").prepend(`
    <div id="miForm__container">
    <h4>Join Us :)</h4>
    <form id="miForm">
    <input type=text id="email" placeholder="Tu mail">
    <button type="submit" class="btn">Join now</button>
    </form>
    </div>
    `);

  $("#miForm").submit(function (e) {
    emailValue = document.getElementById("email").value;
    if (emailValue.includes("@") && emailValue.includes(".")) {
      e.preventDefault();
      swal({
        title: `Thanks for joining`,
        icon: "success",
        button: "OK!",
      });
      $("#miForm__container").hide();
    } else {
      e.preventDefault();
      swal({
        title: `Invalid email`,
        text: "Enter a valid email to continue",
        icon: "error",
        button: "OK!",
      });
      document.getElementById("email").value = " ";
    }
  });
}

//WELCOME & LOGIN

if (localStorage.UserName) {
  $("#text-header__title").prepend(
    `<h3>Welcome ${localStorage.UserName}!</h3>`
  );
  document.getElementById("login_form").style.visibility = "hidden";
  $("#nav_coll").append(
    '<button type="submit" id="btn-signOut"class="btn btn-secondary btn-header">Sign Out </button>'
  );
} else {
  let usernameField = document.getElementById("login_form__username");
  let passwordField = document.getElementById("login_form__password");
  let user = document.getElementById("login_form");
  user.addEventListener("submit", formValidation);

  function formValidation(e) {
    if (passwordField.value != " " && passwordField.value.length != 4) {
      e.preventDefault();
      swal({
        title: `Contraseña incorrecta`,
        text: "Ingresa una contraseña de 4 digitos",
        icon: "error",
        button: "OK!",
      });

      usernameField.value = "";
      passwordField.value = "";
    } else {
      e.preventDefault();
      swal({
        title: `Bienvenidx ${usernameField.value}`,
        text: "Contraseña corecta",
        icon: "success",
        button: "OK!",
      });

      localStorage.setItem("UserName", usernameField.value);
      $("#text-header__title").prepend(
        `<h3 id="text-header__title--welcome">Welcome ${usernameField.value}!</h3>`
      );
      usernameField.value = "";
      passwordField.value = "";

      $("#login_form").empty();
      $("#nav_coll").append(
        '<button type="submit" id="btn-signOut"class="btn btn-secondary btn-header">Sign Out </button>'
      );
    }
  }
}
$("#btn-signOut").click(function () {
  localStorage.removeItem("UserName");
});
//ABOUT
$(".about-img").hover(
  function (e) {
    $(this).attr("src");
    $(this).addClass("transition");
  },
  function () {
    $(this).removeClass("transition");
  }
);
//IMC
function calculateIMC() {
  const myNode = document.getElementById("container-results");
  myNode.innerHTML = "";
  let weight1 = document.getElementById("input-imc-weight").value;
  let weight = parseFloat(weight1.replace(/,/g, "."));
  let height1 = document.getElementById("input-imc-height").value;
  let height = parseFloat(height1.replace(/,/g, "."));

  let myIMC = parseFloat((weight / (height * height)).toFixed(1));
  let caloriesCal = weight * 25;
  if (myIMC < 18 && myIMC >= 15) {
    $("#container-results").append(`
    <div>
    <div class="card" style="width: 100%;">
      <div class="card-body">
        <h5 class="card-title">IMC: ${myIMC}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Bajo Peso</h6>
        <p class="card-text">Para estar saludable debes consumir ${caloriesCal} por dia</p>
      </div>
    </div>
  </div>`);
  } else if (myIMC >= 18 && myIMC <= 24.9) {
    $("#container-results").append(`
    <div>
    <div class="card" style="width: 100%;">
      <div class="card-body">
        <h5 class="card-title">IMC: ${myIMC}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Peso Normal</h6>
        <p class="card-text">Para estar saludable debes consumir ${caloriesCal} por dia</p>
      </div>
    </div>
  </div>`);
  } else if (myIMC >= 25 && myIMC <= 29.9) {
    $("#container-results").append(`
    <div>
    <div class="card" style="width: 100%;">
      <div class="card-body">
        <h5 class="card-title">IMC: ${myIMC}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Sobrepeso</h6>
        <p class="card-text">Para estar saludable debes consumir ${caloriesCal} por dia</p>
      </div>
    </div>
  </div>`);
  } else if (myIMC >= 30) {
    $("#container-results").append(`
    <div>
    <div class="card" style="width: 100%;">
      <div class="card-body">
        <h5 class="card-title">IMC: ${myIMC}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Obeso</h6>
        <p class="card-text">Para estar saludable debes consumir ${caloriesCal} por dia</p>
      </div>
    </div>
  </div>`);
  } else {
    $("#container-results").append(`
    <div class="alert alert-danger" id="alert-imc" role="alert">
    Valores incorrectos. Revisar peso y altura!
  </div>`);
  }
  weight = 0;
  height = 0;
  document.getElementById("input-imc-weight").value = "";
  document.getElementById("input-imc-height").value = "";
}
//LIST FOOD
const MyArrayFood = [];
const MyArrayCalories = [];

class MyDailyFood {
  constructor(FoodName, caloriesPerFood, caloriesPerDay) {
    this.FoodName = FoodName.toUpperCase();
    this.caloriesPerFood = parseInt(caloriesPerFood);
    this.caloriesPerDay = parseInt(caloriesPerDay);
  }
  remainingCalories() {
    alert("Esta comida tiene " + MycaloriesPerFood + " calorias");
  }
}

let caloriesCount;
function pickData() {
  let MyFoodName = document.getElementById("form-food__input").value;
  let MycaloriesPerFood = parseInt(
    document.getElementById("form-calories__input").value
  );
  if (
    MyFoodName !== " " &&
    isNaN(MyFoodName) &&
    MycaloriesPerFood >= 0 &&
    MycaloriesPerFood <= 5000
  ) {
    let MyDailyFood1 = new MyDailyFood(MyFoodName, MycaloriesPerFood);

    MyArrayFood.push(MyDailyFood1);
    MyArrayCalories.push(MycaloriesPerFood);

    document.getElementById("form-food__input").value = " ";
    document.getElementById("form-calories__input").value = " ";

    const reducer = (previousValue, currentValue) =>
      previousValue + currentValue;
    caloriesCount = MyArrayCalories.reduce(reducer);
    let output = document.getElementById("test");
    output.innerText = ` Consumiste un total de ${caloriesCount} calorias`;

    for (const food of MyArrayFood) {
      $(".calculator-table__items").append(`<tr>
                                        <td>${food.FoodName}</td>
                                        <td>${food.caloriesPerFood}</td>
                                        <td><button class="btn btn-light button-erase" onclick="eraseItem(event)">X</button></td>
                                        </tr>
                                        `);

      MyArrayFood.shift();
    }
  }
}

function eraseItem(event) {
  let calTest =
    event.target.parentNode.previousElementSibling.childNodes[0].data;
  const found = MyArrayCalories.find((element) => element == calTest);
  event.target.parentNode.parentNode.remove(found);
  caloriesCount = caloriesCount - found;
  output = document.getElementById(
    "test"
  ).innerText = ` Consumiste un total de ${caloriesCount} calorias`;
  let remfound = MyArrayCalories.indexOf(found);
  MyArrayCalories.splice(remfound, 1);
}

//LEARN - API
const URLJSON = "https://www.fruityvice.com/api/fruit/all";
let isHidden = false;
$(function () {
  $("#row-learn__list").prepend(
    '<button class="btn btn-light" id="boton">Mostrar Frutas!</button>'
  );
  $("#boton").click(() => {
    if (isHidden) {
      $("#boton").text("Ocultar Frutas!");
      $.getJSON(URLJSON, function (respuesta, estado) {
        if (estado == "success") {
          let fruits = respuesta;
          $("#row-learn__list").append(`
            <div id="row-learn__list-container"></div>`);
          for (const fruit of fruits) {
            $("#row-learn__list-container").append(`
                <div>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                <div class="fw-bold">${fruit.name}</div>
                Calories: ${fruit.nutritions.calories}   
                </div>
                </li>
                </div>`);
            isHidden = false;
          }
        }
      });
    } else {
      $("#boton").text("Show Fruits!");

      $("#row-learn__list-container").children("div").remove();
      isHidden = true;
    }
  });
});
