var btn=document.getElementById("btn");
var info=document.getElementById("data");

btn.addEventListener("click",function()
{
    var ourRequest=new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
    ourRequest.onload=function()
                      {
                        var ourData=ourRequest.responseText;
                        var myData=JSON.parse(ourRequest.responseText);
                        console.log(ourData);
                        console.log(myData[0]);
                        console.log(JSON.stringify(ourRequest.responseText));
                        //info.innerHTML=ourData;
                        //document.getElementById("data1").innerHTML=JSON.stringify(ourRequest.responseText);
                        info.insertAdjacentHTML("beforeend",ourData);
                    }
    ourRequest.send();
});