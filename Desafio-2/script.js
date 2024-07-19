const switchButton = document.getElementById('switch')

function toggle() {
    const html = document.documentElement.html.classList('light')

    if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }
}

switchButton.addEventListener('click', () => {
    this.toggle()
})