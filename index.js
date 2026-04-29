
function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
const success = document.querySelector('.modal__overlay--success');
loading.cLassList += " modal__overlay--visible";
   emailjs.
    sendForm(
    'service_2ctgnmr', 
'template_kwdb8wo',
event.target,
'YBRl1eTUb3QtZzYrq'
  ) 
.then(() => {
   loading.classList.remove("modal__overlay--visible");
   success.classList += " modal__overlay--visible";
}).catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert(
        "The email service is temporarily unabilable. Please contact me"
    );
})
}
let isModalOpen = false;

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal__open");
  }
  isModalOpen = true;
  document.body.classList += " modal__open";
}