/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseURL = 'https://platzi-avo.vercel.app'

const appNode = document.querySelector('#app')


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
      // title create
      const title = document.createElement('h2')
      title.textContent = array[i].name
      // price create
      const price = document.createElement('p')
      price.textContent = array[i].price
      
      const container = document.createElement('div')
      container.append(image, title, price)
      dataCards.push(container)
      i++
      return createElement()
    }
  }

  appNode.append(...dataCards)
}

fetchData()