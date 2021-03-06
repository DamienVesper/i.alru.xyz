import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faDownload, faDesktop } from '@fortawesome/free-solid-svg-icons';

import '../../public/assets/scss/pages/home.scss';
import '../../public/assets/scss/pages/dashboard.scss';

// interface UserData {
//     authenticated: boolean

//     discordID: string
//     username: string
//     email: string
//     avatar: string

//     permissions: {
//         admin: boolean
//     }
// }

class Dashboard extends React.Component {
    render = (): React.ReactNode => (
        <main className="text-center container">
            <div className="dash-container mx-2 my-5">
                <div className="dash-header">
                    <h1 className="page-title">Dashboard</h1>
                </div>
                <div className="dash-content">
                    <div className="dash-config-container">
                        <div className="dash-config">
                            <h5>ShareX Config</h5>
                            <p>Download your config</p>
                            <div className="dash-config-btns">
                                <a href="/api/settings/config" target="_blank" className="btn btn-sm btn-success download-btn">
                                    <FontAwesomeIcon icon={faDownload} />
                                    <span>Download</span>
                                </a>
                                <a href="#" className="btn btn-sm btn-danger tutorial-btn">
                                    <FontAwesomeIcon icon={faDesktop} />
                                    <span>Tutorial</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="dash-pictures">
                        <h5>Uploaded Pictures</h5>
                    </div>
                </div>
            </div>
        </main>
    );

    // componentDidMount = async (): Promise<void> => {
    //     const userData = await fetch(`https://i.alru.xyz/auth/authenticated`)
    //         .catch(err => {
    //             console.error(err);
    //             if (window.location.hostname !== `localhost`) window.location.href = `/`;
    //         });

    //     // {"discordID":"386940319666667521","username":"DamienVesper","email":"ldamienvesper@gmail.com","avatar":"2c18b54f11167920ada3a6ebd538f910","permissions":{"admin":false}}

    //     if (!((userData as unknown) as UserData).authenticated && window.location.hostname !== `localhost`) window.location.href = `/`;
    // };
}

export default Dashboard;
