
var count=0;
var flag =true;
function editContent(id){
    var change =  document.getElementById("edit-save");
    var newButton="Save "+'<i class="far fa-save"></i></button>';
    var temp = "Edit "+'<i class="far fa-edit"></i>';
    if(change.innerHTML==temp)
    {
    document.getElementById("blog").contentEditable=true;
    document.getElementById("title").contentEditable=true;
    document.getElementById("edit-save").innerHTML= newButton;
    document.getElementById("blog").className+="pinkborder";
    document.getElementById("title").className+="pinkborder";
    var flag = false;
    }
    else{
        var values1 = document.getElementById("blog").innerHTML;
        var values2 = document.getElementById("title").innerHTML;
        if(count==0)
        {
        document.getElementById("blog").contentEditable=false;
        document.getElementById("title").contentEditable=false;
        document.getElementById("blog").innerHTML="UPDATED:"+'</br>'+values1;
        document.getElementById("title").innerHTML="UPDATED:"+values2;
        document.getElementById("edit-save").innerHTML= temp;
        count++;
        document.getElementById("blog").className+="whiteborder";
        document.getElementById("title").className+="whiteborder";
        }
        
        else{        
            document.getElementById("blog").contentEditable=false;
            document.getElementById("title").contentEditable=false;
            document.getElementById("blog").innerHTML=values1;
            document.getElementById("title").innerHTML=values2;
            document.getElementById("edit-save").innerHTML= temp;
            count++;
            

        } 
    }

}
var likeCounter=0;
function likeIt()
{
    document.getElementById("likeIt").innerHTML='<i class="fas fa-thumbs-up"></i> Liked</button>';
    likeCounter++;
    if(likeCounter!=0){
        if(likeCounter==1){
            document.getElementById("caption").innerHTML = likeCounter+ " person likes this!";
        }
        else
        {
            document.getElementById("caption").innerHTML = likeCounter+ " people like this!";
        }
    }


}

function addComments(id){
var com = id.value;
var teamp=  '<div class="container">'+
'<div class="sub" id="ff">'+
'<div class="subtext" id="jj">'
    +com+'</div>'+
'</div>'+
'</div>';
document.getElementById("jj").innerHTML=teamp+document.getElementById("jj").innerHTML;
document.getElementById('comments').value='';

}
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("signup");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var btn1 = document.getElementById("signin");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}


var hyper = document.getElementById("hyper");
hyper.onclick=function(){
    modal1.style.display="none";
    DelayNode;
    modal.style.display="block";
}
