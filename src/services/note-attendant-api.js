export function postNote(note) {
  return fetch(`${process.env.API_URL}/api/v1/notes`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(note)
  })
    .then(res => res.json());
}

export function getNotes() {
  return fetch(`${process.env.API_URL}/api/v1/notes`)
    .then(res => res.json());
}
