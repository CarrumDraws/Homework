import { useRef } from "react";

import { EntryType } from "./types/EntryType";

interface PhoneBookFormProps {
  addEntryToPhoneBook(input: EntryType): void;
}

export default function PhoneBookForm({
  addEntryToPhoneBook,
}: PhoneBookFormProps) {
  const refOne = useRef<HTMLInputElement>(null);
  const refTwo = useRef<HTMLInputElement>(null);
  const refThree = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const first = refOne.current?.value;
    const last = refTwo.current?.value;
    const number = refThree.current?.value;
    if (!first || !last || !number) alert("Invalid Input!");
    else {
      addEntryToPhoneBook({
        firstname: first,
        lastname: last,
        number: Number(number),
      });
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>First name:</label>

      <input name="userFirstname" type="text" ref={refOne} />

      <label>Last name:</label>

      <input name="userLastname" type="text" ref={refTwo} />

      <label>Phone:</label>

      <input name="userPhone" type="number" ref={refThree} />

      <input type="submit" value="Add User" />
    </form>
  );
}
