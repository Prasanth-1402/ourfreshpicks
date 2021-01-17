const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51I6yWmGAwh0uRQFn337V0Rn7d4JimqOsBZoljUp2RnyQruGCI4hI8ejkZfmaghnH7gStF7Ua1hmnKvbIzdsrPo2Y00JhjP1alH'
);

// API

// App congfiguration
const app = express();

// middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API Routes
app.get('/', (request, response) => response.send('Hello World!'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  console.log('Payment request received for ', total / 100, '!');
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'INR',
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//listener
exports.api = functions.https.onRequest(app);
