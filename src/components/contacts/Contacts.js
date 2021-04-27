import React from 'react';
import { useSelector} from 'react-redux';
import { Contact } from './Contact';

export const Contacts = () => {

    const contacts = useSelector(state => state.contact.contacts);
    console.log(contacts);
    return (
        <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                { 
                  contacts.map((contact) => (
                    <Contact contact = {contact} key={contact.id} />
                  ))  
                }
              </tbody>
            </table>
        </div>
    )
}
