import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Helmet } from 'react-helmet';

import { logout } from "../../services/adonis/auth";

import api from "../../services/adonis/api";

import { posts, post } from '../../services/socket/api';

import Simplert from 'react-simplert';

import { Images } from "../config/images";

import { Container, Tweet } from "./styles";

class Home extends Component {

    state = {
        username: '',
        content: '',
        posts: [],
        error: '',
        alertShow: false
    }

    home(){
        logout()
        this.props.history.push("/")
    }

    async componentDidMount() {
        const response = await api.get('/getUser');
        if(response.data.success){
            const username = response.data.user.username;
            this.setState({username})
        } else {
            this.home()
        }
        
        const tweets = await api.get('/tweets');
        this.setState({posts: tweets.data }) 

        posts( tweet => {
            this.setState({ posts: [tweet, ...this.state.posts] })
        })

    }

    handleLogout = async e => {
        e.preventDefault()
        this.home()
    }

    alert(){
        return (
            <Simplert 
                showSimplert={ this.state.alertShow } 
                title= 'Eita :('
                message= 'Algo de errado não está certo, tenta de novo'
            />
        )
    }

    handlePost = async e => {
        if(e.keyCode === 13 && e.shiftKey === false && e.target.value.match(/[a-z]/i)) {
            const {content} = this.state
            try {
                const response = await api.post('/tweets', {content})
                post(response.data)
                this.setState({content: ''})
            }catch(err){
                this.setState({
                    alertShow: true,
                    error: "Tenta de novo, vou resolver isso agora !"
                })
            }
        }
    }

    handleContent(content){
        this.setState({content, alertShow: false})
    }

    render() {
        return (
            <Container>
                <Helmet>
                    <style>{'body { background-color: grey; margin-top:100px; }'}</style>
                </Helmet>
                {this.alert()}
                <div className="navigation">
                    <a className="button" href="/home" onClick={this.handleLogout}>
                        <img src={Images.logo} alt="user"></img>
                        <div className="logout">{this.state.username}</div>
                    </a>
                </div>
                <Tweet> 
                    <div className="area">
                        <textarea className="text" onChange={ev => this.handleContent(ev.target.value)} maxLength="140" placeholder="O que está acontecendo ?" onKeyDown={this.handlePost} value = {this.state.content} ></textarea>
                    </div>
                </Tweet>
                {this.state.posts.map( (data, i) => {
                    return(
                        <Tweet key={i}>
                        <div className="tweet" >

                            <div className="tweet--user">
                                <img className="tweet--user-avatar" src="https://fillmurray.com/50/50" alt="" />
                                <div className="tweet--user-name">{data.user.username}<span>@{data.user.username}</span></div>
                            </div>
                            
                            <p className="tweet--body">{data.content}</p>
                            
                            <div className="tweet--time">{data.updated_at}</div>
                            
                            <div className="tweet--actions">
                                <i className="fa fa-heart"></i> 
                            </div>
                        </div>
                    </Tweet>
                    )
                } )}    
            </Container>
        );

    }
}

export default withRouter(Home)