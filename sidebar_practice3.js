// function deselect(){
//     var taps = document.getElementsByName("tap");
//     for(var i=0; i<taps.length; i++){
//         if(taps[i].getAttribute('type')==='radio'){
//             taps[i].checked = false;
//         }
//     }
// }
const deselect = (e) => {
    if(e.target.checked) {
     e.target.checked = false;
   }
}