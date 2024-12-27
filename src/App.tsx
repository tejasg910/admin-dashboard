import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from '@/layouts/DashboardLayout';
import Dashboard from '@/pages/Dashboard';
import Payout from '@/pages/Payout';
import Inbox from '@/pages/Inbox';
import Settings from '@/pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="payout" element={<Payout />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;