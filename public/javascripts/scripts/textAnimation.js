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
      setTimeout(function(){ $("#coolContainer").html("<h1><span class='spanGray coolName1'>ARQUITECTO</span><span class='spanWhite coolName1'>IGNACIOPUENTE | Design</span></h1>"); cooltext();}, 6000);
      }
      $(document).ready(function(){
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
      setTimeout(function(){ $("#coolContainer").html("<h1><span class='spanGray coolName1'>ARQUITECTO</span><span class='spanWhite coolName1'>IGNACIOPUENTE | Design</span></h1>"); cooltext();}, 6000);
      });
