
// const express = require('express');
// require('dotenv').config();
// const db = require('./config/db'); // استيراد الاتصال بقاعدة البيانات

// const app = express();
// app.use(express.json());

// const listRoutes = require('./routes/listRoutes');
// app.use('/api', listRoutes);



// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const db = require('./config/db'); // استيراد الاتصال بقاعدة البيانات
require('dotenv').config();
const cors = require('cors');
const listController = require('./controllers/listController'); // تأكد من أنك قد أنشأت هذا الملف
const candiController = require('./controllers/candiController'); // تأكد من أنك قد أنشأت هذا الملف
const userRoutes = require('./routes/userRoutes');
const partyRoutes = require('./routes/partyRoutes');

const listRoutes = require('./routes/listRoutes');
const app = express();
const PORT = 3001;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);app.use(express.json());

// Chat Routes
const ChatRoutes = require('./routes/ChatRoutes');
app.use('/api', ChatRoutes);


// Chat Routes
const AdsRoutes = require('./routes/AdsRoutes');
app.use('/api', AdsRoutes);


// Register router
const register_router = require(".//routes/register_router");
app.use("/db/vs", register_router);

// circles 
const circlesRoutes = require('.//routes/circlesRoutes');
app.use('/api/circles', circlesRoutes);


//localLists 
const localListsRoutes = require('.//routes/localListsRoutes');
app.use('/api/local-lists', localListsRoutes); // Correct path for local lists


//partyLists
const partyListsRoutes = require('.//routes/partyListsRoutes');
app.use('/api/party-lists', partyListsRoutes);

//Mohammad

const circleRoutes = require("./routes/resultsCircleRoutes");
const localListRoutes = require("./routes/resultsLocalListRoutes");
const PartyListRoute = require("./routes/resultsPartyListRoutes");
const LocalListCandidatesRoutes = require("./routes/resultsLocalListCandidateRoutes");

app.use("/api", PartyListRoute);
app.use("/apii", circleRoutes);
app.use("/apii", localListRoutes);
app.use("/apii", LocalListCandidatesRoutes);



//users fro local lists
const usersRouter = require('.//routes/usersRoutes');
app.use('/api/users', usersRouter);

const candidateRoutes = require('.//routes/candiRoutes');
app.use('/api', candidateRoutes); // Register the routes







// Routes
// app.use('/api', listRoutes);
app.post('/api/lists', listController.createList);
app.get('/api/lists', listController.getLists);
app.put('/api/lists', listController.updateList);
app.delete('/api/lists', listController.deleteList);


// Register router
const Count_down = require("./routes/CountdownRoutes");
app.use("/api", Count_down);
// تحقق
const protectedRoute = require('./routes/protectedRoute');
app.use('/protected', protectedRoute);

//

const overview = require('./routes/overviewRoutes');
app.use('/api', overview);


// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});




