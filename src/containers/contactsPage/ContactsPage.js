import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [check, setCheck] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
 if(!check){
  addContact(name, phone, email);
  setName("");
  setEmail("");
  setPhone("");
 }
  };

  useEffect(() => {
    const nameIsDuplicate = () => {
      const found = contacts.find((contact) => contact.name === name);
      if (found !== undefined) {
        return true;
      }
      return false;
    }; 

    if (nameIsDuplicate()) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [name, contacts, check]);

  return (
    <div>
      <section>
        <h2>Add Contact {check ? " - Already exists" : ""}</h2> 
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
