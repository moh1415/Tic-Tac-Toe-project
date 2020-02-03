// get the button from dom
const resetBtn = document.querySelector('#reset');
// to re-start the game again 
function refreshPage(){
    window.location.reload();
}
//adding event linser for reset button to re-start the game
//resetBtn.addEventListener("click",refreshPage);
//to print who player turn
let msgDiv = document.querySelector('.msg');
//to print the result of the game by get the the div that have h1
let msg1Div = document.querySelector('.msg1');
//get the all the boxs by class name using jquery
let boxs = $(".box");
console.log(boxs);
//assign defult value for first turn start with x
let player = "X";
//the callback function to start the game
const start = function(){
    console.log('Click');
    
    fisrt_role(player);

    if(checkWin() == "X")
    {
        msgDiv.innerText ="";
        
        msg1Div.innerText="You Win player 1 ";
       
    }
    else if(checkWin() == "O"){
        msgDiv.innerText="";
        msg1Div.innerText="You Win player 2 ";
       
    }
    else{
       //check if all boxs have value not empty and no match and print
        for(let i =0;i<$(boxs).length;i++){
        if($(boxs[i]).text() != "" && notempty($(boxs[8]).text() ,$(boxs[0]).text(),$(boxs[1]).text()) &&
        notempty($(boxs[2]).text() ,$(boxs[3]).text(),$(boxs[4]).text()) && notempty($(boxs[5]).text() ,$(boxs[6]).text(),$(boxs[7]).text()) )
        {
            msgDiv.innerText="";
            let msg1Div = document.querySelector('.msg1');
            msg1Div.innerText="Tie";
            
        }
           
        // boxs[8].innerText !="" && boxs[0].innerText !="" && boxs[1].innerText !=""&& boxs[2].innerText !="" && boxs[3].innerText !="" && boxs[4].innerText !="" && boxs[5].innerText !="" && boxs[6].innerText !="" && boxs[7].innerText !=""
    // notempty($(boxs[8]).text() ,$(boxs[0]).text(),$(boxs[1]).text())
    // notempty($(boxs[2]).text() ,$(boxs[3]).text(),$(boxs[4]).text())
    // notempty($(boxs[5]).text() ,$(boxs[6]).text(),$(boxs[7]).text())
         }
        
    }
   
  //  console.log($(boxs[0]).text());


}

function fisrt_role(player1)
        {
            if(player1 == "X")
            {
                $(event.target).text(player1).animate({fontSize: "6em"}).css('backgroundImage', 'url(images/102456.jpg)');
                msgDiv.innerText ="player 2 Your turn choose ";
                return player = "O";
            }
            if(player1 =="O")
            {   
                $(event.target).text(player1).animate({fontSize: "6em"});
                msgDiv.innerText ="player 1 Your turn choose ";
                return player = "X";
            }
           
         
          
        }
            // check all posible win in row or column by looping the boxs
            //and find match and return the value of the box to know who win or losee
            function checkWin(user)
            {
                //check column by column if X or O in column is match
            for(let i =0;i<=2;i++)
            {
                if(notempty($(boxs[i]).text() , $(boxs[i+3]).text() , $(boxs[i+6]).text()))
                {
                    if($(boxs[i]).text() == $(boxs[i+3]).text() && $(boxs[i+3]).text() == $(boxs[i+6]).text()){
                        $(boxs).off('click');
                        //return msg1Div.innerText="You Win player "+user;
                        return $(boxs[i]).text();
                    }
                }
                }
            //check if left diamater is match and return the value of it
            if(notempty($(boxs[0]).text(),$(boxs[4]).text(),$(boxs[8]).text())){
                if($(boxs[0]).text()==$(boxs[4]).text()&& $(boxs[4]).text()==$(boxs[8]).text())
                {

                    $(boxs).off('click');
                    //return msg1Div.innerText="You Win player "+user;
                    return $(boxs[0]).text();
                }
            }
            //check if right diamater is match and return the value of it
            if(notempty($(boxs[2]).text(),$(boxs[4]).text(),$(boxs[6]).text())){
                if($(boxs[2]).text()==$(boxs[4]).text()&& $(boxs[4]).text()==$(boxs[6]).text())
                {
                    $(boxs).off('click');
                // return msg1Div.innerText="You Win player "+user;
                    return $(boxs[2]).text();
                }
            }
            let row = [0,1,2,3,4,5,6,7,8];
            for(let i =0;i<=row.length;i = i+3)
            {
                if(notempty($(boxs[row[i]]).text(), $(boxs[row[i+1]]).text() , $(boxs[row[i+2]]).text()))
                {    
                    if($(boxs[row[i]]).text()==$(boxs[row[i+1]]).text()&& $(boxs[row[i+1]]).text() == $(boxs[row[i+2]]).text())
                    {
                        $(boxs).off('click');
                         return $(boxs[row[i]]).text();
                    }
                }
            }
            
            
            // check first row if match
            // if(notempty($(boxs[0]).text(), $(boxs[1]).text() , $(boxs[2]).text()))
            // {    
            //     if($(boxs[0]).text()==$(boxs[1]).text()&& $(boxs[1]).text() == $(boxs[2]).text())
            //     {
            //         $(boxs).off('click');
            //          return $(boxs[0]).text();
            //     }
            // }
            // //check second row if match
            // if(notempty($(boxs[3]).text(), $(boxs[4]).text() , $(boxs[5]).text()))
            // {    
            //     if($(boxs[3]).text()==$(boxs[4]).text()&& $(boxs[4]).text() == $(boxs[5]).text())
            //     {
            //         $(boxs).off('click');
            //          return $(boxs[3]).text();
            //     }
            // }
      
            // // //check third row if match
            // if(notempty($(boxs[6]).text(), $(boxs[7]).text() , $(boxs[8]).text()))
            // {    
            //     if($(boxs[6]).text()==$(boxs[7]).text()&& $(boxs[7]).text() == $(boxs[8]).text())
            //     {
            //         $(boxs).off('click');
            //          return $(boxs[6]).text();
            //     }
            // }
      
   }

// function to check if all 3 varblie not equal to empty string
function notempty(box1,box2,box3)
{
    if((box1 && box2 && box3) !="")
    {
        return true;
    }
}

function resetBoxs(){
    
    for(let i =0;i<boxs.length;i++){
        
        $(boxs[i]).text("");
        $(boxs[i]).removeAttr("style");

     }
     player = "X";
     msg1Div.innerText = "";
     boxs.one("click",start);

}
//add listener to the game bord with Jquery
$(boxs).one("click",start);
//add listener for restart button
resetBtn.addEventListener("click",resetBoxs);


