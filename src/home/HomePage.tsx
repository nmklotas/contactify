import { Home } from "./Home";
import { cities, useContactsStore } from "./contacts-store";
import { contacts as apiContacts, contact as apiContact } from "../api";
import { useEffect } from "react";
import { Async } from "../common/Async";

export function HomePage() {
  const store = useContactsStore();
  useEffect(() => {
    store.load(apiContacts);
  }, []);

  return (
    <Async loading={store.loading} error={store.error}>
      <Home
        cities={cities(store.contacts)}
        selectedContact={
          store.selectedContact && {
            loading: store.contactLoading,
            error: store.contactError,
            data: store.selectedContact,
          }
        }
        contacts={store.filteredContacts}
        onContactSelected={(c) => store.loadContact(c.id, apiContact)}
        onFilterSubmit={store.filterContacts}
      />
    </Async>
  );
}
