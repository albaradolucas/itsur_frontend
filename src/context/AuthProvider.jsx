import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [cargando, setCargando] = useState(true);
    const [auth, setAuth] = useState({});

    useEffect(() => {
        const autenticarUsuario = async () => {
            const itsToken = sessionStorage.getItem('its_token');

            if(!itsToken) {
                setCargando(false);
                return;
            }
            
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${itsToken}`,
                },
            };

            try {
                const {data} = await clienteAxios("/perfil", config)
                setAuth(data);
            } catch (error) {
                console.log(error.response.data.msg);
                setAuth({});
            }
            setCargando(false);
        };
        autenticarUsuario();
    },[])

    const isAuthenticated = async () => {
        const itsToken = sessionStorage.getItem("its_token");

        if(!itsToken) return setAuth({});
    }

    const cerrarSesion = () => {
        sessionStorage.removeItem("its_token");
        setAuth({});
    };

	return (
        <AuthContext.Provider
            value={{auth, setAuth, cerrarSesion, isAuthenticated}}
        >
            {children}
        </AuthContext.Provider>
    )
};

export { AuthProvider };

export default AuthContext;
