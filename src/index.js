/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseURL = 'https://platzi-avo.vercel.app'

const appNode = document.querySelector('#app')

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
  return newPrice
}


//web api
// connect to server
async function fetchData() {
  const res = await fetch(`${baseURL}/api/avo`)
  const data = await res.json()
  const array = data.data

  const dataCards = []
  let i = 0
  createElement()

// nodes creation
  function createElement () {
    if (array[i] === array[array.length]) {
      return dataCards
    } else {
      // image create
      const image = document.createElement('img')
      image.src = `${baseURL}${array[i].image}`
      image.className = 'mx-auto col-span-2'

      // title create
      const title = document.createElement('h2')
      title.textContent = array[i].name
      //title.style = 'font-size: 2rem'
      //title.style.fontSize = '3rem'
      //title.className = 'very-large'
      title.className = 'col-span-2 text-3xl font-semibold text-green-500 bg-gray-300 rounded-lg'

      // price create
      const price = document.createElement('p')
      price.textContent = formatPrice(array[i].price)
      price.className = 'col-span-2 font-bold text-white bg-green-400 rounded-lg hover:bg-red-500 cursor-pointer'

      const container = document.createElement('div')
      container.append(image, title, price)
      container.className = 'grid grid-cols-2 gap-3'
      dataCards.push(container)
      i++
      return createElement()
    }
  }

  appNode.append(...dataCards)
}

fetchData()