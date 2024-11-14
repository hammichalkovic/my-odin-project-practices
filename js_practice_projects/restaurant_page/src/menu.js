export const toLoadMenu = () => {
    if (content.children.length > 1) {
        content.removeChild(content.lastElementChild);
    }


    const menu = document.createElement('div'),
          menuHeader = document.createElement('h2'),
          meditBox = document.createElement('div'),
          navyBox = document.createElement('div'),
          pumpkinBox = document.createElement('div'),
          meditName = document.createElement('h3'),
          navyName = document.createElement('h3'),
          pumpkinName = document.createElement('h3'),
          meditPrice = document.createElement('p'),
          navyPrice = document.createElement('p'),
          pumpkinPrice = document.createElement('p');

          menu.setAttribute('id', 'menu'),
          meditBox.setAttribute('id', 'mediterranean');
          navyBox.setAttribute('id', 'navy');
          pumpkinBox.setAttribute('id', 'pumpkin');
          meditBox.classList.add('menu__item');
          navyBox.classList.add('menu__item');
          pumpkinBox.classList.add('menu__item');
          meditName.textContent = 'Mediterranean White Bean Soup';
          navyName.textContent = 'Classic Navy Bean Soup';
          pumpkinName.textContent = 'Pumpkin & Black Bean Soup';
          meditPrice.textContent = '100 $';
          navyPrice.textContent = '500 $';
          pumpkinPrice.textContent = '1000 $';

          content.appendChild(menu),
          menu.appendChild(meditBox);
          meditBox.appendChild(meditName);
          meditBox.appendChild(meditPrice);
          menu.appendChild(navyBox);
          navyBox.appendChild(navyName);
          navyBox.appendChild(navyPrice);
          menu.appendChild(pumpkinBox);
          pumpkinBox.appendChild(pumpkinName);
          pumpkinBox.appendChild(pumpkinPrice);


}