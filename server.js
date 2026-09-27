const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/ai-chat', (req, res) => {
  const message = String(req.body.message || '').trim();
  if (!message) return res.status(400).json({ error: 'اكتب رسالتك أولاً.' });
  const text = message.toLowerCase();
  let answer = 'أستطيع مساعدتك في موازنة المعادلات، شرح المركبات، وطرق الاستخلاص. اكتب معادلة مثل: CH4 + O2 -> CO2 + H2O.';
  if (text.includes('مواز') || text.includes('معادلة') || text.includes('balance')) answer = 'اكتب المعادلة في صفحة الموازنة بصيغ العناصر الإنجليزية، مثل H2 + O2 -> H2O، ثم اضغط «وازن المعادلة». سأوضح المعاملات والخطوات.';
  else if (text.includes('استخلاص')) answer = 'من طرق الاستخلاص: الترشيح لفصل الصلب غير الذائب، والتقطير لفصل السوائل، والتبلور لتنقية المواد الصلبة، والاستخلاص بالمذيب حسب الذوبانية.';
  else if (text.includes('كلية') || text.includes('نجوى')) answer = 'مرحبًا بك في قسم الكيمياء تحت رعاية الدكتورة نجوى حسين. يمكنك اختيار كلية علوم الأقصر أو قنا أو أسوان من الصفحة الرئيسية.';
  res.json({ answer });
});
app.post('/api/ai-help', (req, res) => res.json({ answer: 'انتقل إلى صفحة المساعد للتحدث معي وطرح أسئلتك الكيميائية.' }));
app.get('*', (_, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.listen(PORT, () => console.log(`Chem Balance running at http://localhost:${PORT}`));
