const section1 = document.querySelector('.section-1')
const section2 = document.querySelector('.section-2')

section1.addEventListener('mouseenter', addActive)
section2.addEventListener('mouseenter', addActive)

function addActive(e) {
    if (e.target.id === 'section-1') {
        section1.classList.add('active')
        section2.classList.remove('active')
        section1.classList.remove('inactive')
        section2.classList.add('inactive')
    } else {
        section2.classList.add('active')
        section1.classList.remove('active')
        section2.classList.remove('inactive')
        section1.classList.add('inactive')
    }

}
