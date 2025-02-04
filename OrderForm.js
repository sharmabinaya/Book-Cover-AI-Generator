import { useState } from "react";
import axios from "axios";

export default function OrderForm({ selectedCover }) {
  const [email, setEmail] = useState("");

  const handleOrder = async () => {
    const response = await axios.post("http://localhost:5000/order", {
      email,
      coverUrl: selectedCover,
    });
    window.location.href = response.data.checkoutUrl;
  };

  return (
    <div>
      <h2>Order Your Printed Cover</h2>
      <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleOrder}>Order Now</button>
    </div>
  );
}
