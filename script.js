var height = 0;

function spawn(ing) {
  if (ing == 'bun') {
    var bunCopy = document.createElement("div");
    bunCopy.setAttribute('class', 'BunCopy');
    bunCopy.style.position = "absolute";
    bunCopy.style.margin = 0;
    bunCopy.style.padding = 0;
    bunCopy.style.backgroundImage = "url('Ingredients/Bun.png')";
    bunCopy.style.backgroundRepeat = "no-repeat";
    bunCopy.style.backgroundSize = "cover";
    bunCopy.style.width = "160px";
    bunCopy.style.height = "90px";
    if (height == 0) bunCopy.style.top = (47-height) + "%";
    else bunCopy.style.top = (44-height) + "%";
    bunCopy.style.left = "43%";
    document.body.appendChild(bunCopy);
    height += 3;
  }

  if (ing == 'bun2') {
    var bun2Copy = document.createElement("div");
    bun2Copy.setAttribute('class', 'Bun2Copy');
    bun2Copy.style.position = "absolute";
    bun2Copy.style.margin = 0;
    bun2Copy.style.padding = 0;
    bun2Copy.style.backgroundImage = "url('Ingredients/Bun2.png')";
    bun2Copy.style.backgroundRepeat = "no-repeat";
    bun2Copy.style.backgroundSize = "cover";
    bun2Copy.style.width = "164px";
    bun2Copy.style.height = "100px";
    bun2Copy.style.top = (45-height) + "%";
    bun2Copy.style.left = "42.8%";
    document.body.appendChild(bun2Copy);
    height += 3;
  }

  if (ing == 'meat') {
    var meatCopy = document.createElement("div");
    meatCopy.setAttribute('class', 'MeatCopy');
    meatCopy.style.position = "absolute";
    meatCopy.style.margin = 0;
    meatCopy.style.padding = 0;
    meatCopy.style.backgroundImage = "url('Ingredients/Meat.png')";
    meatCopy.style.backgroundRepeat = "no-repeat";
    meatCopy.style.backgroundSize = "cover";
    meatCopy.style.width = "154.125px";
    meatCopy.style.height = "73.625px";
    if (height == 0) meatCopy.style.top = (49-height) + "%";
    else meatCopy.style.top = (47-height) + "%";
    meatCopy.style.left = "43.2%";
    document.body.appendChild(meatCopy);
    height += 3;
  }

  if (ing == 'meat2') {
    var meat2Copy = document.createElement("div");
    meat2Copy.setAttribute('class', 'Meat2Copy');
    meat2Copy.style.position = "absolute";
    meat2Copy.style.margin = 0;
    meat2Copy.style.padding = 0;
    meat2Copy.style.backgroundImage = "url('Ingredients/Meat2.png')";
    meat2Copy.style.backgroundRepeat = "no-repeat";
    meat2Copy.style.backgroundSize = "cover";
    meat2Copy.style.width = "154.125px";
    meat2Copy.style.height = "73.625px";
    if (height == 0) meat2Copy.style.top = (49-height) + "%";
    else meat2Copy.style.top = (47-height) + "%";
    meat2Copy.style.left = "43.2%";
    document.body.appendChild(meat2Copy);
    height += 3;
  }

  if (ing == 'cheese') {
    var cheeseCopy = document.createElement("div");
    cheeseCopy.setAttribute('class', 'CheeseCopy');
    cheeseCopy.style.position = "absolute";
    cheeseCopy.style.margin = 0;
    cheeseCopy.style.padding = 0;
    cheeseCopy.style.backgroundImage = "url('Ingredients/Cheese.png')";
    cheeseCopy.style.backgroundRepeat = "no-repeat";
    cheeseCopy.style.backgroundSize = "cover";
    cheeseCopy.style.width = "150.125px";
    cheeseCopy.style.height = "83.25px";
    if (height == 0) cheeseCopy.style.top = (50-height) + "%";
    else cheeseCopy.style.top = (48-height) + "%";
    cheeseCopy.style.left = "43.2%";
    document.body.appendChild(cheeseCopy);
    height += 1;
  }

  if (ing == 'cheese2') {
    var cheese2Copy = document.createElement("div");
    cheese2Copy.setAttribute('class', 'Cheese2Copy');
    cheese2Copy.style.position = "absolute";
    cheese2Copy.style.margin = 0;
    cheese2Copy.style.padding = 0;
    cheese2Copy.style.backgroundImage = "url('Ingredients/Cheese2.png')";
    cheese2Copy.style.backgroundRepeat = "no-repeat";
    cheese2Copy.style.backgroundSize = "cover";
    cheese2Copy.style.width = "150.125px";
    cheese2Copy.style.height = "83.25px";
    if (height == 0) cheese2Copy.style.top = (50-height) + "%";
    else cheese2Copy.style.top = (48-height) + "%";
    cheese2Copy.style.left = "43.2%";
    document.body.appendChild(cheese2Copy);
    height += 1;
  }

  if (ing == 'egg') {
    var eggCopy = document.createElement("div");
    eggCopy.setAttribute('class', 'EggCopy');
    eggCopy.style.position = "absolute";
    eggCopy.style.margin = 0;
    eggCopy.style.padding = 0;
    eggCopy.style.backgroundImage = "url('Ingredients/Egg.png')";
    eggCopy.style.backgroundRepeat = "no-repeat";
    eggCopy.style.backgroundSize = "cover";
    eggCopy.style.width = "130px";
    eggCopy.style.height = "78px";
    if (height == 0) eggCopy.style.top = (49-height) + "%";
    else eggCopy.style.top = (47-height) + "%";
    eggCopy.style.left = "44%";
    document.body.appendChild(eggCopy);
    height += 1;
  }

  if (ing == 'tomato') {
    var tomatoCopy = document.createElement("div");
    tomatoCopy.setAttribute('class', 'TomatoCopy');
    tomatoCopy.style.position = "absolute";
    tomatoCopy.style.margin = 0;
    tomatoCopy.style.padding = 0;
    tomatoCopy.style.backgroundImage = "url('Ingredients/Tomato.png')";
    tomatoCopy.style.backgroundRepeat = "no-repeat";
    tomatoCopy.style.backgroundSize = "cover";
    tomatoCopy.style.width = "132px";
    tomatoCopy.style.height = "92px";
    if (height == 0) tomatoCopy.style.top = (47-height) + "%";
    else tomatoCopy.style.top = (44-height) + "%";
    tomatoCopy.style.left = "44%";
    document.body.appendChild(tomatoCopy);
    height += 3;
  }

  if (ing == 'pickles') {
    var picklesCopy = document.createElement("div");
    picklesCopy.setAttribute('class', 'PicklesCopy');
    picklesCopy.style.position = "absolute";
    picklesCopy.style.margin = 0;
    picklesCopy.style.padding = 0;
    picklesCopy.style.backgroundImage = "url('Ingredients/Pickles.png')";
    picklesCopy.style.backgroundRepeat = "no-repeat";
    picklesCopy.style.backgroundSize = "cover";
    picklesCopy.style.width = "170px";
    picklesCopy.style.height = "102px";
    picklesCopy.style.transform = "scale(0.8)";
    if (height == 0) picklesCopy.style.top = (47-height) + "%";
    else picklesCopy.style.top = (44-height) + "%";
    picklesCopy.style.left = "42.5%";
    document.body.appendChild(picklesCopy);
    height += 3;
  }

  if (ing == 'lettuce') {
    var lettuceCopy = document.createElement("div");
    lettuceCopy.setAttribute('class', 'LettuceCopy');
    lettuceCopy.style.position = "absolute";
    lettuceCopy.style.margin = 0;
    lettuceCopy.style.padding = 0;
    lettuceCopy.style.backgroundImage = "url('Ingredients/Lettuce.png')";
    lettuceCopy.style.backgroundRepeat = "no-repeat";
    lettuceCopy.style.backgroundSize = "cover";
    lettuceCopy.style.width = "164px";
    lettuceCopy.style.height = "102px";
    lettuceCopy.style.transform = "scale(0.9)";
    if (height == 0) lettuceCopy.style.top = (47-height) + "%";
    else lettuceCopy.style.top = (45.5-height) + "%";
    lettuceCopy.style.left = "42.5%";
    document.body.appendChild(lettuceCopy);
    height += 1;
  }

  if (ing == 'bacon') {
    var baconCopy = document.createElement("div");
    baconCopy.setAttribute('class', 'BaconCopy');
    baconCopy.style.position = "absolute";
    baconCopy.style.margin = 0;
    baconCopy.style.padding = 0;
    baconCopy.style.backgroundImage = "url('Ingredients/Bacon.png')";
    baconCopy.style.backgroundRepeat = "no-repeat";
    baconCopy.style.backgroundSize = "cover";
    baconCopy.style.width = "155px";
    baconCopy.style.height = "125px";
    baconCopy.style.transform = "rotate(30deg)";
    if (height == 0) baconCopy.style.top = (42-height) + "%";
    else baconCopy.style.top = (42-height) + "%";
    baconCopy.style.left = "44%";
    document.body.appendChild(baconCopy);
    height += 1.7;
  }

  if (ing == 'pepperoni') {
    var pepperoniCopy = document.createElement("div");
    pepperoniCopy.setAttribute('class', 'PepperoniCopy');
    pepperoniCopy.style.position = "absolute";
    pepperoniCopy.style.margin = 0;
    pepperoniCopy.style.padding = 0;
    pepperoniCopy.style.backgroundImage = "url('Ingredients/Pepperoni.png')";
    pepperoniCopy.style.backgroundRepeat = "no-repeat";
    pepperoniCopy.style.backgroundSize = "cover";
    pepperoniCopy.style.width = "184px";
    pepperoniCopy.style.height = "100px";
    pepperoniCopy.style.transform = "scale(0.8)";
    if (height == 0) pepperoniCopy.style.top = (48-height) + "%";
    else pepperoniCopy.style.top = (45-height) + "%";
    pepperoniCopy.style.left = "42%";
    document.body.appendChild(pepperoniCopy);
    height += 2;
  }

  if (ing == 'mushrooms') {
    var mushroomsCopy = document.createElement("div");
    mushroomsCopy.setAttribute('class', 'MushroomsCopy');
    mushroomsCopy.style.position = "absolute";
    mushroomsCopy.style.margin = 0;
    mushroomsCopy.style.padding = 0;
    mushroomsCopy.style.backgroundImage = "url('Ingredients/Mushrooms.png')";
    mushroomsCopy.style.backgroundRepeat = "no-repeat";
    mushroomsCopy.style.backgroundSize = "cover";
    mushroomsCopy.style.width = "155px";
    mushroomsCopy.style.height = "90px";
    mushroomsCopy.style.transform = "scale(0.8)";
    if (height == 0) mushroomsCopy.style.top = (49-height) + "%";
    else mushroomsCopy.style.top = (47-height) + "%";
    mushroomsCopy.style.left = "43.5%";
    document.body.appendChild(mushroomsCopy);
    height += 1;
  }

  if (ing == 'onions') {
    var onionsCopy = document.createElement("div");
    onionsCopy.setAttribute('class', 'OnionsCopy');
    onionsCopy.style.position = "absolute";
    onionsCopy.style.margin = 0;
    onionsCopy.style.padding = 0;
    onionsCopy.style.backgroundImage = "url('Ingredients/Onions.png')";
    onionsCopy.style.backgroundRepeat = "no-repeat";
    onionsCopy.style.backgroundSize = "cover";
    onionsCopy.style.width = "164px";
    onionsCopy.style.height = "90px";
    onionsCopy.style.transform = "scale(0.9)";
    if (height == 0) onionsCopy.style.top = (49-height) + "%";
    else onionsCopy.style.top = (47-height) + "%";
    onionsCopy.style.left = "42.5%";
    document.body.appendChild(onionsCopy);
    height += 1;
  }
}
