export async function sendNewContact(
  name: string,
  email: string,
  phone: string,
  message: string
) {
  const res = await fetch('/api/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email,phone, message }),
  });
  if (res.ok) {
    return res.json();
  }
  throw new Error('Error sending email');
}
