export const ContactList = ({ contacts, filter }) => {
  return (
    <>
      <ul className="contacts">
        {contacts.map(contact =>
          contact.name.toLowerCase().includes(filter) ? (
            <li key={contact.id}>
              <span className="contacts-name">{contact.name}:</span>
              <span className="contacts-number">{contact.number}</span>
            </li>
          ) : null
        )}
      </ul>
    </>
  );
};
