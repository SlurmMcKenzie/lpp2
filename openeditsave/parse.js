var xmlhttp = new XMLHttpRequest();
    var text = "<table>";
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.status==200 && xmlhttp.readyState==4){
            var re_one = /@.+\s/g; //Match vom @ zum Leerzeichen
            var words = xmlhttp.responseText.match(re_one);
            
            for (i = 0; i < words.length; i++) {
                text += "<tr><td><div id=element_"+ i + ">" + words[i] + "</div></td></tr>";
                
                var re_c = /<C>.*?<C>/g;
                
                if(re_c.test(words[i])) {
                        var c_element = xmlhttp.responseText.match(re_c);
                        for (j = 0; j < c_element.length; j++) {
                            text += "<tr><td><div>" + c_element[j] + "</div></td></tr>";
                            }
                        }
            }
                    
        }
            text += "</table>"
            document.getElementById('parse').innerHTML = text;
    }
    xmlhttp.open("GET","file.html",true);
    xmlhttp.send();

/* Teste auf verschiedene Muster
 * Backup Text 1
 * Buttons: a) Ursprünglichen Text wiederherstellen 
 *          b) Text speichern
 *          c) nächster Text

*/
