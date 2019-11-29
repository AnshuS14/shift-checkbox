const checkboxes = document.querySelectorAll('.inbox input[type= "checkbox"]');

let lastChecked;

function handleCheck(ele){
    //check if the shift key down
    // check that user is checking (selecting) the element 
    let inBetween = false;
    if(ele.shiftKey && this.checked){
        //loop over evry single checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
            }
            if(inBetween){
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;  
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
