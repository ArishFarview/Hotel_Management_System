// HotelDetails.jsx - Displays hotel details cards
import React from 'react';

// MOCK_HOTELS is a placeholder for hotel data; replace with real data from backend in production
const MOCK_HOTELS = [
  {
    id: 1,
    name: 'Taj Santacruz, Mumbai',
    location: 'Vile Parle | 3 minutes walk to T1 - Chhatrapati Shivaji International Airport',
    rating: 4.4,
    ratingsCount: 1296,
    price: 28500,
    taxes: 5130,
    nights: 2,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    features: ['Free Cancellation', 'Book @ ₹0 available', 'Breakfast available at extra charges', 'Get a Taj Gift Card worth at least INR 500 for F&B & Spa'],
    tags: ['Spa', 'Swimming Pool'],
    package: 'ELITE PACKAGE',
    packageDesc: 'Enjoy exclusive benefits at a discounted price in an Elite Package deal',
    loginText: 'Login now & save more',
  },
];

// Helper function to format dates for display
const defaultFormatDate = (date) => {
  if (!date) return '';
  const d = new Date(date);
  const day = d.getDate();
  const month = d.toLocaleString('default', { month: 'short' });
  const year = d.getFullYear().toString().substr(-2);
  return `${day} ${month} '${year}`;
};

const HotelDetails = ({
  location = '',
  checkIn = new Date(),
  checkOut = new Date(),
  guestInfo = { adults: 0, children: 0, rooms: 0 },
  formatDate
}) => {
  // Use provided formatDate or fallback to default
  const safeFormatDate = typeof formatDate === 'function' ? formatDate : defaultFormatDate;

  return (
    <div className="hotel-listings-section">
      {/* Sort bar for hotel listings */}
      <div className="hotel-listings-sortbar">
        <span>Sort By:</span>
        <button className="sort-btn active">Most Popular</button>
        <button className="sort-btn">Price - Low to High</button>
        <button className="sort-btn">Price - High to Low</button>
        <button className="sort-btn">Goibibo Reviews - Highest First</button>
        <input className="hotel-listings-searchbar" placeholder="Search Location or Property Name" />
      </div>
      <div className="hotel-listings-main">
        {/* Sidebar with filter options */}
        <div className="hotel-listings-sidebar">
          <div className="sidebar-title">Filters</div>
          <div className="sidebar-filter"><input type="checkbox" /> goStays</div>
          <div className="sidebar-filter"><input type="checkbox" /> Book @ ₹0</div>
          <div className="sidebar-filter"><input type="checkbox" /> Flexible Check In</div>
          <div className="sidebar-filter"><input type="checkbox" /> Daily Steal Deal</div>
          <div className="sidebar-filter"><input type="checkbox" /> Early Bird Deal</div>
          <div className="sidebar-filter"><input type="checkbox" /> Couple Friendly</div>
          <div className="sidebar-filter"><input type="checkbox" /> Free Cancellation</div>
          <div className="sidebar-filter"><input type="checkbox" /> Free Breakfast</div>
          <div className="sidebar-filter"><input type="checkbox" /> Pay At Hotel</div>
          <div className="sidebar-filter"><input type="checkbox" /> Flexible Check In (6AM to 6PM)</div>
        </div>
        {/* Main content area for hotel cards */}
        <div className="hotel-listings-content">
          <div className="hotel-listings-title">Most Booked by Travellers like you</div>
          {/* Render each hotel card */}
          {MOCK_HOTELS.map(hotel => (
            <div className="hotel-card" key={hotel.id}>
              {/* Hotel image and thumbnails */}
              <div className="hotel-card-img-col">
                <img src={hotel.image} alt={hotel.name} className="hotel-card-img" />
                <div className="hotel-card-thumbs">
                  <img src={hotel.image} alt="thumb1" className="hotel-card-thumb" />
                  <img src={hotel.image} alt="thumb2" className="hotel-card-thumb" />
                  <img src={hotel.image} alt="thumb3" className="hotel-card-thumb" />
                  <button className="hotel-card-thumb-viewall">VIEW ALL</button>
                </div>
              </div>
              {/* Main hotel details */}
              <div className="hotel-card-main-col">
                <div className="hotel-card-header">
                  <span className="hotel-card-star">5★ · Hotel</span>
                  <span className="hotel-card-ratings">{hotel.ratingsCount} Ratings</span>
                  <span className="hotel-card-rating-badge">{hotel.rating}/5</span>
                </div>
                <div className="hotel-card-title">{hotel.name}</div>
                <div className="hotel-card-location">{hotel.location}</div>
                {/* Hotel tags (e.g., Spa, Swimming Pool) */}
                <div className="hotel-card-tags">
                  {hotel.tags.map(tag => <span className="hotel-card-tag" key={tag}>{tag}</span>)}
                </div>
                {/* List of hotel features */}
                <ul className="hotel-card-features">
                  {hotel.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                {/* Package information */}
                <div className="hotel-card-package">
                  <span className="hotel-card-package-badge">{hotel.package}</span>
                  <span className="hotel-card-package-desc">{hotel.packageDesc}</span>
                </div>
              </div>
              {/* Price and login link */}
              <div className="hotel-card-price-col">
                <div className="hotel-card-price">₹{hotel.price.toLocaleString()}</div>
                <div className="hotel-card-taxes">+₹{hotel.taxes.toLocaleString()} taxes & fees<br />for 2 rooms per night</div>
                <div className="hotel-card-login-link">{hotel.loginText}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelDetails; 