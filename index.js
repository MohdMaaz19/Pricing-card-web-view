document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle');
    const priceMonthly = document.querySelectorAll('.price-monthly');
    const priceAnnually = document.querySelectorAll('.price-annually');
    
    const togglePrices = () => {
      if (toggle.checked) {
        priceMonthly.forEach(price => price.style.display = 'flex');
        priceAnnually.forEach(price => price.style.display = 'none');
      } else {
        priceMonthly.forEach(price => price.style.display = 'none');
        priceAnnually.forEach(price => price.style.display = 'flex');
      }
    };
  
    togglePrices();
  
    toggle.addEventListener('change', togglePrices);
  });
