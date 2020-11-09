export const getHikes = async() => {
  const res = await fetch('http://localhost:7890/hikes');
  const hikes = await res.json();

  return hikes;
};

export const getHikeDetails = async(id) => {
  const res = await fetch(`http://localhost:7890/hikes/${id}`);
  const details = await res.json();

  return details;
};

export const deleteHike = async(id) => {
  const res = await fetch(`http://localhost:7890/hikes/${id}`, {
    method: 'DELETE',
  });
  const deletedHike = await res.json();

  return deletedHike;
};

export const updateHike = async(id, data) => {
  const res = await fetch(`http://localhost:7890/hikes/${id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  });
  const updatedHike = await res.json();

  return updatedHike;
};

export const addNewHike = async(data) => {
  const res = await fetch('http://localhost:7890/hikes/', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  });
  const newHike = await res.json();

  return newHike;
};
