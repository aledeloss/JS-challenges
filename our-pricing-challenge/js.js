//Data
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

// First Page Load
window.addEventListener("load", () => {
    renderCards();
  });

//CAMBIO DE SUSCRIPCIÓN
let activeSubscription = false
let price = document.querySelector('.price')

document.querySelector('.switchThing').addEventListener("click", function(){
   activeSubscription = !activeSubscription
    // Clean cards
  cardsContent.innerHTML = "";
    // Re-render cards
  renderCards();
   console.log(activeSubscription)
   return activeSubscription
});


//RENDERIZADO DE TARJETAS
let cardsContent = document.querySelector('.cards') 
let cardsColl = document.querySelector('.card') 

const renderCards = () => {
    info.map((card => (
        cardsContent.innerHTML += `
            <div class="card">
                <div class="subscription">${card.subscription}</div>
                <div class="price"><span class="dollar">&dollar; </span>${activeSubscription == true ? card.anually : card.monthly}</div>
                <ul class="cardContent">
                    <li class="storage">${card.storage} Storage</li>
                    <li class="users">${card.users} Users Allowed</li>
                    <li class="limit">Send up to ${card.limit} GB</li>
                </ul>
                <button class="learnMoreBtn">LEARN MORE</button>
            </div>
        `
    )
    ))
}
