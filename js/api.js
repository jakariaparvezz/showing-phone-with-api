function loadData(){
    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(res => res.json())
    .then(data => showingPhone(data.data))
}

const showingPhone = phones =>{
    const container = document.getElementById('phone-container')
            phones.forEach(phone => {
                console.log(phone)
                const div = document.createElement('div')
                div.classList = `card bg-base-200 w-96 shadow-sm`

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
                </div> `

                container.appendChild(div)
        });
}