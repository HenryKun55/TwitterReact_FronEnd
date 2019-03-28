import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import {Images} from "../config/images";
import api from "../../services/adonis/api";
import { login } from "../../services/adonis/auth";

import { subscribeToTimer } from '../../services/socket/api';

import { Form, Container } from "./styles";

class SignIn extends Component {
  
  state = {
    email: "",
    password: "",
    error: "",
    timestamp: ""
  };

  constructor(props) {
    super(props);
    subscribeToTimer( timestamp => this.setState({ 
      timestamp 
    }));
  }

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/authenticate", { email, password });
        login(response.data.token);
        this.props.history.push("/home");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>
          <p>{this.state.timestamp}</p>
          <img src={Images.twitter} alt="Airbnb logo" />
          {this.state.error && (<p>{this.state.error}</p>)}
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Entrar</button>
          <hr />
          <Link to="/signup">Criar conta grátis</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignIn);