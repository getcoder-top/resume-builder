function addnewWEfield(){
    let newnode=document.createElement("textarea");
    newnode.classList.add("hobbies");
    newnode.classList.add("wefield");
    newnode.classList.add("mt-2")
    newnode.setAttribute("rows",3);
    newnode.setAttribute("placeholder","Enter hobhies");


    
    let weaddbuttonOb=document.getElementById("weaddbutton");
    let weOb=document.getElementById("we");

    weOb.insertBefore(newnode,weaddbuttonOb);
    

}

function addnewskfield(){
    let newnode=document.createElement("textarea");
    newnode.classList.add("skills");
    newnode.classList.add("wefield");
    newnode.classList.add("mt-2")
    newnode.setAttribute("rows",3);
    newnode.setAttribute("placeholder","Enter skills");


    
    let weaddbuttonOb=document.getElementById("addbutton");
    let weOb=document.getElementById("se");

    weOb.insertBefore(newnode,weaddbuttonOb);
    

}

function generatecv(){

    // adding value of the form in the cv

    let name=document.getElementById("name");
    let name1=document.getElementsByClassName("name")[0].value;
    name.innerhtml=name1;

    let mobile=document.getElementById("mobile1").value;
    document.getElementById("mobile").innerHTML=mobile;

    let address=document.getElementsByClassName("address")[0].value;
    document.getElementById("address").innerHTML=address;

    document.getElementById("email").innerHTML=document.getElementsByClassName("email")[0].value;

    document.getElementById("objective").innerHTML=document.getElementsByClassName("objective")[0].value;

    document.getElementById("linkedin").innerHTML=document.getElementsByClassName("linkedin")[0].value;

    document.getElementById("college").innerHTML=document.getElementsByClassName("college")[0].value;

    document.getElementById("course").innerHTML=document.getElementsByClassName("course")[0].value;

    document.getElementById("start date").innerHTML=document.getElementsByClassName("date")[0].value;

    document.getElementById("end date").innerHTML=document.getElementsByClassName("date")[0].value;

    document.getElementById("skills").innerHTML=document.getElementsByClassName("skills")[0].value;

    document.getElementById("hobbies").innerHTML=document.getElementsByClassName("hobbies")[0].value;

    // printing new skills in the next line

    let we=document.getElementsByClassName("skills");
    let str="";

    for(let e of we){
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("skills").innerHTML= str;

    let ho=document.getElementsByClassName("hobbies");
    let str1="";

    for(let e of ho){
        str1 = str1+`<li>${e.value}</li>`;
    }

    document.getElementById("hobbies").innerHTML= str1;


    let file=document.getElementById("img1").file;

    let reader=new FileReader();

    // reader.readAsDataURL(file);

    reader.onloadend=function(){
        document.getElementById("img").src=reader.result;
    }

    document.getElementById("cv-form").style.display='none';
    document.getElementById("cv").style.display='block';



}

function download(){
    window.print();
}


