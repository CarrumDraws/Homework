import { useState, useEffect } from "react";

import { EntryType } from "./types/EntryType";

interface InformationTableProps {
  entries: EntryType[];
}

export default function InformationTable({ entries }: InformationTableProps) {
  const [sorted, setSorted] = useState<EntryType[]>([]);

  useEffect(() => {
    const newArr: EntryType[] = [...entries].sort((a, b) =>
      a.lastname.localeCompare(b.lastname)
    );
    setSorted(newArr);
  }, [entries]);

  return (
    <table className="informationTable">
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {sorted.map((entry) => {
          return (
            <tr key={entry.firstname + entry.lastname}>
              <td>{entry.firstname}</td>
              <td>{entry.lastname}</td>
              <td>{entry.number}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
