const stripe = require('stripe')(import.meta.env.VITE_PUBLIC_STRIPE_SECRET_KEY);

const createCheckoutSession = async (req, res) => {
  const { items, total } = req.body;
  console.log(items, total)

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    })),
    mode: 'payment',
    success_url: 'https://localhost:5173/',
    cancel_url: 'https://localhost:5173/magazine',
  });

  res.json({ id: session.id });
};

module.exports = createCheckoutSession;