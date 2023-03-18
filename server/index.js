const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "style-src 'self' 'unsafe-inline'");
  next();
});



app.use(cors());

app.post('/create-checkout-session', async (req, res) => {
    console.log('entre')
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Producto de ejemplo',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://localhost:5173/',
    cancel_url: 'https://localhost:5173/magazine',
  });

  res.json({ id: session.id });
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});