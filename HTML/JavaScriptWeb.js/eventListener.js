const input = document.querySelector('input')
const button = document.querySelector('button')
const select = document.querySelector('select')


input.addEventListener('focus', () => {
    console.log('Dei um foco')
})

select.addEventListener('change', () => {
    console.log(select.value)
})


button.addEventListener('click', () => {
    console.log('clicou')
})