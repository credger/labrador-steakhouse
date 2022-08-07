function createNavBar() {
    const container = document.getElementById('container')

    const actionBar = document.createElement('div')
    actionBar.setAttribute('id', 'actionBar')
    // container.appendChild(actionBar)
    container.insertBefore(actionBar, container.children[0])

    const icons = ['phone.svg', 'cart.svg', 'credit-card.svg', 'clipboard-edit.svg']
    const iconText = ['451-232-2345', 'Order Online', 'Gift Cards', 'Reservations']
    const divID = ['phoneNumber', 'orderOnline', 'giftCards', 'reservations']

    for(let i = 0; i < icons.length; i++){
        let newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'actionBarItem unavailableFeature')
        newDiv.setAttribute('id', divID[i])

        let newIcon = document.createElement('img')
        newIcon.setAttribute('src', './images/' + icons[i])
        newIcon.setAttribute('alt', icons[i])
        newIcon.setAttribute('class', 'actionBarIcon')


        let newText = document.createElement('p')
        newText.innerHTML = iconText[i]

        actionBar.appendChild(newDiv)
        newDiv.appendChild(newIcon)
        newDiv.appendChild(newText)
    }

    const navBarLinks = ['./images/menu.pdf', 'location.html', 'about.html', 'privateDining.html']
    const navBarText = ['Menu', 'Location', 'About', 'Private Dining']

    const navBar = document.createElement('div')
    navBar.setAttribute('id', 'navBar')

    const home = document.createElement('a')
    home.setAttribute('href', 'index.html')
    home.setAttribute('id', 'home')
    
    const logoTitle = document.createElement('div')
    logoTitle.setAttribute('id', 'logoTitle')
    
    const labradorImage = document.createElement('img')
    labradorImage.setAttribute('src', './images/labImage.svg')
    labradorImage.setAttribute('alt', 'labrador-silhouette')
    labradorImage.setAttribute('id', 'labradorImage')
    
    const navBarTitle = document.createElement('h1')
    navBarTitle.setAttribute('id', 'navBarTitle')
    navBarTitle.innerHTML = 'Labrador Steakhouse'
    
    const navBarItems = document.createElement('div')
    navBarItems.setAttribute('id','navBarItems')

    for(let i = 0; i < navBarLinks.length; i++){
        let newLink = document.createElement('a')
        newLink.setAttribute('class', 'navBarText')
        newLink.setAttribute('href', navBarLinks[i])
        newLink.innerHTML = navBarText[i]
        navBarItems.appendChild(newLink)
    }
    
    const emptyNavBarDiv = document.createElement('div')
    emptyNavBarDiv.setAttribute('id', 'emptyNavBarDiv')
    
    // container.appendChild(navBar)
    container.insertBefore(navBar,container.children[1])
    navBar.appendChild(home)
    home.appendChild(logoTitle)
    logoTitle.appendChild(labradorImage)
    logoTitle.appendChild(navBarTitle)
    navBar.appendChild(navBarItems)
    navBar.appendChild(emptyNavBarDiv)

    console.log('CreateNavBar complete')
    
}

export default createNavBar;