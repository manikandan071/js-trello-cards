let addBtn=document.getElementById("addbtn");
let addList=document.getElementById("addlist");
let addMsg=document.getElementById("addmsg");
let incmt=0;



function editing(i){

    let getprnt=this.parentNode.parentNode;
    let getId=getprnt.getElementsByClassName("cardtitle")[0];
    console.log(getId.innerText);
    addList.style.display="block";

    let addCard=document.createElement("div");
    addCard.setAttribute("class","card");
    let crdBody=document.createElement("div");
    crdBody.setAttribute("class","card-body");
    addCard.append(crdBody);
    let addTitle=document.createElement("h3");
    addTitle.innerText="ADD LIST";
    addTitle.setAttribute("class","card-title")
    crdBody.append(addTitle);
    let addLabel=document.createElement("label");
    addLabel.innerText="TITLE ;";
    crdBody.append(addLabel);
    let addInp=document.createElement("input");
    addInp.value=getId.innerText;
    addInp.setAttribute("type","text");
    addInp.setAttribute("id","List_");
    crdBody.append(addInp);
    let addCencel=document.createElement("button");
    addCencel.innerText="Cencel"
    addCencel.setAttribute("class","btn btn-primary cencel");
    crdBody.append(addCencel);

    let submitBtn=document.createElement("button");
    submitBtn.innerText="Submit";
    submitBtn.setAttribute("class","btn btn-primary submit");
 
    crdBody.append(submitBtn);
    addList.append(addCard);
    incmt++;
    console.log(addInp);
    submitBtn.addEventListener("click",function(){
        getId.innerText=addInp.value;
        addCard.remove();
    })
    addCencel.addEventListener("click",function(){
        addCard.remove();
    })


}

function edtingmsg(){
    let getPrnt=this.parentNode.parentNode;
    let gettitle=getPrnt.getElementsByClassName("card2title")[0];
    let getpara=getPrnt.getElementsByClassName("msgpara")[0];

    let addCard=document.createElement("div");
    addCard.setAttribute("class","card");
    let crdBody=document.createElement("div");
    crdBody.setAttribute("class","card-body");
    addCard.append(crdBody);
    let addTitle=document.createElement("h3");
    addTitle.innerText="ADD MESSAGE";
    addTitle.setAttribute("class","card-title")
    crdBody.append(addTitle);
    let addLabel=document.createElement("label");
    addLabel.innerText="TITLE ;";
    crdBody.append(addLabel);
    let addInp=document.createElement("input");
    addInp.value=gettitle.innerText;
    addInp.setAttribute("type","text");
    addInp.setAttribute("id","List_");
    crdBody.append(addInp);
    let msglabel=document.createElement("label");
    msglabel.innerText="MESSAGE ;";
    crdBody.append(msglabel);
    let msginp=document.createElement("input");
    msginp.value=getpara.innerText;
    msginp.setAttribute("type","text");
    crdBody.append(msginp);
    let addCencel=document.createElement("button");
    addCencel.innerText="Cencel"
    addCencel.setAttribute("class","btn btn-primary cencelbtn");
    crdBody.append(addCencel);
    let addDone=document.createElement("button");
    addDone.innerText="Submit";
    addDone.setAttribute("class","btn btn-primary submitbtn");
    crdBody.append(addDone);

    addMsg.append(addCard);
    addDone.addEventListener("click",function(){
        gettitle.innerText=addInp.value;
        getpara.innerText=msginp.value;
        addCard.remove();
    })    
    addCencel.addEventListener("click",function(){
        addCard.remove();
    })
}

function delting(i){
    let getprnt=this.parentNode.parentNode.parentNode.parentNode.parentNode;
    getprnt.remove();
}
function msgdeleting(){
    let getPrnt=this.parentNode.parentNode.parentNode.parentNode.parentNode;
    console.log(getPrnt);
    getPrnt.remove();
}

