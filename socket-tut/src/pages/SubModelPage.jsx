import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Outlet, useLocation, Link, redirect } from 'react-router-dom';


export const loader = (store)=>()=>{
    const user = store.getState().userState?.user;
    if(!user)
        return redirect('/login')
    return null;
}

const SubModelPage = () => {
    const navigate = useNavigate(); // Correct usage of navigation
    const model = useLocation().pathname.split('/models/')[1]



    return ( 
        <div>
            <div className="sm:ml-12 breadcrumbs text-sm sm:text-md capitalize animate-slideLeft">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/models'>Models</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
};

export default SubModelPage;
