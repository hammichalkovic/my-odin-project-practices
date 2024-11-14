export const toLoadContacts = () => {

    if (content.children.length > 1) {
        content.removeChild(content.lastElementChild);
    }

    const contacts = document.createElement('div'),
          contactsHeader = document.createElement('h2'),
          contactsName = document.createElement('h3'),
          contactsPhone = document.createElement('a'),
          contactsEmail = document.createElement('a');

          contacts.setAttribute('id', 'contacts_card');
          contactsName.setAttribute('id', 'bean_lord');
          contactsPhone.setAttribute('href', 'tel:+');
          contactsEmail.setAttribute('href', 'mailto:');

          contactsHeader.textContent = 'Contacts';
          contactsName.textContent = 'Chef-the-Bean-Lord';
          contactsPhone.textContent = '111-111-1111';
          contactsEmail.textContent = 'thebeanlord@beanmail.com';

        content.appendChild(contacts);
        contacts.appendChild(contactsHeader);
        contacts.appendChild(contactsName);
        contacts.appendChild(contactsPhone);
        contacts.appendChild(contactsEmail);
}