//select dropdown
const select = document.querySelector('select');
//add event listener
select.addEventListener("change",function(){
    const filterValue = select.value;
    console.log(filterValue);
    //get all movies
    const allTicket = document.querySelectorAll('.price');
    if(filterValue == 'none'){
        for(let i = 0;i < allTicket.length;i++){
            allTicket[i].parentElement.style.display = 'block';
        }

        //show all movies
    
    }
    else{
        //show the movie that match the filter
       //loop over all the movies
       //get the genre from theattribute
       // if genre matches filter value, show the movie
       //else hide the movie
       // to hide the movie set style display to none
       // we need to hide the parent of the paragraph
       for(let i =0;i<allTicket.length;i++){
        if(allTicket[i].getAttribute('data-category') != filterValue){
            allTicket[i].parentElement.style.display ="none";
        
        }
        else{
            allTicket[i].parentElement.style.display ="block";
        }
       }

    }
});