function addinglist(){
    
    let parnt=this.parentNode.parentNode;
    console.log(parnt);
    addMsg.style.display="block";

    let addCard=document.createElement("div");
    addCard.setAttribute("class","card");
    let crdBody=document.createElement("div");
    crdBody.setAttribute("class","card-body");
    addCard.append(crdBody);
    let addTitle=document.createElement("h3");
    addTitle.innerText="ADD MESSAGE";
    addTitle.setAttribute("class","card-title")
    crdBody.append(addTitle);
    let addLabel=document.createElement("label");
    addLabel.innerText="TITLE ;";
    crdBody.append(addLabel);
    let addInp=document.createElement("input");
    addInp.setAttribute("type","text");
    addInp.setAttribute("id","List_");
    crdBody.append(addInp);
    
    let msglabel=document.createElement("label");
    msglabel.innerText="MESSAGE ;";
    crdBody.append(msglabel);
    let msginp=document.createElement("input");
    msginp.setAttribute("type","text");
    crdBody.append(msginp);
    let br2=document.createElement("br");
    crdBody.append(br2);
    let addCencel=document.createElement("button");
    addCencel.innerText="Cencel"
    addCencel.setAttribute("class","btn btn-primary cencelbtn mt-4");
    crdBody.append(addCencel);
    let addDone=document.createElement("button");
    addDone.innerText="Done";
    addDone.setAttribute("class","btn btn-primary donebtn mt-4");
    crdBody.append(addDone);

    addMsg.append(addCard);

    let listCencelBtn=document.getElementsByClassName("cencelbtn")[0];
    listCencelBtn.addEventListener("click",function(){
        addCard.remove();
    })
    let listDoneBtn=document.getElementsByClassName("donebtn")[0];

    listDoneBtn.addEventListener("click",function(){
        let subTitle=parnt.getElementsByClassName("subtitle")[0];

        let colm=document.createElement("div");
    colm.setAttribute("class","col-lg-12 mt-4");
    let secondCard=document.createElement("div");
    secondCard.setAttribute("class","card");
    colm.append(secondCard);
    let crdBody1=document.createElement("div");
    crdBody1.setAttribute("class", "card-body");
    secondCard.append(crdBody1);
    let titleDiv=document.createElement("div");
    titleDiv.setAttribute("class","m");
    crdBody1.append(titleDiv);
    let cardtile=document.createElement("div");
    
    let cardhead=document.createElement("h4");
    cardhead.setAttribute("class","card2title");
    cardhead.innerText=addInp.value;
    cardtile.append(cardhead);
    let cardpara=document.createElement("p");
    cardpara.setAttribute("class","msgpara");
    cardpara.innerText=msginp.value;
    cardtile.append(cardpara);

    titleDiv.append(cardtile);

    let titleBtns=document.createElement("div");
    titleBtns.setAttribute("class","d-flex");
    let titleEdit=document.createElement("button");
    // titleEdit.innerText="Edit";
    titleEdit.setAttribute("class","btn btn-primary edit_msg");
    let icon=document.createElement("i");
    icon.setAttribute("class","icofont-edit-alt");
    titleEdit.append(icon);
    titleBtns.append(titleEdit);
    let titleDel=document.createElement("button");
    // titleDel.innerText="Delete";
    titleDel.setAttribute("class","btn btn-primary delete_msg");
    let icondel=document.createElement("i");
    icondel.setAttribute("class","icofont-ui-delete");
    titleDel.append(icondel);
    titleBtns.append(titleDel);
    titleDiv.append(titleBtns);
        subTitle.append(colm);

        addCard.remove();

    let edit_msgBtn=document.getElementsByClassName("edit_msg");
    let delete_msgBtn=document.getElementsByClassName("delete_msg");


    for(var m=0; m<edit_msgBtn.length;m++){
        edit_msgBtn[m].addEventListener("click",edtingmsg);
    }

    
    for(var n=0;n<delete_msgBtn.length;n++){
        delete_msgBtn[n].addEventListener("click",msgdeleting)
    }    

    })
}

