

var english=[[],["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
    ["some students like to study in the night","at night some students like to study"],
    ["John and Mary went to church","Mary and John went to church"],
    ["John went to church after eating","after eating John went to church","John after eating went to church"],
    ["did he go to market	","he did go to market"],
    ["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
    ["John goes to the library and studies","John studies and goes to the library"],
    ["John ate an apple so did she","she ate an apple so did John"],
    ["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
    ["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her	","yesterday I bought a book that I told her"]];



var hindi=[[],["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
    ["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
    ["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],
    ["बिल्लियों को मारकर कुत्ता सो गया	","मारकर बिल्लियों को कुत्ता सो गया	","बिल्लियों को मारकर सो गया कुत्ता	","मारकर बिल्लियों को सो गया कुत्ता	","कुत्ता सो गया बिल्लियों को मारकर	","कुत्ता सो गया मारकर बिल्लियों को	","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
    ["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],

    ["एक बड़ी सी किताब वहाँ है	","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब"," है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]];



var script = document.createElement('script');
script.src = 'jquery-3.5.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

function mn(){


    $(document).ready(function(){
        $("#language").change(function(){
            $("#p1").show();
            $("#p2").show();
        });
    });


}
var c=document.getElementById("new").childNodes;
var k=0;
var no=0;
var element1=document.getElementById("new2");

function randomall(){

    var obj=document.getElementById("language").value;

    if(obj=="English") {


        no = Math.floor(Math.random() * 10) + 1;

        var str = english[no][1];
        var total = str.split(" ").length;

        var no1 = Math.floor(Math.random() * total) + 1;


        var result = str.split(" ").sort(function () {
            return 0.4 - Math.random()
        });

        document.getElementById("new").innerHTML = "";
        document.getElementById("new2").innerHTML = "";
        for (var i = 0; i < result.length; i++) {

            var x = document.createElement("BUTTON");
            var t = document.createTextNode(result[i]);
            x.appendChild(t);
            var element = document.getElementById("new");
            element.appendChild(x);

        }
        c=document.getElementById("new").childNodes;
        var para=0;
        var g = document.getElementById('new');
        for (var i = 0, len = g.children.length; i < len; i++)
        {

            (function(index){
                g.children[i].onclick = function(){
                    $("#new1").show();
                    $("#myspan").show();
                    $(c[index]).hide();
                    var node = document.createElement("string");
                    var k=c[index].textContent;
                    var spa=" ";
                    var textnode = document.createTextNode(k+" ");
                    node.appendChild(textnode);
                    element1=document.getElementById("new2");
                    element1.appendChild(node);
                    para++;

                    document.getElementById('new3').innerHTML="Re-form the sentence";
                    document.getElementById('new3').style.marginLeft="650px";
                    document.getElementById('new3').style.marginTop="20px";
                    $("#new3").show();
                    if(para==len)
                    {
                        $("#new5").show();
                    }

                }
            })(i);




        }


    }

    else if (obj=="Hindi")
    {


        no=Math.floor(Math.random() * 7) + 1;

        var str=hindi[no][1];
        var total = str.split(" ").length;

        var no1=Math.floor(Math.random() * total) + 1;



        var result = str.split(" ").sort(function() {
            return 0.4 - Math.random()
        });


        document.getElementById("new").innerHTML="";
        document.getElementById("new2").innerHTML="";

        for(var i=0;i<result.length;i++){

            var x = document.createElement("BUTTON");
            var t = document.createTextNode(result[i]);
            x.appendChild(t);

            var element1 = document.getElementById("new");
            element1.appendChild(x);

        }
        c=document.getElementById("new").childNodes;
        var para=0;
        var g = document.getElementById('new');
        for (var i = 0, len = g.children.length; i < len; i++)
        {

            (function(index){
                g.children[i].onclick = function(){

                    $("#new1").show();
                    $("#myspan").show();
                    $(c[index]).hide();
                    var node = document.createElement("string");
                    var k=c[index].textContent;
                    var spa=" ";
                    var textnode = document.createTextNode(k+" ");
                    node.appendChild(textnode);
                    var element1=document.getElementById("new2");
                    element1.appendChild(node);
                    para++;

                    document.getElementById('new3').innerHTML="Re-form the sentence";
                    document.getElementById('new3').style.marginLeft="650px";
                    document.getElementById('new3').style.marginTop="20px";
                    $("#new3").show();
                    if(para==len)
                    {
                        $("#new5").show();
                    }

                }
            })(i);

        }


    }

}



function vanish(){

    $("#new1").hide();
    $("#new2").hide();
    $("#new3").hide();
    $("#new5").hide();
    $("#new6").hide();
    for(var i=0;i<c.length;i++)
        $(c[i]).show();
    var para=0;
    document.getElementById("new2").innerHTML = "";
    var g = document.getElementById('new');
    for (var i = 0, len = g.children.length; i < len; i++) {

        (function (index) {
            g.children[i].onclick = function () {
                $("#new1").show();
                $("#myspan").show();
                $(c[index]).hide();
                var node = document.createElement("string");
                var k = c[index].textContent;
                var spa = " ";
                var textnode = document.createTextNode(k + " ");
                node.appendChild(textnode);
                var element1 = document.getElementById("new2");
                element1.appendChild(node);
                para++;

                document.getElementById('new3').innerHTML = "Re-form the sentence";
                document.getElementById('new3').style.marginLeft = "650px";
                document.getElementById('new3').style.marginTop = "20px";
                $("#new3").show();

                $("#new2").show();
                if(para==len)
                {
                    $("#new5").show();
                }
            }
        })(i);
    }


}

function check() {
    $("#new6").show();
    var str = "hello";
    var nk=english[no];
    var len=nk.length;
    var mic = $("#new2").closest("p").text();
    var int=0;
    for(var i=0;i<len;i++)
    {
        if (mic.trim()==english[no][i].trim()) {
            str = "Right answer!!!";
            document.getElementById("new6").style.color="green";
            int++;
        }


    }
    if(int ==0){
        str = "Wrong answer!!!";
        document.getElementById("new6").style.color="red";
    }
    document.getElementById("new6").innerHTML =str ;
    if(str=="Wrong answer!!!")
    {
        $("#new7").show();
        $("#new7").click(function() {

            var lable = $("#new7").text().trim();

            if(lable == "Hide the correct Sentence") {
                $("#new7").text("Get Answers");

            }
            else {
                $("#new7").text("Hide the correct Sentence");

            }

        });
    }

}
