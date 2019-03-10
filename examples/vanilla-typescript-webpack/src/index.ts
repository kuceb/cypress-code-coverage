
document.body.innerHTML = `<button class="btn">click me</button>`


const btn = document.querySelector('.btn')
let clickCount = 0
btn.addEventListener('click', () => {
	if (++clickCount === 2) {
		alert('you fool!')
	}
	btn.textContent = 'click me again'
})