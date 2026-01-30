
  
  setTimeout(() => {
    const grid = document.getElementById("shopGrid");

    grid.innerHTML = `
      ${generateShopCard("Raju's Spices", "Spices & Masalas", "4.8", "3.2 km")}
      ${generateShopCard("Kiran's Fashion", "Clothing Store", "4.6", "2.1 km")}
      ${generateShopCard("Kumar Mobiles", "Electronics", "4.5", "1.8 km")}
      ${generateShopCard("Fresh Mart", "Groceries", "4.7", "2.9 km")}
    `;
  }, 1500);

  function generateShopCard(name, category, rating, distance) {
    return `
      <div class="shop-card">
        <div class="shop-image">
          <img src="https://picsum.photos/400/300?random=${Math.random()}">
          <span class="badge">✔ Verified Local Hero</span>
        </div>
        <div class="shop-info">
          <h3>${name}</h3>
          <p>${category}</p>
          <span class="rating">⭐ ${rating} · ${distance}</span>
          <div class="shop-actions">
            <a href="tel:9876543210" class="btn call">📞 Call</a>
            <a href="https://maps.google.com" class="btn direction">📍 Directions</a>
          </div>
        </div>
      </div>
    `;
  }

  (function(){
    $('#msbo').on('click', function(){
      $('body').toggleClass('msb-x');
    });
  }());