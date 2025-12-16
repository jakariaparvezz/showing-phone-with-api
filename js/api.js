function call(){
    const searchText = document.getElementById('searchText').value
    
    loadData(searchText)
}

function loadData(text='iphone'){
    fetch(`https://openapi.programming-hero.com/api/phones?search=${text}`)
    .then(res => res.json())
    .then(data => showingPhone(data.data))
}

const showingPhone = phones =>{

         const container = document.getElementById('phone-container')
         const showMore  = document.getElementById('show-more-btn')
         container.innerText = ''

            if (phones.length >= 12) {
                phones = phones.slice(0,12)
                showMore.classList.remove('hidden')
            }
            else{
                showMore.classList.add('hidden')
            }

            phones.forEach(phone => {
                
                const div = document.createElement('div')
                div.classList = `card bg-base-200 shadow-lg`

                div.innerHTML = `
                    <figure class="px-10 pt-10">
                        <img
                        src=${phone.image}
                        alt="Shoes"
                        class="rounded-xl" />
                     </figure>

                    <div class="card-body items-center text-center">
                            <h2 class="card-title">${phone.phone_name}</h2>
                        <div class="card-actions">

                            <button  onclick="callDetails('${phone.slug}');my_modal.showModal()" class="btn btn-primary">Show Details</button>

                        </div>
                    </div> 
                `

                container.appendChild(div)
        });

}

const callDetails =async id =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    let data = await res.json()
    data = data.data
    showDetails(data)
    
}

const showDetails = details =>{
    console.log(details)
    const detailsContainer = document.getElementById('details-container')

    detailsContainer.innerHTML = `<figure>
                                  <img
                                    src="${details.image}"
                                    alt="Shoes" />
                                </figure>
                                <div class="card-body">
                                  <h2 class="card-title text-2xl font-bold">${details.name}</h2>
                                  <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

                                  <p><span class="font-medium text-base">Brand : </span class="font-medium">${details.brand}</p>
                                  
                                  <p><span class="font-medium text-base">ChipSet : </span class="font-medium">${details.mainFeatures.chipSet}</p>

                                  <p><span class="font-medium text-base">Display Size : </span class="font-medium">${details.mainFeatures.displaySize}</p>

                                  <p><span class="font-medium text-base">Memory: </span class="font-medium">${details.mainFeatures.memory}</p>

                                  <p><span class="font-medium text-base">Storage : </span class="font-medium">${details.mainFeatures.storage}</p>

                                  <p><span class="font-medium text-base">Release Date : </span class="font-medium">${details.releaseDate}</p>
                                  

                                  <div class="card-actions justify-end">
                                    <button class="btn btn-primary">Buy Now</button>
                                  </div>
                                </div>`
}



loadData()