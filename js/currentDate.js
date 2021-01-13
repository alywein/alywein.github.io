
const options= {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};

document.getElementById('updateDate').textContent=new Date().toLocaleDateString('en-us', options);

const todaysDate= new Date();