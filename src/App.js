import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Need from './pages/Need.jsx';
import Solution from './pages/Solution.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import Impact from './pages/Impact.jsx';
import Roadmap from './pages/Roadmap.jsx';
import Team from './pages/Team.jsx';
import JoinUs from './pages/JoinUs.jsx';
import Updates from './pages/Updates.jsx';

import  './index.css';

const HomeComp = Home;
const AboutComp = About;
const NeedComp = Need;
const SolutionComp = Solution;
const HowItWorksComp = HowItWorks;
const ImpactComp = Impact;
const RoadmapComp = Roadmap;
const TeamComp = Team;
const JoinUsComp = JoinUs;
const UpdatesComp = Updates;

const safeIsValidElementType = (comp) => {
  try {
    if (React && typeof React.isValidElementType === 'function') {
      return React.isValidElementType(comp);
    }
  } catch (e) {
  }
  if (!comp) return false;
  if (typeof comp === 'function') return true;
  if (typeof comp === 'object') {
    if (Object.keys(comp).length > 0) return true;
    if (comp.$$typeof) return true;
  }
  return false;
}

const checks = [
  ['Home', HomeComp, './pages/Home.jsx'],
  ['About', AboutComp, './pages/About.jsx'],
  ['Need', NeedComp, './pages/Need.jsx'],
  ['Solution', SolutionComp, './pages/Solution.jsx'],
  ['HowItWorks', HowItWorksComp, './pages/HowItWorks.jsx'],
  ['Impact', ImpactComp, './pages/Impact.jsx'],
  ['Roadmap', RoadmapComp, './pages/Roadmap.jsx'],
  ['Team', TeamComp, './pages/Team.jsx'],
  ['JoinUs', JoinUsComp, './pages/JoinUs.jsx'],
  ['Updates', UpdatesComp, './pages/Updates.jsx'],
];

checks.forEach(([name, comp, path]) => {
  console.log(`${name} import:`, { typeof: typeof comp, name: comp && comp.name, keys: comp && typeof comp === 'object' ? Object.keys(comp) : null, value: comp });
  if (!safeIsValidElementType(comp)) {
    console.error(`${name} import appears invalid. Inspect ${path} — did you export default ${name}?`, comp);
    throw new Error(`${name} import is invalid. Check export in ${path} (default vs named).`);
  }
});

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-amber-50 relative overflow-x-hidden">
        <Header />

        <main className="pt-24"> 
          <Routes>
            <Route path="/" element={<HomeComp />} />
            <Route path="/about" element={<AboutComp />} />
            <Route path="/need" element={<NeedComp />} />
            <Route path="/solution" element={<SolutionComp />} />
            <Route path="/how-it-works" element={<HowItWorksComp />} />
            <Route path="/impact" element={<ImpactComp />} />
            <Route path="/roadmap" element={<RoadmapComp />} />
            <Route path="/team" element={<TeamComp />} />
            <Route path="/join-us" element={<JoinUsComp />} />
            <Route path="/updates" element={<UpdatesComp />} />
          </Routes>
        </main>

        <Footer />

        <style jsx global>{`
          /* Add global styles or font imports here */
          @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');
          .font-handwriting {
            font-family: 'Caveat', cursive;
          }
        `}</style>
      </div>
    </Router>
  );
};

export default App;
