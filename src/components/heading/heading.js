import React from 'react';
import './heading.scss';



export default class Heading extends React.Component {

    render() {
        const value = this.props.value;

        return (
            <div className='heading'>
                <h1 className='heading_title'>{value}</h1>
            </div >
        )
    }
}

// export default class Heading extends React.Component {

//     render() {

//         return (
//             <div className='heading_title'>
//                 <h1>cxc</h1>
//             </div>
//         )
//     }
// }