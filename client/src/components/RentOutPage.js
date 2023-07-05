import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Sidebar } from './Sidebar/Sidebar';
import { RentalCabForm } from './RentalCabForm/RentalCabForm';

export const RentOutPage = () => {
    
    return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar></Sidebar>

        <div className="col-10">
          {/* Main content */}
            {/* Rest of the Home component */}
            <RentalCabForm></RentalCabForm>
        </div>
      </div>
    </div>
    );
}