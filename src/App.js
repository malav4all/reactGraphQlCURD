import './App.css';
import User from './components/User';
import {client,ApolloProvider} from './apolloClient/apolloClient'
import Form from './components/form';
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Form/>
        <User/>
      </ApolloProvider> 
    </>
  );
}

export default App;
