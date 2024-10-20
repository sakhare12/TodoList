let todo = [];
let req = prompt("Enter Your Request");
while(true){
    if(req=='quit'){
        alert("EXIT");
        break;
    }
    if(req=="list"){
        for(let i=0;i<todo.length;i++){
        alert(todo[i]);
        }
    }
    else if(req=="add"){
        let addreq = prompt("Please Enter Your Task You Want To Add ");
        todo.push(addreq);
        alert ("Task Added");
    }
    else if(req=="delete"){
        let delreq= prompt("Please Enter Your Task You Want To Delete");
        todo.splice(delreq,1);
        alert("Task Deleted");
    }
    else{
        alert("You Entered Wrong Request");
    }
  req= prompt("Enter Your Request");

}
