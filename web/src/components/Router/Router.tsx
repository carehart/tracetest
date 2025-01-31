import Envs from 'pages/Environments';
import Home from 'pages/Home';
import RunDetail from 'pages/RunDetail';
import Test from 'pages/Test';
import Transaction from 'pages/Transaction';
import TransactionRunDetail from 'pages/TransactionRunDetail';
import {Navigate, Route, Routes} from 'react-router-dom';
import {HistoryRouter} from 'redux-first-history/rr6';
import {history} from 'redux/store';
import Env from 'utils/Env';
import ExperimentalFeature from 'utils/ExperimentalFeature';

const serverPathPrefix = Env.get('serverPathPrefix');
const isTransactionsFeatureEnabled = ExperimentalFeature.isEnabled('transactions');

const Router = () => (
  <HistoryRouter history={history} basename={serverPathPrefix}>
    <Routes>
      <Route path="/" element={<Home />} />

      {isTransactionsFeatureEnabled && <Route path="/environments" element={<Envs />} />}

      <Route path="/test/:testId" element={<Test />} />

      <Route path="/test/:testId/run/:runId" element={<RunDetail />}>
        <Route path=":mode" element={<RunDetail />} />
      </Route>

      {isTransactionsFeatureEnabled && <Route path="/transaction/:transactionId" element={<Transaction />} />}
      {isTransactionsFeatureEnabled && (
        <Route path="/transaction/:transactionId/run/:runId" element={<TransactionRunDetail />} />
      )}

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </HistoryRouter>
);

export default Router;
