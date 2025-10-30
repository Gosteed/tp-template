import React from "react";

const Unidad1 = () => {
    return <>
    <div className="p-6 space-y-8 text-gray-200 leading-relaxed">
        <h1 className="text-3xl font-bold text-blue-400">🧩 Unidad 1 – Introducción a Linux y la Terminal</h1>

        <section>
            <h2 className="text-2xl font-semibold text-blue-300">🧠 Contenidos</h2>
            <ul className="list-disc ml-6">
            <li>Qué es un sistema operativo y qué hace Linux diferente de los demás.</li>
            <li>Partes internas de Linux: <strong>Kernel</strong>, <strong>Shell</strong> y <strong>Aplicaciones</strong>.</li>
            <li>Qué es la <strong>Terminal</strong> y por qué es tan poderosa.</li>
            <li>Cómo se organiza el sistema de archivos en Linux.</li>
            <li>Principales <strong>comandos básicos</strong> para moverte, crear, copiar y eliminar archivos.</li>
            <li>Prácticas iniciales para ganar confianza en la línea de comandos.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-semibold text-blue-300">🎯 Objetivos</h2>
            <ul className="list-disc ml-6">
            <li>Comprender qué es Linux, cómo está compuesto internamente y por qué es tan utilizado.</li>
            <li>Entender el concepto de <strong>sistema de archivos jerárquico</strong> y las rutas absolutas y relativas.</li>
            <li>Usar la <strong>terminal</strong> para ejecutar comandos básicos con soltura.</li>
            <li>Manipular archivos y carpetas: crearlos, moverlos, copiarlos y borrarlos.</li>
            <li>Interpretar la estructura de los comandos y su funcionamiento.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-semibold text-blue-300">⚙️ Aplicaciones prácticas</h2>
            <p>
            Este es el primer paso en el camino de todo técnico o administrador de sistemas. Dominar estos conceptos te permitirá:
            </p>
            <ul className="list-disc ml-6">
            <li>Configurar y mantener sistemas Linux reales, tanto locales como remotos.</li>
            <li>Entender cómo interactúan las aplicaciones con el sistema operativo.</li>
            <li>Prepararte para automatizar tareas mediante <strong>scripts Bash</strong>.</li>
            <li>Sentar bases sólidas para trabajar en redes, servidores y seguridad informática.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-semibold text-blue-300">🧱 ¿Qué es Linux?</h2>
            <p>
            Linux es un <strong>sistema operativo libre y de código abierto</strong> creado por Linus Torvalds en 1991. 
            Su código fuente es público y puede ser modificado y distribuido libremente, lo que ha dado lugar a miles de distribuciones como Ubuntu, Debian, Fedora o Arch.
            </p>
            <p>
            A diferencia de otros sistemas, Linux no pertenece a una empresa, sino a una comunidad mundial de desarrolladores. 
            Esto lo convierte en un sistema <strong>seguro, estable y eficiente</strong>, usado en todo tipo de entornos:
            </p>
            <ul className="list-disc ml-6">
            <li><strong>Servidores web:</strong> más del 90% de Internet funciona sobre Linux.</li>
            <li><strong>Supercomputadoras</strong> y centros de datos.</li>
            <li><strong>Android:</strong> basado en el kernel de Linux.</li>
            <li><strong>Equipos embebidos e IoT:</strong> routers, sistemas de red, dispositivos inteligentes.</li>
            </ul>
            <p>
            En resumen, Linux no es solo un sistema operativo más, sino <strong>la base de la infraestructura tecnológica moderna</strong>.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold text-blue-300">🧩 Las tres partes principales de Linux</h2>
            <p>Para entender cómo funciona Linux, debemos conocer sus tres componentes fundamentales:</p>

            <h3 className="text-xl font-semibold text-blue-200 mt-4">1️⃣ Kernel</h3>
            <p>
            El <strong>Kernel</strong> (núcleo) es el corazón del sistema. Se encarga de comunicarse directamente con el hardware, 
            administrando la memoria, el procesador, los dispositivos y los procesos. 
            Es quien decide cómo se ejecutan las tareas y cómo se reparten los recursos.
            </p>

            <h3 className="text-xl font-semibold text-blue-200 mt-4">2️⃣ Shell</h3>
            <p>
            El <strong>Shell</strong> es el intérprete de comandos. Traduce lo que escribimos en la terminal en instrucciones que el kernel entiende. 
            El más usado es <strong>Bash</strong> (Bourne Again Shell), que nos permite ejecutar comandos, crear scripts y automatizar tareas.
            </p>

            <h3 className="text-xl font-semibold text-blue-200 mt-4">3️⃣ Aplicaciones</h3>
            <p>
            Encima del shell se encuentran las <strong>aplicaciones</strong>: navegadores, editores, herramientas gráficas, etc. 
            Todas interactúan con el sistema a través del kernel, directa o indirectamente.
            </p>

            <pre className="bg-gray-900 p-3 rounded-md text-sm mt-4 overflow-x-auto">
            <code>
        {`[ Usuario ]
            ↓
        [ Shell / Terminal ]
            ↓
        [ Kernel ]
            ↓
        [ Hardware ]`}
            </code>
            </pre>
        </section>

        <section>
            <h2 className="text-2xl font-semibold text-blue-300">💻 La Terminal: tu puente con el sistema</h2>
            <p>
            La <strong>terminal</strong> es la herramienta principal para comunicarse con Linux. 
            A través de ella enviamos comandos al shell, que los interpreta y ejecuta. 
            En lugar de usar clics o menús, usamos texto: más rápido, preciso y flexible.
            </p>
            <p>
            Aprender a usar la terminal te da un control total sobre el sistema: instalar software, configurar redes, analizar errores y mucho más.
            </p>
            <p>
            En palabras simples: <strong>la terminal no te limita, te libera.</strong>
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold text-blue-300">🌳 Estructura del sistema de archivos</h2>
            <p>
            Linux organiza toda su información en una estructura de árbol. Todo comienza en la carpeta raíz <code>/</code> 
            y a partir de allí se ramifican las demás carpetas del sistema.
            </p>

            <pre className="bg-gray-900 p-3 rounded-md text-sm mt-4 overflow-x-auto">
            <code>
        {`/
        ├── bin      → Comandos básicos del sistema
        ├── etc      → Archivos de configuración
        ├── home     → Carpetas personales de los usuarios
        ├── var      → Archivos temporales y logs
        ├── usr      → Programas y librerías de usuario
        └── tmp      → Archivos temporales`}
            </code>
            </pre>

            <p>
            En Linux <strong>todo es un archivo</strong>: los discos, las impresoras, los procesos e incluso la memoria. 
            Esta idea unifica el sistema y simplifica su administración.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold text-blue-300">🏠 Carpeta personal del usuario</h2>
            <p>
            Cada usuario tiene su propio espacio dentro de <code>/home</code>. 
            Si tu usuario se llama <code>alumno</code>, tu carpeta será <code>/home/alumno</code>. 
            Allí podés crear documentos, programas y configuraciones sin afectar a otros usuarios.
            </p>
            <p>
            En la terminal, esta carpeta se representa con <code>~</code> (tilde). 
            Por ejemplo, <code>cd ~</code> te lleva directamente a tu directorio personal.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold text-blue-300">⚙️ Comandos básicos</h2>

            <h3 className="text-xl font-semibold text-blue-200 mt-4">📍 pwd — Print Working Directory</h3>
            <p>Muestra la ruta completa de la carpeta actual.</p>
            <pre className="bg-gray-900 p-3 rounded-md text-sm mt-4 overflow-x-auto"><code>pwd</code></pre>

            <h3 className="text-xl font-semibold text-blue-200 mt-4">📂 ls — Listar contenido</h3>
            <p>Muestra los archivos y carpetas del directorio actual.</p>
            <pre className="bg-gray-900 p-3 rounded-md text-sm mt-4 overflow-x-auto"><code>ls -l   # detalles<br/>ls -a   # muestra ocultos</code></pre>

            <h3 className="text-xl font-semibold text-blue-200 mt-4">🚶 cd — Cambiar de directorio</h3>
            <pre className="bg-gray-900 p-3 rounded-md text-sm mt-4 overflow-x-auto"><code>cd /etc<br/>cd ~<br/>cd ..</code></pre>

            <h3 className="text-xl font-semibold text-blue-200 mt-4">🏗️ mkdir — Crear carpetas</h3>
            <pre className="bg-gray-900 p-3 rounded-md text-sm mt-4 overflow-x-auto"><code>mkdir proyectos<br/>mkdir -p trabajos/2025/informes</code></pre>

            <h3 className="text-xl font-semibold text-blue-200 mt-4">📄 cat — Ver contenido de archivos</h3>
            <pre className="bg-gray-900 p-3 rounded-md text-sm mt-4 overflow-x-auto"><code>cat notas.txt<br/>cat parte1.txt parte2.txt &gt; completo.txt</code></pre>

            <h3 className="text-xl font-semibold text-blue-200 mt-4">🧬 cp / mv — Copiar o mover archivos</h3>
            <pre className="bg-gray-900 p-3 rounded-md text-sm mt-4 overflow-x-auto"><code>cp documento.txt copia.txt<br/>mv copia.txt informe.txt</code></pre>

            <h3 className="text-xl font-semibold text-blue-200 mt-4">🧹 rm — Eliminar archivos</h3>
            <pre className="bg-gray-900 p-3 rounded-md text-sm mt-4 overflow-x-auto"><code>rm archivo.txt<br/>rm -r carpeta<br/>rm -rf carpeta  # elimina sin preguntar</code></pre>
        </section>

        <section>
            <h2 className="text-2xl font-semibold text-blue-300">🧩 Estructura general de comandos</h2>
            <p>
            Todos los comandos siguen el mismo formato:
            </p>
            <pre className="bg-gray-900 p-3 rounded-md text-sm mt-4 overflow-x-auto">
            <code>comando [opciones] [argumentos]</code>
            </pre>
            <p>Ejemplo:</p>
            <pre className="bg-gray-900 p-3 rounded-md text-sm mt-4 overflow-x-auto">
            <code>ls -l /home/alumno</code>
            </pre>
        </section>

        <section>
            <h2 className="text-2xl font-semibold text-blue-300">🧪 Ejercicios prácticos</h2>

            <h3 className="text-xl font-semibold text-blue-200 mt-4">🧭 Ejercicio 1: Navegación básica</h3>
            <ol className="list-decimal ml-6">
            <li>Abrí la terminal.</li>
            <li>Escribí <code>pwd</code> y observá la ruta.</li>
            <li>Movete entre carpetas con <code>cd</code>, <code>cd ..</code> y <code>cd ~</code>.</li>
            <li>Listá los archivos con <code>ls -la</code>.</li>
            </ol>

            <h3 className="text-xl font-semibold text-blue-200 mt-4">📁 Ejercicio 2: Gestión de archivos</h3>
            <ol className="list-decimal ml-6">
            <li>Crea una carpeta <code>practicas</code> con <code>mkdir</code>.</li>
            <li>Entrá en ella con <code>cd practicas</code>.</li>
            <li>Crea un archivo con <code>echo "Hola Linux" &gt; hola.txt</code>.</li>
            <li>Mostrá su contenido con <code>cat hola.txt</code>.</li>
            <li>Copialo con <code>cp hola.txt copia/</code>.</li>
            <li>Eliminá el original con <code>rm hola.txt</code>.</li>
            </ol>
        </section>

        <section>
            <h2 className="text-2xl font-semibold text-blue-300">🧭 Cierre de la Unidad 1</h2>
            <p>
            En esta unidad comprendiste cómo está formado Linux, cómo funciona su estructura interna y cómo usar la terminal 
            para moverte y manipular archivos. Estos conocimientos son la base del curso y te preparan para 
            <strong>automatizar tareas con Bash</strong> en la próxima unidad.
            </p>
            <p className="mt-2 text-blue-200 font-semibold">
            💡 Dominar la terminal no es solo aprender comandos: es aprender a pensar como el sistema.
            </p>
        </section>
     </div>
    </>;
}

export default Unidad1;