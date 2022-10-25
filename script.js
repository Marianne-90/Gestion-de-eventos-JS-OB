console.log("Script loaded");
texto="click en el botón";  

const p = document.getElementById("parrafo");


const onClick = () => { 
  alert(texto)
};

$(()=>{
//$("p").hide();
  $("#sq").click(()=>{
    console.log("click en el botón");
  });
})
