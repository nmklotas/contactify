import create from "zustand";
import { Contact } from "../api";

interface ContactsState {
  contacts: Contact[];
  filteredContacts: Contact[];
  selectedContact?: Contact;
  load: (contacts: () => Promise<Contact[]>) => Promise<void>;
  loadContact: (
    contactId: string,
    contact: (contactId: string) => Promise<Contact>
  ) => Promise<void>;
  filterContacts: (values: {
    name: string;
    city: string;
    showActive: boolean;
  }) => void;
  loading: boolean;
  contactLoading: boolean;
  contactError?: unknown;
  error?: unknown;
}

export const useContactsStore = create<ContactsState>((set) => ({
  contacts: [],
  filteredContacts: [],
  contactError: undefined,
  contactLoading: false,
  loading: false,
  load: async (contacts) => {
    set({ loading: true });
    try {
      const contactResult = await contacts();
      set({
        contacts: contactResult,
        filteredContacts: contactResult,
        loading: false,
        error: undefined,
      });
    } catch (error) {
      set({ loading: false, error });
    }
  },
  loadContact: async (id, contact) => {
    set({ contactLoading: true });
    try {
      const contactResult = await contact(id);
      set({ selectedContact: contactResult });
      set({
        contactLoading: false,
        contactError: undefined,
      });
    } catch (error) {
      set({ contactLoading: false, contactError: error });
    }
  },
  filterContacts: (values) => {
    set((s) => ({
      ...s,
      filteredContacts: filterContacts(s.contacts, values),
    }));
  },
}));

export function cities(contact: Contact[]) {
  return [...new Set(contact.map((c) => c.city))].sort((c1, c2) =>
    c1.localeCompare(c2)
  );
}

function filterContacts(
  contacts: Contact[],
  values: { name: string; city: string; showActive: boolean }
) {
  return contacts.filter((c) => {
    return (
      (!values.name || c.name.includes(values.name)) &&
      (!values.city || c.city.includes(values.city)) &&
      (!c.isActive || c.isActive !== values.showActive)
    );
  });
}
