document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    console.info('DOM loaded');
  }

//Create logic
const createBergBtn = document.getElementById('create-form');

if (createBergBtn) {
  
  createBergBtn.addEventListener('submit', (e) => {
    e.preventDefault();

    
    const newBerg = {
      name: document.getElementById('name').value.trim(),
    };

    fetch('/api/burgers', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(newBerg),
    }).then(() => {
      // Empty the form
      document.getElementById('name').value = '';

      console.log('You must eat this new Berg!!!');
      location.reload();
    });
  });
}

//Update logic
const eatMehBtn = document.querySelectorAll('.getAte');

if(eatMehBtn) {
    eatMehBtn.forEach((button) => {
        button.addEventListener('click', (e) => {
         
          const id = e.target.getAttribute('data-id');
  
          fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
          }).then((response) => {
            
            if (response.ok) {
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
}
});