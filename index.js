//template_j6j387c
//service_2ctgnmr
//YBRl1eTUb3QtZzYrq

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
const success = document.querySelector('.modal__overlay--success');
loading.classlist += " modal__overlay--visible";
   emailjs
    sendForm(
    'service_2ctgnmr', 
'template_j6j387c',
event.target,
'YBRl1eTUb3QtZzYrq'
  ) 
.then(() => {
   loading.classlist.remove("modal__overlay--visible");
   success.classlist += " modal__overlay--visible";
}).catch(() => {
    loading.classlist.remove("modal__overlay--visible");
    alert(
        "The email service is temporarily unabilable. Please contact me"
    );
})
}

let isModalOpen = false;
function toggleModal() {
    isModalOpen = !isModalOpen;
    if (isModalOpen) {
        return document.body.classlist.remove("modal--open");
    }
    document.body.classlist += " modal-open";

}