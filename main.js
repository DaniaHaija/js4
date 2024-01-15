var registerForm=document.querySelector(".registerForm");
var para ="";
registerForm.onsubmit=function(e){
    e.preventDefault();
    var elements =e.target.elements
    var user={
         amount : elements['amount'].value,
         exchange : elements['exchange'].value,
         
         calcValue : function (){
            
                para = (user.amount * user.exchange) ;
                document.querySelector(".result").innerHTML=para;  
         },
         }
         user.calcValue();
        };
       
    
    
