// drag header up and show side logo on scroll down effect
try{
  var prevScrollpos = window.pageYOffset;
  function movment(){  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos && currentScrollPos < 20) {
        document.querySelector('.header').classList.remove('hide-header');
        document.querySelector('.img-logo3').style.opacity = '0%';
      } else if (prevScrollpos < currentScrollPos && currentScrollPos > 20){
        document.querySelector('.header').classList.add('hide-header');
        document.querySelector('.img-logo3').style.opacity = '100%';
      }
      prevScrollpos = currentScrollPos;
    }}
} catch(err) {console.log(err);}

movment();

// move all down once toggler open
btn = document.querySelector('.navbar-toggler');
section3 = document.querySelector('.container2');
contents1 = document.querySelector('.contents1');
btn.addEventListener('click', ()=>{
  if (btn.ariaExpanded == "false"){
    section3.classList.add('shift');
    contents1.classList.add('shift');
    window.onscroll = function(){ window.scrollTo(0, 0); }  
  } else {
    section3.classList.remove('shift');
    contents1.classList.remove('shift');
    movment(); 
 }
})

try {
  // add items from img folder for trending section
trendingList = document.querySelector('.trending-items-list');
sourceToImgsFile = 'static/items/';
ITEMS_NAMES = ['shoe 1', 'shoe 2', 'shoe 3', 'shoe 4', 'shoe 5', 'shoe 6', 'shoe 7', 'shoe 8', 'shoe 9', 'shoe 10'];
PRICES = [55, 40, 70, 90, 10, 45, 60, 30, 70 ,100];

for (i=0; i<10; i++){
  // img div
    img = document.createElement('img');
    img.src = sourceToImgsFile + 'item' + i + ".jpg";
    img.className = 'items-img';
  // price name div
    namePrice = document.createElement('div');
    namePrice.className = 'item-name-price';
    itemName = document.createElement('p');
    itemName.innerHTML = ITEMS_NAMES[i];
    itemName.className = 'name';
    itemPrice = document.createElement('p');
    itemPrice.innerHTML = PRICES[i] + '$';
    itemPrice.className = 'price';
    namePrice.appendChild(itemName);
    namePrice.appendChild(itemPrice);
    // adding all to main div
    item = document.createElement('div');
    item.className = 'trending-item';
    item.appendChild(img);
    item.appendChild(namePrice);
    trendingList.appendChild(item);
}
// grab gear section items
gearList = document.querySelector('.gear-items-list');
sourceToImgsFile = 'static/items/';
ITEMS_NAMES = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8', 'item 9', 'item 10'];
PRICES = [55, 40, 70, 90, 10, 45, 60, 30, 70 ,100];

for (i=10; i<20; i++){
  // img div
    img = document.createElement('img');
    img.src = sourceToImgsFile + 'item' + i + ".jpg";
    img.className = 'items-img';
  // price name div
    namePrice = document.createElement('div');
    namePrice.className = 'item-name-price';
    itemName = document.createElement('p');
    itemName.innerHTML = ITEMS_NAMES[i-10];
    itemName.className = 'name';
    itemPrice = document.createElement('p');
    itemPrice.innerHTML = PRICES[i-10] + '$';
    itemPrice.className = 'price';
    namePrice.appendChild(itemName);
    namePrice.appendChild(itemPrice);
    // adding all to main div
    item = document.createElement('div');
    item.className = 'gear-items';
    item.appendChild(img);
    item.appendChild(namePrice);
    gearList.appendChild(item);
}
} catch (err) {console.log(err);}

// remove flash messages after 3 seconds 
flash = document.querySelector('.alert');
setTimeout(() => {
  if (flash){
    flash.remove();
  } 
}, 3000); 

function addBlur(){
  $('.container2').children().addClass('blurr');
  $('.contents1').children().addClass('blurr');
}
function removeBlur(){
  $('.container2').children().removeClass('blurr');
  $('.contents1').children().removeClass('blurr');
}
// menu drop down effect
if (window.innerWidth > 1010){
  $('#newReleases').on('mouseenter', function(){
    $('[class*=drop-list]').css('display', 'none');
    $('.drop-list-new-releases').css('display', 'flex');
    addBlur();
  });

  $('.section2').on('mouseleave', function(){
    $('.drop-list-new-releases').css('display', 'none');
    removeBlur();
  });

  $('#men').on('mouseenter', function(){
    $('[class*=drop-list]').css('display', 'none');
    $('.drop-list-men').css('display', 'flex');
    addBlur();
  });

  $('.section2').on('mouseleave', function(){
    $('.drop-list-men').css('display', 'none');
    removeBlur();
  });
 
}