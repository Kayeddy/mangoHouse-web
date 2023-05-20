import React, { useState } from "react";
import { useSnapshot } from "valtio";

import CustomButton from "./CustomButton";
import state from "../context";

const CookieBanner = () => {
  const snap = useSnapshot(state);
  const [showModal, setShowModal] = useState(false);

  if (snap.cookiesAccepted) {
    return null;
  }

  return (
    <div className="w-screen">
      <div className="flex flex-col items-start justify-start md:items-center md:justify-center  gap-3 bg-[#ffacac] py-3 px-1 w-full h-max text-[#1A202C] text-sm font-jakarta">
        <h3 className="font-sen font-semibold">Cookies</h3>
        <p>
          Este sitio web utiliza cookies para mejorar la experiencia del
          usuario. Al continuar navegando por el sitio, acepta el uso de cookies
          bajo los{" "}
          <span
            className="cursor-pointer underline font-semibold"
            onClick={() => setShowModal(true)}
          >
            términos y políticas de privacidad
          </span>
          .
        </p>
        <CustomButton
          type="filled"
          title="Aceptar y continuar"
          handleClick={state.acceptCookies}
          styles="w-fit px-4 py-2.5 font-bold text-md bg-gradient-to-r from-[#f49096] to-[#f9ae51]"
        />
      </div>

      {showModal && (
        <div className="modal fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
          <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              <div className="flex justify-end items-center pb-3">
                <div
                  className="modal-close cursor-pointer z-50"
                  onClick={() => setShowModal(false)}
                >
                  <svg
                    className="fill-current text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path
                      fill="currentColor"
                      d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="privacy-content overflow-y-scroll h-60 flex flex-col items-center justify-start gap-8">
                <h2 className="text-2xl font-bold mb-3">
                  Política de privacidad
                </h2>
                <div className="flex flex-col gap-2 font-jakarta text-base">
                  <p className="font-sen text-lg font-semibold">
                    1. Política de Cookies
                  </p>
                  <p>
                    En cumplimiento de la normativa española y europea aplicable
                    en materia de protección de datos personales, se presenta la
                    política de cookies de nuestro sitio web.
                    <span className="block font-semibold w-full">
                      ¿Qué son las cookies?
                    </span>{" "}
                    Las cookies son pequeños archivos de texto que se descargan
                    y almacenan en el equipo del usuario cuando visita un sitio
                    web. Estos archivos permiten que el sitio web recuerde las
                    preferencias del usuario, como su idioma preferido o la
                    moneda utilizada, durante su visita y en futuras visitas.
                    Además, las cookies también pueden ser utilizadas para
                    recopilar información sobre la actividad del usuario en el
                    sitio web, como las páginas visitadas, el tiempo de
                    permanencia en el sitio y los productos o servicios que se
                    han visto o comprado. Esta información se utiliza para
                    mejorar la experiencia del usuario y personalizar el
                    contenido y la publicidad en función de sus intereses y
                    necesidades.
                    <span className="block font-semibold w-full">
                      Tipos de cookies utilizadas en nuestro sitio web
                    </span>
                    En nuestro sitio web se utilizan los siguientes tipos de
                    cookies:
                    <br />
                    * Cookies necesarias: Son cookies esenciales para el
                    correcto funcionamiento del sitio web. Estas cookies
                    permiten la navegación por el sitio web y el acceso a áreas
                    seguras del mismo.
                    <br />
                    * Cookies de preferencias: Estas cookies permiten que el
                    sitio web recuerde las preferencias del usuario, como el
                    idioma preferido o la moneda utilizada.
                    <br />
                    * Cookies de estadísticas: Estas cookies recopilan
                    información sobre la actividad del usuario en el sitio web,
                    como las páginas visitadas, el tiempo de permanencia en el
                    sitio y los productos o servicios que se han visto o
                    comprado. Esta información se utiliza para mejorar la
                    experiencia del usuario y personalizar el contenido y la
                    publicidad en función de sus intereses y necesidades.
                    <br />
                    * Cookies de publicidad: Estas cookies se utilizan para
                    mostrar publicidad personalizada en función de los intereses
                    del usuario. Esta publicidad puede ser mostrada en nuestro
                    sitio web o en otros sitios web. Cómo administrar las
                    cookies El usuario puede configurar su navegador para
                    rechazar todas las cookies o para recibir una notificación
                    cuando se envía una cookie. Sin embargo, si el usuario opta
                    por desactivar las cookies, es posible que no pueda acceder
                    a algunas partes del sitio web o que no pueda utilizar
                    algunas de sus funciones.
                    <br />
                    Nos reservamos el derecho de modificar la presente política
                    de cookies en cualquier momento y sin previo aviso. Las
                    modificaciones entrarán en vigor en el momento en que se
                    publiquen en el sitio web.
                  </p>
                </div>
                <div className="flex flex-col gap-2 font-jakarta text-base">
                  <p className="font-sen text-lg font-semibold">
                    2. Información que recopilamos
                  </p>
                  <p>
                    Recopilamos información de identificación personal, como
                    nombre, dirección de correo electrónico y número de
                    teléfono, cuando se proporciona voluntariamente al
                    registrarse en nuestro sitio web o al enviar un formulario
                    de contacto. También podemos recopilar información no
                    personal, como el tipo de navegador que utiliza, la
                    dirección IP y la ubicación geográfica.
                  </p>
                </div>
                <div className="flex flex-col gap-2 font-jakarta text-base">
                  <p className="font-sen text-lg font-semibold">
                    3. Uso de la información
                  </p>
                  <p>
                    Utilizamos la información recopilada para proporcionar y
                    mejorar nuestros servicios, para comunicarnos con nuestros
                    usuarios y para personalizar su experiencia en el sitio web.
                    También podemos utilizar la información para enviar correos
                    electrónicos promocionales sobre nuestros servicios, ofertas
                    especiales y eventos.
                  </p>
                </div>
                <div className="flex flex-col gap-2 font-jakarta text-base">
                  <p className="font-sen text-lg font-semibold">
                    4. Divulgación de la información
                  </p>
                  <p>
                    No vendemos, intercambiamos ni transferimos de ninguna otra
                    manera su información personal a terceros, a menos que se
                    nos requiera por ley o en caso de una fusión, adquisición o
                    venta de activos. Sin embargo, podemos compartir información
                    no personal con terceros para fines de marketing, publicidad
                    u otros fines.
                  </p>
                </div>
                <div className="flex flex-col gap-2 font-jakarta text-base">
                  <p className="font-sen text-lg font-semibold">
                    5. Protección de la información
                  </p>
                  <p>
                    Tomamos medidas de seguridad razonables para proteger la
                    información personal de nuestros usuarios contra la pérdida,
                    el uso indebido y el acceso no autorizado. Sin embargo, no
                    se puede garantizar la seguridad absoluta de la información
                    transmitida a través de internet.
                  </p>
                </div>
                <div className="flex flex-col gap-2 font-jakarta text-base">
                  <p className="font-sen text-lg font-semibold">
                    6. Enlaces a otros sitios web
                  </p>
                  <p>
                    Nuestro sitio web puede contener enlaces a otros sitios web.
                    No somos responsables de las prácticas de privacidad o el
                    contenido de dichos sitios web. Se recomienda revisar las
                    políticas de privacidad de estos sitios web antes de
                    proporcionar cualquier información personal.
                  </p>
                </div>
                <div className="flex flex-col gap-2 font-jakarta text-base">
                  <p className="font-sen text-lg font-semibold">
                    7. Cambios en la política de privacidad
                  </p>
                  <p>
                    Nos reservamos el derecho de actualizar o cambiar esta
                    Política de Privacidad en cualquier momento. Se recomienda
                    revisar esta página regularmente para estar al tanto de
                    cualquier cambio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieBanner;
