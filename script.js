const drink = document.querySelectorAll(".drink"); /* seleziona i drink */
/* oggetto drinks */
const drinks = {
  mojito: {
    nome: "Mojito",
    img: "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
    ingredienti: [
      {
        img: "https://www.thecocktaildb.com/images/ingredients/Light%20rum-Medium.png",
        p: "2-3 oz Light rum",
      },
      {
        img: "https://www.thecocktaildb.com/images/ingredients/Light%20rum-Medium.png",
        p: "Juice of 1 lime",
      },
      {
        img: "https://www.thecocktaildb.com/images/ingredients/Light%20rum-Medium.png",
        p: "Lorem ipsum dolor sit amet.",
      },
    ],
    ricetta:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quidem non mollitia magni distinctio molestias! Quidem tempore molestiae numquam possimus, et ipsum neque totam modi est obcaecati, doloribus accusamus asperiores!",
  },
  oldFashion: {
    nome: "Old Fashion",
    img: "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
    ingredienti: [
      {
        img: "https://www.thecocktaildb.com/images/ingredients/Light%20rum-Medium.png",
        p: "Lorem ipsum dolor sit amet.",
      },
      {
        img: "https://www.thecocktaildb.com/images/ingredients/Light%20rum-Medium.png",
        p: "Lorem ipsum dolor sit amet.",
      },
    ],
    ricetta:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quidem non mollitia magni distinctio molestias! Quidem tempore molestiae numquam possimus, et ipsum neque totam modi est obcaecati, doloribus accusamus asperiores!",
  },
  longIsland: {
    nome: "Long Island",
    img: "https://www.thecocktaildb.com/images/media/drink/nkwr4c1606770558.jpg",
    ingredienti: [
      {
        img: "https://www.thecocktaildb.com/images/ingredients/Light%20rum-Medium.png",
        p: "Lorem ipsum dolor sit amet.",
      },
      {
        img: "https://www.thecocktaildb.com/images/ingredients/Light%20rum-Medium.png",
        p: "Lorem ipsum dolor sit amet.",
      },
      {
        img: "https://www.thecocktaildb.com/images/ingredients/Light%20rum-Medium.png",
        p: "Lorem ipsum dolor sit amet.",
      },
      {
        img: "https://www.thecocktaildb.com/images/ingredients/Light%20rum-Medium.png",
        p: "Lorem ipsum dolor sit amet.",
      },
    ],
    ricetta:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quidem non mollitia magni distinctio molestias! Quidem tempore molestiae numquam possimus, et ipsum neque totam modi est obcaecati, doloribus accusamus asperiores!",
  },
  negroni: {
    nome: "Negroni",
    img: "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg",
    ingredienti: [
      {
        img: "https://www.thecocktaildb.com/images/ingredients/Light%20rum-Medium.png",
        p: "Lorem ipsum dolor sit amet.",
      },
      {
        img: "https://www.thecocktaildb.com/images/ingredients/Light%20rum-Medium.png",
        p: "Lorem ipsum dolor sit amet.",
      },
      {
        img: "https://www.thecocktaildb.com/images/ingredients/Light%20rum-Medium.png",
        p: "Lorem ipsum dolor sit amet.",
      },
    ],
    ricetta:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quidem non mollitia magni distinctio molestias! Quidem tempore molestiae numquam possimus, et ipsum neque totam modi est obcaecati, doloribus accusamus asperiores!",
  },
};
/* input che viene chiamato al tocco di un drink */
drink.forEach((el) => {
  el.addEventListener("click", () => {
    console.log(el.lastElementChild.innerText);
    createCard(el.id);
  });
});

/* funzione che crea la card */

function createCard(cardId) {
  const card = document.createElement("div");
  card.id = "cardContainer";
  const body = document.querySelector("body");
  body.appendChild(card);
  body.style.overflow = "hidden";
  card.innerHTML = `<div id="card">
        <div id="cardLeft">
          <h2>${drinks[cardId].nome}</h2>
          <img
            src="${drinks[cardId].img}"
            alt="foto del drink"
          />
        </div>
        <div id="cardRight">
          <button id="delete">X</button>
          <h2>Ingredienti</h2>
          <div id="cardIngredienti">
          </div>
          <div id="cardRicetta">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>
              ${drinks[cardId].ricetta}
            </p>
          </div>
        </div>
      </div>`;
  ingredienti(cardId);
  const deleteCard = document.querySelector("#delete");
  /* cancella card al tocco di X */
  deleteCard.addEventListener("click", () => {
    card.remove();
    body.style.overflow = "auto";
  });
}
/* funzione per creare gli ingredienti in base a quanti ce ne sono nel drink */
function ingredienti(cardId2) {
  const cardIngredienti = document.querySelector("#cardIngredienti");
  drinks[cardId2].ingredienti.forEach((el) => {
    const ingrediente = document.createElement("div");
    ingrediente.className = "cardIngrediente";
    ingrediente.innerHTML = ` <img
                src="${el.img}"
                alt="ingrediente"
              />
              <p>${el.p}</p>`;
    cardIngredienti.appendChild(ingrediente);
  });
}
