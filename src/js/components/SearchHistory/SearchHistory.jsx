import React, { Component } from 'react';
import _ from 'lodash';
class SearchHistory extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { history } = this.props;
        

        return (
            <div className="card">
                <div className="card-header">Search History</div>
                <div className="card-body">
                <table className="table table-hover">
                <tbody>
                    <tr>
                        <td className='active'>
                        { history.map((item, i ) =>  <p key={i}>{item.name} - {item.date}</p>) }
                        </td>
                   </tr>
                </tbody>
            </table>
                </div>
            </div>
        );
    }
}

 export default SearchHistory;

