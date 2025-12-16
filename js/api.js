
function call(){
    const searchText = document.getElementById('searchText').value
    console.log(searchText)
    loadData(searchText)
}

function loadData(text){
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
                            <p>${phone.slug}</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div> 
                `

                container.appendChild(div)
        });


}