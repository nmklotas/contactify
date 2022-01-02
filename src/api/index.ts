export interface Contact {
  id: string;
  name: string;
  surname: string;
  city: string;
  email: string;
  phone: string;
  isActive: boolean;
}

export async function contacts(): Promise<Contact[]> {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/contacts`);
  return await res.json();
}

export async function contact(id: string): Promise<Contact> {
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/api/contacts/${id}`
  );
  return await res.json();
}
