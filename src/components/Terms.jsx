import React from "react";
import { Link } from "react-router-dom";

const termsData = [
  {
    title: "BINARY",
    links: [
      { name: "Who We Are", path: "/who-we-are" },
      { name: "Join Our Team", path: "/join-our-team" },
      { name: "Terms & Conditions", path: "/terms-conditions" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      
      { name: "Returns & Refunds", path: "/returns-refunds" },
      { name: "Promotions Terms", path: "/promotions-terms" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "Track Your Order", path: "/track-order" },
      { name: "FAQs", path: "/faqs" },
      { name: "Cancellations", path: "/cancellations" },
      { name: "Payments", path: "/payments" },
      { name: "Customer Care", path: "/customer-care" },
      { name: "Redeem Coupon", path: "/redeem" },
    ],
  },
  {
    title: "Shop by",
    links: [
      { name: "Men", path: "/men" },
      { name: "Women", path: "/women" },
      { name: "Kids", path: "/kids" },
      { name: "Store", path: "/store" },
      { name: "New Arrivals", path: "/new" },
      { name: "Collections", path: "/collections" },
    ],
  },
  {
    title: "Follow us",
    links: [
      { name: "Facebook", path: "https://facebook.com" },
      { name: "Instagram", path: "https://instagram.com" },
      { name: "Twitter", path: "https://twitter.com" },
      { name: "Pinterest", path: "https://pinterest.com" },
    ],
  },
];

const Terms = () => {
  return (
    <section className="bg-yellow-700 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-20">
        {termsData.map((section, idx) => (
          <div key={idx}>
            <h3 className="font-bold text-lg mb-4">{section.title}</h3>
            <ul>
              {section.links.map((link, id) => (
                <li key={id} className="mb-2 hover:underline cursor-pointer">
                  {link.path.startsWith("http") ? (
                    <a href={link.path} target="_blank" rel="noopener noreferrer">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.path}>{link.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Terms;
