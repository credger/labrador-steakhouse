function createFooter(){

    const container = document.getElementById('container')

    const footer = document.createElement('div')
    footer.setAttribute('id', 'footer')

    container.appendChild(footer)

    const footerTopRow = document.createElement('div')
    footerTopRow.setAttribute('id', 'footerTopRow')
    footer.appendChild(footerTopRow)

    const footerAddressPhone = document.createElement('div')
    footerAddressPhone.setAttribute('id', 'footerAddressPhone')

    const footerName = document.createElement('p')
    footerName.setAttribute('id', 'footerName')
    footerName.innerHTML = 'Labrador Steakhouse'
    footerAddressPhone.appendChild(footerName)

    const footerAddress = document.createElement('p')
    footerAddress.setAttribute('id', 'footerAddress')
    footerAddress.setAttribute('class', 'directions')
    footerAddress.innerHTML ='3241 W Memorial Rd, Oklahoma City, OK 73134'
    footerAddressPhone.appendChild(footerAddress)

    const footerPhone = document.createElement('p')
    footerPhone.setAttribute('id', 'footerPhone')
    footerPhone.setAttribute('class', 'unavailableFeature')
    footerPhone.innerHTML = '451-232-2345'
    footerAddressPhone.appendChild(footerPhone)

    // footerAddressPhone.innerHTML = 'Labrador Steakhouse <br>'+
    // '3241 W Memorial Rd, Oklahoma City, OK 73134 <br>'+ 
    // 'Phone: 451-232-2345'

    footerTopRow.appendChild(footerAddressPhone)


    const footerCenterDiv = document.createElement('div')
    footerCenterDiv.setAttribute('id', 'footerCenterDiv')
    footerTopRow.appendChild(footerCenterDiv)

    const socialMediaDiv = document.createElement('div')
    socialMediaDiv.setAttribute('id', 'socialMediaDiv')
    footerCenterDiv.appendChild(socialMediaDiv)

    const twitter = document.createElement('img')
    twitter.setAttribute('class', 'socialMediaIcons unavailableFeature')
    twitter.setAttribute('id', 'twitter')
    twitter.setAttribute('src', './images/twitter.svg')
    socialMediaDiv.appendChild(twitter)

    const facebook = document.createElement('img')
    facebook.setAttribute('class', 'socialMediaIcons unavailableFeature')
    facebook.setAttribute('id', 'facebook')
    facebook.setAttribute('src', './images/facebook.svg')
    socialMediaDiv.appendChild(facebook)

    const instagram = document.createElement('img')
    instagram.setAttribute('class', 'socialMediaIcons unavailableFeature')
    instagram.setAttribute('id', 'instagram')
    instagram.setAttribute('src', './images/instagram.svg')
    socialMediaDiv.appendChild(instagram)

    const photographyInfoDiv = document.createElement('div')
    photographyInfoDiv.setAttribute('id', 'photographyInfoDiv')
    footerTopRow.appendChild(photographyInfoDiv)

    const photographyInfoText = document.createElement('p')
    photographyInfoText.setAttribute('id', 'photographyInfoText')
    photographyInfoDiv.appendChild(photographyInfoText)

    photographyInfoText.innerHTML = 'Photography by Alexander Kovacs, Emerson Vieira, Rachel Claire, & Olga Thelavart<br><br>'+
    'Menu by Mahogany Prime Steakhouse in Oklahoma City'


    const footerByLine = document.createElement('p')
    footerByLine.setAttribute('id', 'footerByLine')
    footerByLine.innerHTML = 'Site by Clyde Redger'
    footer.appendChild(footerByLine);

}


export default createFooter;