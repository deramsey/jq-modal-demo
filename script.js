$( document ).ready( function() {

    $("#modal").hide();

    $("#send").on("click", function(){

        $("#modal").show();

    });

    $("#close").on("click", function(){
       
        $("#modal").hide();

        $("input[type='text']").val("");
        $("textarea").val("");
        $("#state option:first").attr("selected", true);


    });
});