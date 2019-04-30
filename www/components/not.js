// This is a JavaScript file
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.notification);
}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.vibrate);
}

$(document).on('click', '.cp', function(){
  navigator.vibrate(600);
});
$(document).on('click','.ab', function(){
  navigator.notification.beep(1);
});