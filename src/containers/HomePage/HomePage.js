import React, { Component, Fragment } from 'react';
import FloatingBox from '../../components/FloatingBox/FloatingBox';
import Header from '../../components/Header/Header';
import BlogPost from '../../components/BlogPost/BlogPost';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import './HomePage.css';

class HomePage extends Component {

    componentDidMount() {
        this.props.onFetchNewestPost();
    }

    render () {
        return (
            <Fragment>
                <Header loggedIn={this.props.loggedIn} />
                <div className="App">
                <FloatingBox />
                <BlogPost post={this.props.posts} />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts,
        loading: state.posts.loading,
        loggedIn: state.login.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchNewestPost: () => dispatch(actions.fetchNewestPost())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);