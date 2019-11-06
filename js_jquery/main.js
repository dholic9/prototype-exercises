$(document).ready(initializeApp);

function initializeApp() {
  console.log('Initializing App');

  section1();
  section2();
}

function section1() {
  $('.box').css('border', '4px solid #8e24aa');

  $('#section1 .box:nth-child(odd)').css('backgroundColor', '#ce93d8');
  $('#section1 .box:nth-child(even)').css('backgroundColor', '#ab47bc');
}

function section2() {
  $('#section2 > .col-1').css('backgroundColor', '#e3f2fd');
  $('#section2 > .col-2').css('backgroundColor', '#bbdefb');
  $('#section2 > .col-3').css('backgroundColor', '#90caf9');
  $('#section2 .col-1').css('backgroundColor', '#e3f2fd').click();
  $('#section2 .col-1').css('backgroundColor', '#e3f2fd').click(shrinkCol);
  $('#section2 .col-2').css('backgroundColor', '#bbdefb').click(shrinkCol);
  $('#section2 .col-3').css('backgroundColor', '#90caf9').click(shrinkCol);
}

function shrinkCol() {
  console.log('This is:', this);
  var col = $(this);
  var colWidth = col.css('width');
  console.log('Col Width:', colWidth);
  var newWidth = parseInt(colWidth);
  console.log('New Width:', newWidth);
  newWidth = newWidth - 40;
  col.css('width', newWidth);
}
