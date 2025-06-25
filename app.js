import express from 'express';

import { PORT } from './config/env.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Subscription tracker api');
});

app.listen(PORT, () => {
    console.log(`sub track api running on http://localhost:${PORT}`);
});

export default app;
