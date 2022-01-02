import { ContactsTable } from "../contacts-table/ContactsTable";
import { makeStyles } from "@material-ui/styles";
import { Contact } from "../api";
import { FilterValues } from "../filter/values";
import { FilterForm } from "../filter/FilterForm";
import { Header } from "../layout/Header";
import { DefaultCard } from "../contact-card/DefaultCard";
import { Card } from "../contact-card/Card";
import { AsyncResult } from "../common/types";
import { Async } from "../common/Async";

interface Props {
  cities: string[];
  selectedContact?: AsyncResult<Contact>;
  contacts: Contact[];
  onContactSelected: (contact: Contact) => void;
  onFilterSubmit: (values: FilterValues) => void;
}

export function Home({
  cities,
  selectedContact,
  contacts,
  onFilterSubmit,
  onContactSelected,
}: Props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <FilterForm
          cities={cities}
          onSubmit={onFilterSubmit}
          className={classes.filterForm}
        />
        <Header className={classes.header} />
      </div>
      <div className={classes.row}>
        <ContactsTable
          contacts={contacts}
          onContactSelected={onContactSelected}
          className={classes.contactsTable}
        />
        <div className={classes.cardColumn}>
          {selectedContact ? (
            <Async
              loading={selectedContact.loading}
              error={selectedContact.error}
            >
              <Card
                contact={selectedContact.data!}
                className={classes.contactCard}
              />
            </Async>
          ) : (
            <DefaultCard className={classes.contactCard} />
          )}
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  filterForm: {
    width: "70%",
  },
  header: {
    width: "30%",
  },
  contactsTable: {
    width: "70%",
  },
  cardColumn: {
    display: "flex",
    position: "relative",
    width: "30%",
  },
  contactCard: {
    width: "100%",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    flex: "1 1 auto",
  },
});
