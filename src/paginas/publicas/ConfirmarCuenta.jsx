// Libraries
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// Components
import Alerta from "../../components/Alerta";
import clienteAxios from "../../config/axios";

const ConfirmarCuenta = () => {
    const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
    const [cargando, setCargando] = useState(true);
    const [alerta, setAlerta] = useState({});

    const params = useParams();
    const { id } = params;

    useEffect(() => {
        const confirmarCuenta = async () => {
            try {
                const url = `/confirmar/${id}`;
                const { data } = await clienteAxios(url);

                setCuentaConfirmada(true);
                setAlerta({
                    msg: data.msg,
                    error: false,
                });
            } catch (error) {
                setAlerta({ msg: error.response.data.msg, error: true });
            }

            setCargando(false);
        };
        confirmarCuenta();
    }, []);

    return (
        <>
            <div className="ml-5">
                <h1 className="text-orange-600 font-black text-6xl">
                    Confirma tu Cuenta y tu Camino {""}
                    <span className="text-black">en ITSur</span>
                </h1>
            </div>
            <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
                {!cargando && <Alerta alerta={alerta} />}

                {cuentaConfirmada && (
                    <Link
                        to="/login"
                        className="block text-center my-5 text-gray-500"
                    >
                        Listo! Visita este link para iniciar sesión!
                    </Link>
                )}
            </div>
        </>
    );
};

export default ConfirmarCuenta;
