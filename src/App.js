import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
            height="100vh"
            projectID="29dc835c-1e52-4c3f-98ea-85052c2de72a"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />}
        />
    );
}

export default App;