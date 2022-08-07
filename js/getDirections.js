function getDirections(){
    const directions = document.getElementsByClassName('directions')
    for (var i = 0; i< directions.length; i++){
        directions[i].addEventListener('click', function(){
            window.open('https://www.google.com/maps/dir//3241+W+Memorial+Rd,+Oklahoma+City,'+
            '+OK+73134/@35.6104123,-97.5755488,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x87b21c8cdd57043d'+
            ':0x7fa36f46e10db8a!2m2!1d-97.5755488!2d35.6104123!3e0', '_blank')
        })
    }
}

export default getDirections;

