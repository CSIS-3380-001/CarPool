import React, { createContext, useState, useEffect } from 'react';

export const RentalFormVariablesContext = createContext();

export const RentalFormVariablesProvider = ({ children }) => {

    const [vname, setVname] = useState('');
    const [vmake, setVmake] = useState('');
    const [vplate, setVplate] = useState('');
    const [vlocation, setVlocation] = useState('');
    const [vpickupdate, setVpickupdate] = useState('');
    const [fromtime, setFromtime] = useState('');
    const [vdaysavailable, setVdaysavailable] = useState('');
    const [dailyrate, setDailyrate] = useState('');
    const [deposit, setDeposit] = useState('');
    const [latefee, setLatefee] = useState('');

    const handleVnameChange = (e) => {
        setVname(e.target.value);
    }

    const handleVmakeChange = (e) => {
        setVmake(e.target.value);
    }

    const handleVplateChange = (e) => {
        setVplate(e.target.value);
    }

    const handleVlocationChange = (e) => {
        setVlocation(e.target.value);
    }

    const handleVpickupdateChange = (e) => {
        setVpickupdate(e.target.value);
    }

    const handleFromtimeChange = (e) => {
        setFromtime(e.target.value);
    }

    const handleVdaysavailableChange = (e) => {
        setVdaysavailable(e.target.value);
    }

    const handleDailyrateChange = (e) => {
        setDailyrate(e.target.value);
    }

    const handleDepositChange = (e) => {
        setDeposit(e.target.value);
    }

    const handleLatefeeChange = (e) => {
        setLatefee(e.target.value);
    }

    return(
        <RentalFormVariablesContext.Provider value={{vname, vmake, vplate, vlocation, vpickupdate, fromtime, vdaysavailable, dailyrate, deposit, latefee, handleVnameChange, handleVmakeChange, handleVplateChange, handleVlocationChange, handleVpickupdateChange, handleFromtimeChange, handleVdaysavailableChange, handleDailyrateChange, handleDepositChange, handleLatefeeChange}}>        
            {children}
        </RentalFormVariablesContext.Provider>
    );
};