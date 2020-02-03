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
        msg1Div.innerText="You Win player 1 ";
       
    }
    else if(checkWin() == "O"){
        msg1Div.innerText="You Win player 2 ";
       
    }
    else{
       // let msg1Div = document.querySelector('.msg1').visibility = "hidden";
        for(let i =0;i<boxs.length;i++){
        if(boxs[i].innerText != "" && boxs[8].innerText !="")
        {
            
            let msg1Div = document.querySelector('.msg1');
            msg1Div.innerText="Tie";
        }
           
            
    
         }
        
    }
   
  //  console.log($(boxs[0]).text());


}

function fisrt_role(player1)
        {
            if(player1 == "X")
            {
               
                //msgDiv.innerText ="player 1 Your turn choose "+player1;
                $(event.target).text(player1);
                msgDiv.innerText ="player 2 Your turn choose ";
                return player = "O";
            }
            if(player1 =="O")
            {   
                $(event.target).text(player1);
                msgDiv.innerText ="player 1 Your turn choose ";
                //msgDiv.innerText ="player 2 Your Turn choose "+player1;
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
                        $(boxs).off('click')
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
            // let row = [0,1,2,3,4,5,6,7,8];
            // for(let i =0;i<=row.length;i = i+3)
            // {
            //     if(notempty($(boxs[row[i]]).text(), $(boxs[row[i+1]]).text() , $(boxs[row[i+2]]).text()))
            //     {    
            //         if($(boxs[row[i]]).text()==$(boxs[row[i+1]]).text()&& $(boxs[row[i+1]]).text() == $(boxs[row[i+2]]).text())
            //         {
            //             $(boxs).off('click');
            //              return $(boxs[row[i]]).text();
            //         }
            //     }
            // }
            
            // check first row if match
            if(notempty($(boxs[0]).text(), $(boxs[1]).text() , $(boxs[2]).text()))
            {    
                if($(boxs[0]).text()==$(boxs[1]).text()&& $(boxs[1]).text() == $(boxs[2]).text())
                {
                    $(boxs).off('click');
                     return $(boxs[0]).text();
                }
            }
            //check second row if match
            if(notempty($(boxs[3]).text(), $(boxs[4]).text() , $(boxs[5]).text()))
            {    
                if($(boxs[3]).text()==$(boxs[4]).text()&& $(boxs[4]).text() == $(boxs[5]).text())
                {
                    $(boxs).off('click');
                     return $(boxs[3]).text();
                }
            }
      
            // //check third row if match
            if(notempty($(boxs[6]).text(), $(boxs[7]).text() , $(boxs[8]).text()))
            {    
                if($(boxs[6]).text()==$(boxs[7]).text()&& $(boxs[7]).text() == $(boxs[8]).text())
                {
                    $(boxs).off('click');
                     return $(boxs[6]).text();
                }
            }
      
      
      
       

   }
//check row by row if X or O in 3 row




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
        
        boxs[i].innerText = "";
        

     }
     player = "X";
     msg1Div.innerText = "";
     boxs.one("click",start);

}

boxs.one("click",start);
resetBtn.addEventListener("click",resetBoxs);

