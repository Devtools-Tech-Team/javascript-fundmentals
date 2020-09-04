function outer(){
    var x = 1;

    function inner(){
        if(true){
            console.log(`printing x ${x}`);
        }

        function innerMost(){
            var y = 2;
            if(true){
                console.log(`printing y in innermost ${y}`);
                console.log(`printing x in innermost ${x}`);
            }
        }

        innerMost();
    }
    outside();
    inner();
}

function outside(){
    console.log("iam outside");
    console.log(`printing x in outside ${x}`);
}

outer();