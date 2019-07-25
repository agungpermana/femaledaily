import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actionCreators  from './actions';

class Home extends Component {
    constructor(props) {
        super(props);
        let ds = "";
        this.state = {
            ds: ds
        }
    }
    componentDidMount() {
        this.props.getDataApi();
    }
    render() {
        if(this.props.loading) {
            return (
                <div>
                    <h1>Loading .....</h1>
                </div>
            )
        } else {
            console.log('this.props.items : ', this.props.items[`editor's choice`])
                
                let itemList = this.props.items[`editor's choice`].map(item => {
                    return (
                        <div>
                            <div className="card" key={item.editor}>
                                <div className="card-image">
                                    <img src={item.product.image} alt={item.product.description}/>
                                    <span className="card-title">{item.product.description}</span>
                                    <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></span>
                                </div>
                                <div className="card-content">
                                    <p>{item.product.description}</p>
                                    <p><b>Rating: {item.product.rating}</b></p>
                                </div>
                            </div>
                        </div>
                    )
                })

                let itemListArticles = this.props.items[`latest articles`].map(item => {
                    return (
                        <div>
                            <div className="card" key={item.title}>
                                <div className="card-image">
                                    <img src={item.image} alt={item.title}/>
                                    {/* <span className="card-title">{item.title}</span> */}
                                </div>
                                <div className="card-content">
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        </div>
                    )
                })

                return (
                    <div>
                        <div className = "container">
                            <div id="index-banner" className="parallax-container">
                                <div className="section no-pad bot">
                                    <div className="container">
                                        <p>970x50</p>
                                    </div>
                                </div>
                            </div>
                            <div className="parallax-container2">
                                <div className="container">
                                    <div className="section no-pad bot">
                                        <p>970x250</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h5>Editor's Choice</h5>
                                <h5 style={{color:'grey'}}>Curated with love</h5>
                            </div>
                            <div className="box">
                                {itemList}
                            </div>
                        </div>
                        <div className="parallax-container3">
                            <div className="section no-pad bot">
                                <p>Banner</p>
                            </div>
                        </div>
                        <div className = "container">
                            <div>
                                <h5>Lates Articles</h5>
                                <h5 style={{color:'grey'}}>Unravel more beauty</h5>
                            </div>
                            <div className="box">
                                {itemListArticles}
                            </div>
                        </div>
                    </div>
                )
        }
    }
}

const mapStateToProps = (state, props)=>{
    // return state
    return {
        loading: state.dataReducer.loading,
        items: state.dataReducer.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)