addBtn.addEventListener("click",function(){

    addList.style.display="block";

    let addCard=document.createElement("div");
    addCard.setAttribute("class","card");
    let crdBody=document.createElement("div");
    crdBody.setAttribute("class","card-body");
    addCard.append(crdBody);
    let addTitle=document.createElement("h3");
    addTitle.innerText="ADD LIST";
    addTitle.setAttribute("class","card-title")
    crdBody.append(addTitle);
    let addLabel=document.createElement("label");
    addLabel.innerText="TITLE ;";
    crdBody.append(addLabel);
    let addInp=document.createElement("input");
    addInp.setAttribute("type","text");
    addInp.setAttribute("id","List_"+incmt);
    crdBody.append(addInp);
    let br=document.createElement("br");
    crdBody.append(br);
    let addCencel=document.createElement("button");
    addCencel.innerText="Cencel"
    addCencel.setAttribute("class","btn btn-primary cencel mt-3");
    crdBody.append(addCencel);
    let addDone=document.createElement("button");
    addDone.innerText="Done";
    addDone.setAttribute("class","btn btn-primary done mt-3");
   
    crdBody.append(addDone);
    // let submitBtn=document.createElement("button");
    // submitBtn.innerText="Submit";
    // submitBtn.setAttribute("class","btn btn-primary submit");
 
    // crdBody.append(submitBtn);
    addList.append(addCard);
    incmt++;
    console.log(addInp);

    let cencelBtn=document.getElementsByClassName("cencel")[0];
    cencelBtn.addEventListener("click",function(){
        addCard.remove();
    })

    let doneBtn=document.getElementsByClassName("done")[0];
    console.log(doneBtn);

    doneBtn.addEventListener("click",function(){
    let secRow=document.getElementById("secrow");

    let colm=document.createElement("div");
    colm.setAttribute("class","col-lg-4 mt-4");
    let secondCard=document.createElement("div");
    secondCard.setAttribute("class","card");
    colm.append(secondCard);
    let crdBody1=document.createElement("div");
    crdBody1.setAttribute("class", "card-body");
    secondCard.append(crdBody1);
    let titleDiv=document.createElement("div");
    titleDiv.setAttribute("class","d-flex justify-content-between");
    crdBody1.append(titleDiv);
    let cardtile=document.createElement("h4");
    cardtile.setAttribute("class","cardtitle");
    cardtile.innerText=addInp.value;
    titleDiv.append(cardtile);
    let titleBtns=document.createElement("div");
    titleBtns.setAttribute("class","d-flex");
    let titleEdit=document.createElement("button");
    // titleEdit.innerText="Edit";
    titleEdit.setAttribute("class","btn btn-primary edit");
    let editicon=document.createElement("i");
    editicon.setAttribute("class","icofont-edit-alt");
    titleEdit.append(editicon);
    titleBtns.append(titleEdit);
    let titleDel=document.createElement("button");
    // titleDel.innerText="Delete";
    titleDel.setAttribute("class","btn btn-primary delete");
    let delicon=document.createElement("i");
    delicon.setAttribute("class","icofont-ui-delete");
    titleDel.append(delicon);
    titleBtns.append(titleDel);
    titleDiv.append(titleBtns);

    let crdDiv=document.createElement("div");
    crdDiv.setAttribute("class","subtitle");
    crdBody1.append(crdDiv);

    let addCardList=document.createElement("div");
    let addCardBtn=document.createElement("button");
    addCardBtn.innerText="Add a card"
    addCardBtn.setAttribute("class","btn btn-primary addcards");
    addCardList.append(addCardBtn);
    crdBody1.append(addCardList);



    secRow.append(colm);
    console.log(crdBody1);
    addInp.value="";

    addCard.remove();

    let add_Btn=document.getElementsByClassName("addcards")
    let edit_Btn=document.getElementsByClassName("edit");
    let del_Btn=document.getElementsByClassName("delete");

    for (var i=0; i<edit_Btn.length;i++){
        edit_Btn[i].addEventListener("click",editing);
    }
    for(var j=0;j<del_Btn.length; j++){
        del_Btn[j].addEventListener("click",delting);
    }
    for(var k=0;k<add_Btn.length; k++){
        add_Btn[k].addEventListener("click",addinglist);
    }

})

})



