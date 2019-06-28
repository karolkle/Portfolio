import React from 'react'
import Navigation from '../../components/Navigation'
//import {Form, FormGroup, Input, Label, Button} from 'reactstrap'

class Kontakt extends React.Component{
    render(){
        return(
            <>
            <Navigation />
            <h2>Strona w budowie</h2>
            </>
        )
    }
}
    /*constructor(){
        super()

        this.state={
            name: '',
            email: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    async handleSubmit(e){
        e.preventDefault()
        const {name, email, message} = this.state
        const form = await axios.post('/api/form,', {
           name,
           email,
           message 
        })
    }


    render(){
        return(
            <>
            <Navigation />
            <Form onSubmit={this.handleSubmit} style={{width: '600px'}}>
                <FormGroup>
                    <Label for="name">Imię</Label>
                    <Input
                        type="text"
                        name="name"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="emal">Email</Label>
                    <Input
                        type="emal"
                        name="emal"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="message">Wiadomość</Label>
                    <Input
                        type="textarea"
                        name="message"
                        onChange={this.handleChange} />
                </FormGroup>
                <Button>Wyślij</Button>
            </Form>
            </>
        )
    }
}*/

export default Kontakt