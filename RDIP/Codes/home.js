

var english=[{},{a:"John ate an apple before afternoon",b:"before afternoon John ate an apple",c:"John before afternoon ate an apple"},
    {a:"some students like to study in the night",b:"at night some students like to study"},
    {a:"John and Mary went to church",b:"Mary and John went to church"},
    {a:"John went to church after eating",b:"after eating John went to church",c:"John after eating went to church"},
    {a:"did he go to market	",b:"he did go to market"},
    {a:"the woman who called my sister sells cosmetics",b:"the woman who sells cosmetics called my sister",c:"my sister who sells cosmetics called the woman",d:"my sister who called the woman sells cosmetics"},
    {a:"John goes to the library and studies",b:"John studies and goes to the library"},
    {a:"John ate an apple so did she",b:"she ate an apple so did John"},
    {a:"the teacher returned the book after she noticed the error",b:"the teacher noticed the error after she returned the book",c:"after the teacher returned the book she noticed the error",d:"after the teacher noticed the error she returned the book",e:"she returned the book after the teacher noticed the error",f:"she noticed the error after the teacher returned the book",g:"after she returned the book the teacher noticed the error",h:"after she noticed the error the teacher returned the book"},
    {a:"I told her that I bought a book yesterday",b:"I told her yesterday that I bought a book",c:"yesterday I told her that I bought a book",d:"I bought a book that I told her yesterday",e:"I bought a book yesterday that I told her	",f:"yesterday I bought a book that I told her"}];



var hindi=[{},{a:"राम और श्याम बाजार गयें",b:"राम और श्याम गयें बाजार",c:"बाजार गयें राम और श्याम",d:"गयें बाजार राम और श्याम"},
    {a:"राम सोया और श्याम भी",b:"श्याम सोया और राम भी",c:"सोया श्याम और राम भी",d:"सोया राम और श्याम भी"},
    {a:"मैंने उसे बताया कि राम सो रहा है",b:"मैंने उसे बताया कि सो रहा है राम",c:"उसे मैंने बताया कि राम सो रहा है",d:"उसे मैंने बताया कि सो रहा है राम",e:"मैंने बताया उसे कि राम सो रहा है",f:"मैंने बताया उसे कि सो रहा है राम",g:"उसे बताया मैंने कि राम सो रहा है",h:"उसे बताया मैंने कि सो रहा है राम",i:"बताया मैंने उसे कि राम सो रहा है",j:"बताया मैंने उसे कि सो रहा है राम",k:"बताया उसे मैंने कि राम सो रहा है",l:"बताया उसे मैंने कि सो रहा है राम"},
    {a:"बिल्लियों को मारकर कुत्ता सो गया	",b:"मारकर बिल्लियों को कुत्ता सो गया	",c:"बिल्लियों को मारकर सो गया कुत्ता	",d:"मारकर बिल्लियों को सो गया कुत्ता	",e:"कुत्ता सो गया बिल्लियों को मारकर	",f:"कुत्ता सो गया मारकर बिल्लियों को	",g:"सो गया कुत्ता बिल्लियों को मारकर",h:"सो गया कुत्ता मारकर बिल्लियों को"},
    {a:"एक लाल किताब वहाँ है",b:"एक लाल किताब है वहाँ",c:"वहाँ है एक लाल किताब",d:"है वहाँ एक लाल किताब"},

    {a:"एक बड़ी सी किताब वहाँ है	",b:"एक बड़ी सी किताब है वहाँ",c:"बड़ी सी एक किताब वहाँ है",d:"बड़ी सी एक किताब है वहाँ",e:"वहाँ है एक बड़ी सी किताब",f:"वहाँ है बड़ी सी एक किताब",g:" है वहाँ एक बड़ी सी किताब",h:"है वहाँ बड़ी सी एक किताब"}];



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
function randomall(){

    var obj=document.getElementById("language").value;

    if(obj=="English") {


        var no = Math.floor(Math.random() * 10) + 1;

        var str = english[no].a;
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


                    document.getElementById('new3').innerHTML="Re-form the sentence";
                    document.getElementById('new3').style.marginLeft="650px";
                    document.getElementById('new3').style.marginTop="20px";
                    $("#new3").show();

                }
            })(i);




        }


    }
    else if (obj=="Hindi")
    {


        var no=Math.floor(Math.random() * 7) + 1;

        var str=hindi[no].a;
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


                    document.getElementById('new3').innerHTML="Re-form the sentence";
                    document.getElementById('new3').style.marginLeft="650px";
                    document.getElementById('new3').style.marginTop="20px";
                    $("#new3").show();


                }
            })(i);

        }


    }

}



function vanish(){

    $("#new1").hide();
    $("#new2").hide();
    $("#new3").hide();
    for(var i=0;i<c.length;i++)
        $(c[i]).show();

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


                document.getElementById('new3').innerHTML = "Re-form the sentence";
                document.getElementById('new3').style.marginLeft = "650px";
                document.getElementById('new3').style.marginTop = "20px";
                $("#new3").show();

                $("#new2").show();
            }
        })(i);
    }



}
        