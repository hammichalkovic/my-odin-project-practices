import './styles.css';
import {toLoadDefault, toLoadHome} from './home.js';
import {toLoadMenu} from './menu.js';
import { toLoadContacts } from './contacts.js';

const homeBtn = document.getElementById('home_btn'),
      menuBtn = document.getElementById('menu_btn'),
      contactsBtn = document.getElementById('contacts_btn');

toLoadDefault();
toLoadHome();

homeBtn.addEventListener('click', toLoadHome);
menuBtn.addEventListener('click', toLoadMenu);
contactsBtn.addEventListener('click', toLoadContacts);

