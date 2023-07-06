import React from 'react';

import { Sidebar } from '../../components/Sidebar/Sidebar';
import { RentalCabForm } from '../../components/RentalCabForm/RentalCabForm';

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