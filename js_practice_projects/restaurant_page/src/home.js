export const toLoadDefault = () => {
    
    const content = document.getElementById('content'),
        logo = document.createElement('div'),
        beanHeader = document.createElement('h1'),
        motto = document.createElement('p');

        logo.setAttribute('id', 'logo');
        motto.setAttribute('class', 'motto');
        beanHeader.textContent = 'Bean soup cafe';
        motto.textContent = 'Here is the best bean soups, you could ever try!';
        
        content.appendChild(logo);
        logo.appendChild(beanHeader);
        logo.appendChild(motto);

};   

export const toLoadHome = () => {

    if (content.children.length > 1) {
        content.removeChild(content.lastElementChild);
    }

    const home = document.createElement('div'),
          lead = document.createElement('div'),
          aboutUs = document.createElement('h2'),
          leadText = document.createElement('p'),
          hours = document.createElement('div'),
          hoursHeader = document.createElement('h2'),
          sunday = document.createElement('p'),
          monday = document.createElement('p'), 
          tuesday = document.createElement('p'), 
          wednesday = document.createElement('p'), 
          thursday = document.createElement('p'), 
          friday = document.createElement('p'), 
          saturday = document.createElement('p');
          
          aboutUs.textContent = 'About Us';
          leadText.textContent = 'We cook all soups with beans that have even been cooked in the world\'s history: bean soups with beef, chicken, vegan bean soups, bean soups with tomatoes, with potatoes, spicy ones and not, with cow and goat milk and without any milk at all. If you like the bean soups, you\'ll find the best one for you in our cafe!!!';
          hoursHeader.textContent = 'Hours';
          sunday.textContent = 'Sunday: Closed';
          monday.textContent = 'Monday: 8am - 5pm';
          tuesday.textContent = 'Tuesday: 8am - 5pm';
          wednesday.textContent = 'Wednesday: 8am - 5pm';
          thursday.textContent = 'Thursday: 8am - 5pm';
          friday.textContent = 'Friday: 8am - 5pm';
          saturday.textContent = 'Saturday: Closed';

          lead.setAttribute('id', 'lead');
          leadText.setAttribute('id', 'lead__text');
          hours.setAttribute('id', 'hours');

          content.appendChild(home);
          home.appendChild(lead)
          lead.appendChild(aboutUs);
          lead.appendChild(leadText);
          home.appendChild(hours);
          hours.appendChild(hoursHeader);
          hours.appendChild(sunday);
          hours.appendChild(monday);
          hours.appendChild(tuesday);
          hours.appendChild(wednesday);
          hours.appendChild(thursday);
          hours.appendChild(friday);
          hours.appendChild(saturday);
}