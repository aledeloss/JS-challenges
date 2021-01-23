// MOSTRAR INFORMACIÓN
let info = [
    {
        subscription: 'Basic',
        anually: 199.99,
        monthly: 19.99,
        storage: '500 GB',
        users: 2,
        limit: 3
    },
    {
        subscription: 'Professional',
        anually: 249.99,
        monthly: 34.99,
        storage: '1 TB',
        users: 5,
        limit: 10        
    },
    {
        subscription: 'Master',
        anually: 399.99,
        monthly: 99.99,
        storage: '2 TB',
        users: 10,
        limit: 20    
    }
]


//CAMBIO DE SUSCRIPCIÓN
let activeSubscription
let price = document.querySelector('.price')

document.querySelector('.switchThing').addEventListener("click", function(){
   activeSubscription = !activeSubscription
   console.log(activeSubscription)
   return activeSubscription
});


//RENDERIZADO DE TARJETAS
let renderCards = document.querySelector('.cards')

let cardsContent = info.map((card => (
    renderCards.innerHTML += `
        <div class="card">
            <div class="subscription">${card.subscription}</div>
            <div class="price">$ ${activeSubscription == true ? card.anually : card.monthly}</div>
            <div class="cardContent">
                <div class="storage">${card.storage} Storage</div>
                <div class="users">${card.users} Users Allowed</div>
                <div class="limit">Send up to ${card.limit} GB</div>
            </div>
            <button class="learnMoreBtn">Learn more</button>
        </div>
    `
    )
))
