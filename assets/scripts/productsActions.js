const actionsChangeProductColor = () => {
  const imgProductEl = document.getElementById("product__image");
  const textColorEL = document.querySelectorAll("#js-product-name-color");
  const btnsEl = document.querySelectorAll("#js-btn-color");

  const handleChangeProductColor = (event) => {
    const { value } = event.target;
    const color = value.split(".")[0].replace("-", " ");
    const src = `./assets/media/img/products/macbook-pro-${value}`;

    imgProductEl.src = src;
    textColorEL.forEach((El) => (El.innerText = color));
  };

  btnsEl.forEach((El) =>
    El.addEventListener("click", handleChangeProductColor)
  );
};

const actionsChangeProductSize = () => {
  const textSizeEl = document.getElementById("js-product-size");
  const btnsEl = document.querySelectorAll(
    ".product__btn-size:not(.btn--disable)"
  );

  btnsEl.forEach((El) => {
    El.addEventListener("click", (event) => {
      const { value } = event.target;

      textSizeEl.innerText = value;
    });
  });
};

const actionsBtnQuantity = () => {
  const currencyFormat = (number) => {
    const currency = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    })
      .format(number)
      .replace("$", "$ ");

    return currency;
  };

  const handleChangeProductPrice = (productQuantity = 1) => {
    const { productValue } =
      document.getElementById("js-product-value").dataset;
    const finalPriceEL = document.getElementById("js-final-price");
    const oldPriceEl = document.getElementById("js-old-price");
    const valueSavedEl = document.getElementById("js-value-saved");

    const totalPrice = +productValue * productQuantity;
    const priceDiscount = Math.ceil(totalPrice * 0.8886);
    const priceDifference = totalPrice - priceDiscount;

    oldPriceEl.innerText = currencyFormat(totalPrice);
    finalPriceEL.innerText = currencyFormat(priceDiscount);
    valueSavedEl.innerHTML = currencyFormat(priceDifference);
  };

  const handleChangeQuantity = (event) => {
    const { typeBtn } = event.currentTarget.dataset;
    const countEl = document.getElementById("js-final-quantity");
    const count = +countEl.innerText;

    if (typeBtn === "plus") {
      const newCount = count + 1;

      newCount < 4 ? (countEl.innerText = "0" + newCount) : false;
      newCount < 4 && handleChangeProductPrice(newCount);
    }

    if (typeBtn === "minus") {
      const newCount = count - 1;

      newCount > 0 ? (countEl.innerText = "0" + newCount) : false;
      newCount > 0 && handleChangeProductPrice(newCount);
    }
  };

  const btnsEl = document.querySelectorAll("#js-btn-quantity");
  btnsEl.forEach((El) => El.addEventListener("click", handleChangeQuantity));
};

const initActionsProduct = () => {
  actionsChangeProductColor();
  actionsChangeProductSize();
  actionsBtnQuantity();
};

export default initActionsProduct;
