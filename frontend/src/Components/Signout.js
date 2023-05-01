import React, { useState, useEffect } from 'react';
import { useNavigate  } from "react-router-dom";

export default function Signout() {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoggedOut(sessionStorage.removeItem("isLoggedIn"));
    navigate("/");
  }, [isLoggedOut]);

  return (
    <div>Signout</div>
  )
}
