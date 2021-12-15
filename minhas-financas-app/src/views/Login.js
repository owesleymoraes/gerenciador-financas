import React from 'react';
import Card from '../components/Card';
import Form from '../components/Form';



class Login extends React.Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                            <div className="bs-docs-section">
                                <Card title="Login">

                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="bs-component">
                                                <Form />
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>

                </div>
            </>

        )
    }


}

export default Login;

