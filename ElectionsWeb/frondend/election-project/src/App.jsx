import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Log_in from './pages/Auth/Login/sign_up';
import Log_in_new from './pages/Auth/Login/log_in_new';
import Log_in_home from './pages/Auth/Login/log_in_home';
import Update_password from './pages/Auth/Login/update_password';
import Candidates from './pages/Candidates/candidates';
import Home from './pages/Home/home';
import AboutUs from './pages/AboutUs/aboutUs';
import ElectionLists from './pages/ElectionLists/electionLists';
import Results from './pages/Results/results';
import Voting from './pages/Voting/voting';
import LocalRequest from './pages/Requests/LocalRequest';
import CandidatesRequest from './pages/Requests/CandidatesRequest';
import AddList from './pages/Requests/AddList';
import AdsPage from './pages/ADS/ADS';

import Debate_ from './pages/Debate/debate';
import Debate_Room from './pages/Debate/room';
import Debate_screen from './pages/Debate/debate_screen';
import DebatesPage from './pages/Debate/debate_main';
import ContactUs from './pages/ContactUs/contactUs';



import PaymentPage from './pages/Payment/payment';
import Invoice from './pages/Invoice/Invoice';
import ADS_Page from './pages/RequestAds/AdsPage';
import Debate from './pages/RequestAds/Debate';

import AddPartyList from './pages/Requests/AddPartyList';
import './App.css';
import './index.css';
import ElectoralList from './pages/ElectoralList/ElectoralList';
import Circles from './pages/Circles/Circles';
import LocalLists from './pages/LocalLists/LocalLists';
import PartyListsPage from './pages/PartyListsPage/PartyListsPage';


function App() {
  return (
    <Router>
      <Routes>

        {/* <Route path="/" element={<Navigate to="/debate-screen" replace />} /> */}
        {/* <Route path="/" element={<Navigate to="/debate-screen" replace />} /> */}
        <Route path="/debate-screen" element={<Debate_screen />} />
        <Route path="/debate-room/:roomId" element={<Debate_Room />} />
        <Route path="/debate" element={<Debate_ />} />
        <Route path="/debates-main" element={<DebatesPage />} />

        <Route path="/" element={<Home />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/electionLists" element={<ElectionLists />} /> {/*----------------- */}
        <Route path="/results" element={<Results />} />        {/*----------------- */}
        <Route path="/localRequest" element={<LocalRequest />} />
        <Route path="/AddList" element={<AddList />} />
        <Route path="/BuyAds" element={<ADS_Page />} />
        <Route path="/BayDebate" element={<Debate />} />

        {/*----------------- */}
        <Route path="/payment" element={<PaymentPage />} />   {/*----------------- */}
        <Route path="/invoice" element={<Invoice />} />

        <Route path="/voting" element={<Voting />} />   {/*----------------- */}
        <Route path="/localRequest" element={<LocalRequest />} />
        <Route path="/AddList" element={<AddList />} />
        <Route path="/AddPartyList" element={<AddPartyList />} />
        <Route path="/CandidatesRequest" element={<CandidatesRequest />} />


        <Route path="/log-in" element={<Log_in />} />
        <Route path="/log-in-new" element={<Log_in_new />} />
        <Route path="/log-in-home" element={<Log_in_home />} />
        <Route path="/update-pass" element={<Update_password></Update_password>}></Route>

        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>

        <Route path="/electoral" element={<ElectoralList />} />
        <Route path="/circles" element={<Circles />} />
        <Route path="/local-lists" element={<LocalLists />} />
        <Route path="/party-lists" element={<PartyListsPage />} />   {/*----------------- */}


        <Route path="/AdsPage" element={<AdsPage />} />   {/*----------------- */}


      </Routes>
    </Router>
  );
}

export default App;
