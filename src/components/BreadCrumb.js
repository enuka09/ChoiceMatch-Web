import React from 'react';
import {Link} from "react-router-dom";

const BreadCrumb = (props) => {
    const {title} = props
    return (
        <div className="breadcrumb">
            {/*<div className="container-xxl">*/}
            {/*    <div className="row">*/}
            {/*        <div className="breadcrumb-inner col-12">*/}
                        <p className="breadcrumb-text">
                            <Link to="/" className="breadcrumb-text">
                                Home{" "}
                            </Link> {" "}
                            | {title}
                        </p>
                    </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default BreadCrumb;
