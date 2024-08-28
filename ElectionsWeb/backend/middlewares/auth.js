const jwt = require('jsonwebtoken');

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "tegthtyh3c25d5a5ddfdfd"); // فك تشفير التوكن باستخدام المفتاح السري
    req.user = decoded; // تخزين بيانات المستخدم المفكك في req.user
    next(); // الانتقال إلى الـ middleware التالي
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      // إذا كانت صلاحية التوكن منتهية
      return res.status(401).json({ error: "انتهت صلاحية الجلسة، يرجى تسجيل الدخول مرة أخرى." });
    }
    return res.status(403).json({ error: "Invalid token" });
  }
  
};

module.exports = {
  verifyToken,
};
