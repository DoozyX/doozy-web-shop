export default {
  enabled: true,
  webhookUrl: '/stripe/webhook',
  publicKey: 'pk_test_hG10sgzpJX3NjSUMM3QpIHaW',
  // Default Stripe product object
  product: {
    name: 'Magic number',
    type: 'service'
  },
  // Default Stripe plan object
  plan: {
    id: 'basic',
    nickname: 'Basic Plan',
    amount: 1000,
    interval: 'month',
    currency: 'usd'
  }
};
