function addAlert(){
    const unavailableFeature = document.getElementsByClassName('unavailableFeature')
    for (var i = 0; i< unavailableFeature.length; i++){
        unavailableFeature[i].addEventListener('click', function(){alert("This feature is currently unavailable")})
    }
}

export default addAlert;
