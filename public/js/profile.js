const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#adoptable-name').value.trim();
  const needed_funding = document.querySelector('#adoptable-funding').value.trim();
  const description = document.querySelector('#adoptable-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/adoptable`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to post adoption');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/adoptable/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to post adoption');
    }
  }
};

document
  .querySelector('.new-animal-form');
document
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.animal-list')
  .addEventListener('click', delButtonHandler);
