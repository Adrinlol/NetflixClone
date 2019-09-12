import React from 'react';
import '../../sass/Button.scss';
import '../../sass/TabContent.scss';
import { MdCheck as Check } from 'react-icons/md';
import { MdClose as Cross } from 'react-icons/md';


function ThirdContent() {
    return (
        <div className="main">
            <div clasName="third-tab-content">
            <div className="tab-top-content">
            <span>Choose one plan and watch everything on Netflix</span>
            <button className="btn btn-cancel pog">Try it now</button>
            </div>
            <div className="third-tab-bottom-content">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Basic</th>
                            <th>Standard</th>
                            <th>Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Monthly Price</td>
                        <td>$9.99</td>
                        <td>$13.99</td>
                        <td>$16.99</td>
                    </tr>
                    <tr>
                        <td>HD Available</td>
                        <td><Cross/></td>
                        <td><Check/></td>
                        <td><Check/></td>
                    </tr>
                    <tr>
                        <td>Ultra HD Available</td>
                        <td><Cross/></td>
                        <td><Cross/></td>
                        <td><Check/></td>
                    </tr>
                    <tr>
                        <td>Unlimited Movies and TV shows</td>
                        <td><Cross/></td>
                        <td><Cross/></td>
                        <td><Check/></td>
                    </tr>
                    <tr>
                        <td>Cancel Anytime</td>
                        <td><Check/></td>
                        <td><Check/></td>
                        <td><Check/></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    )
}

export default ThirdContent;
