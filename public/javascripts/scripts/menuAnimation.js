        var lang=1;
        function cooltext()
        {
            $(".coolName1").cooltext({
                sequence:[
                    {action:"animation", animation:"cool48", delay:2}
                ]
            }); 
            $(".coolName2").cooltext({
                sequence:[
                    {action:"animation", animation:"cool48", delay:2}
                ]
            });             
            setTimeout(function(){ 
                if (lang==1)
                    $("#coolContainer").html("<h1 h-menu><span class='spanGray coolName1'>ARQUITECTO</span><span class='spanWhite coolName2'>IGNACIOPUENTE</span></h1>"); 
                else
                    $("#coolContainer").html("<h1 h-menu><span class='spanGray coolName1'>IGNACIOPUENTE</span><span class='spanWhite coolName2'>ARCHITECT</span></h1>");
                cooltext();}, 6000);
        }
        $(document).ready(function(){
            $("#english").click(function(){
                lang=0;
                $("#english").html("Ingles");
                $("#spanish").html("Spanish");
                $("#inicio").html("HOME");
                $("#obras").html("WORKS");
                $("#contacto").html("CONTACT");
                $("#coolContainer").html("<h1 h-menu><span class='spanGray coolName1'>IGNACIOPUENTE</span><span class='spanWhite coolName2'>ARCHITECT</span></h1>");
            });
            $("#spanish").click(function(){
                lang=1;
                $("#english").html("English");
                $("#spanish").html("Español");
                $("#inicio").html("INICIO");
                $("#obras").html("OBRAS");
                $("#contacto").html("CONTACTO");
                $("#coolContainer").html("<h1 h-menu><span class='spanGray coolName1'>ARQUITECTO</span><span class='spanWhite coolName2'>IGNACIOPUENTE</span></h1>");
            });
            $(".coolLink").cooltext({
                onMouseOver:
                    {action:"animation", animation:"cool79"}
            })
            $(".coolName1").cooltext({
                sequence:[
                    {action:"animation", animation:"cool48"}
                ]
            }); 
            $(".coolName2").cooltext({
                sequence:[
                    {action:"animation", animation:"cool48"}
                ]
            });
            setTimeout(function(){ 
                if (lang==1)
                    $("#coolContainer").html("<h1 h-menu><span class='spanGray coolName1'>ARQUITECTO</span><span class='spanWhite coolName2'>IGNACIOPUENTE</span></h1>"); 
                else
                    $("#coolContainer").html("<h1 h-menu><span class='spanGray coolName1'>IGNACIOPUENTE</span><span class='spanWhite coolName2'>ARCHITECT</span></h1>");
                cooltext();}, 6000);
        });