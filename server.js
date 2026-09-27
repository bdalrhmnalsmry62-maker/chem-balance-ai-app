const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/ai-help', (req, res) => {
  const question = String(req.body.question || '').trim();
  if (!question) return res.status(400).json({ error: 'اكتب سؤالك أولاً.' });
  // نقطة التكامل: ضع مفتاح مزود الذكاء الاصطناعي في الخادم لاحقاً، ولا تضعه في الواجهة.
  res.json({ answer: `المساعد المحلي: ${question}\n\nابدأ بكتابة المعادلة بصيغة مثل: H2 + O2 -> H2O، ثم اضغط «وازن المعادلة».` });
});

app.get('*', (_, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.listen(PORT, () => console.log(`Chem Balance running at http://localhost:${PORT}`));
