// Aquest codi ens ajuda a mostrar informació de les imatges de manera dinàmica

const images = Array.from(document.querySelectorAll('img'))
const infoContainers = Array.from(document.querySelectorAll('.image-info'))

// Per saber la mida de la imatge en bytes, pots fer una petició fetch per
// carregar la imatge i accedir a la seva longitud mitjançant el mètode
// blob.size. Aquest procés et proporciona la mida de la imatge en bytes.

// Més info sobre Blob --> https://es.javascript.info/blob

async function getImageInfo(url) {
	return new Promise(async (resolve, reject) => {
		const img = new Image()
		img.src = url

		img.onload = async () => {
			try {
				const response = await fetch(url)
				// blob és un tipus de dades que representa un objecte de dades binàries. En el cas de les imatges
				const blob = await response.blob()
				console.dir(blob)
				const format = url.split('.').pop()
				const dimensions = {
					width: img.width,
					height: img.height,
				}
				const alt = img.alt
				const size = blob.size

				resolve({ format, dimensions, alt, size })
			} catch (error) {
				reject(error)
			}
		}

		img.onerror = reject
	})
}

function displayImageInfo(url, container) {
	getImageInfo(url)
		.then((info) => {
			const formatElement = document.createElement('p')
			formatElement.textContent = `Format: ${info.format}`
			container.appendChild(formatElement)

			const dimensionsElement = document.createElement('p')
			dimensionsElement.textContent = `Dimensions: ${info.dimensions.width}x${info.dimensions.height}`
			container.appendChild(dimensionsElement)

			const altElement = document.createElement('p')
			altElement.textContent = `Alt: ${info.alt}`
			container.appendChild(altElement)

			const sizeInKB = (info.size / 1024).toFixed(2)
			const sizeElement = document.createElement('p')
			sizeElement.textContent = `Size: ${sizeInKB} KB`
			container.appendChild(sizeElement)
		})
		.catch(console.error)
}

const container = document.querySelector('#image-info-container')

images.forEach((img, i) => {
	displayImageInfo(img.src, infoContainers[i])
})

const files = [
	{ name: 'Logo', jpeg: 'images/Logo.jpg', webp: 'images/Logo.webp' },
	{
		name: 'Paisatge',
		jpeg: 'images/paisatge_mediumeffort.jpeg',
		webp: 'images/paisatge.webp',
	},
	{
		name: 'Cuadre',
		jpeg: 'images/cuadrereduced.jpg',
		webp: 'images/cuadre.webp',
	},
	{
		name: 'Transparència',
		jpeg: 'images/transparencia_mediumeffort.jpeg',
		webp: 'images/transparencia.webp',
	},
	{
		name: 'Gif',
		jpeg: 'images/diego-simeone.gif',
		webp: 'images/diego-simeone.webp',
	},
]

async function fetchFileSize(url) {
	const response = await fetch(url, { method: 'HEAD' })
	const contentLength = response.headers.get('Content-Length')
	return contentLength ? parseInt(contentLength, 10) : 0
}

async function calculateSizes() {
	const tableBody = document.querySelector('#file-table tbody')

	for (const file of files) {
		const jpegSize = await fetchFileSize(file.jpeg)
		const webpSize = await fetchFileSize(file.webp)

		// Cálculo de las reducciones en porcentaje
		const jpegReduction = ((jpegSize - webpSize) / jpegSize) * 100
		const webpReduction = ((jpegSize - webpSize) / webpSize) * 100

		const row = document.createElement('tr')
		row.innerHTML = `
      <td>${file.name}</td>
      <td>${(jpegSize / 1024).toFixed(2)} KB (${jpegReduction.toFixed(2)}%)</td>
      <td>${(webpSize / 1024).toFixed(2)} KB (${webpReduction.toFixed(2)}%)</td>
    `
		tableBody.appendChild(row)
	}
}

calculateSizes()
