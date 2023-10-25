import React from 'react';
/*
2 components: class component / function component (function, arrow)
class component: JSX -> HTML + JS
JSX => return a block
fragment
state: Cap nhat du lieu lien tuc ma k can reload website
*/
class MyComponent extends React.Component {
    // Object -> key: value
    // Neu state thay doi se lam view lap tuc thay doi theo
    state = {
        name: '',
        fb: 'TD'
    }

    handleOnChangeName = (event) => {
        console.log(event.target.value,'event target:', event.target,'event object:', event)
        this.setState({
            name: event.target.value,
        })
    }
    // Khai bao event
    handleClickButton = () => {
        alert('Click me')
    }
    // re-render
    render() {
        console.log('>>> call render:', this.state)
        return(
            <>
                <div className='first'>
                    {/* Muon dung js trg html them {} */}
                    {/* {console.log('My name is:', this.state.name)}; */}
                    <input value={this.state.name} type='text'
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    My name is {this.state.name} {/*or this.state['name']*/}
                </div>
                <div className='second'>
                    My facebook is: {this.state.fb}
                </div>
                <div className='third'>
                    <button onClick={() => this.handleClickButton() }>Click me</button>
                </div>
            </>
        ) 
    } 
}
export default MyComponent;