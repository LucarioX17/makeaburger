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

function reload() {
  location.reload();
}

let check = false;
(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
console.log(check);
