import './App.css';
import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import About from './About/About';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className='site'>
                <Header />
                <div className="container">
                    <main>
                        <Router>
                            <Switch>
                                <Route exact path="/" component={Rate} />
                                <Route exact path="/about" component={About} />
                            </Switch>
                        </Router>
                    </main>
                </div>

                <div className="container" id='cookie_info'>
                    <div className="site-content">
                        <div className="well">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi consequuntur sequi eaque.<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, a hic ad quas reiciendis incidunt veniam natus tempore.&nbsp;<button className="btn btn-primary btn-sm">OK</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}


export default App;
