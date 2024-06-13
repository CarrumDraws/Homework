import React, { useState } from "react";

import { EntryType } from "./types/EntryType";

import PhoneBookForm from "./PhoneBookForm";
import InformationTable from "./InformationTable";

// Your goal is to create a simple form at the
// top that allows the user to enter in a first name, last name, and phone number and there should
// be a submit button. Once the submit button is pressed, the information should be displayed in
// a list below (automatically sorted by last name) along with all the previous information that was
// entered. This way the application can function as a simple phone book. When your application
// loads, the input fields (not the phone book list) should be prepopulated with the following
// values already:

// First name = Coder
// Last name = Byte
// Phone = 8885559999

export default function PhoneBook() {
  const [entries, setEntries] = useState<EntryType[]>([
    {
      firstname: "Coder",
      lastname: "Byte",
      number: 8885559999,
    },
  ]);

  const addEntry = (newEntry: EntryType): void => {
    setEntries((prevEntry) => [...prevEntry, newEntry]);
  };

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntry} />
      <InformationTable entries={entries} />
    </section>
  );
}
