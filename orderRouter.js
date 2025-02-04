const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.orderCover = async (req, res) => {
  try {
    const { email, coverUrl } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [{ price_data: { currency: "usd", product_data: { name: "Custom Book Cover", images: [coverUrl] }, unit_amount: 1500 }, quantity: 1 }],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ checkoutUrl: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing order.");
  }
};
