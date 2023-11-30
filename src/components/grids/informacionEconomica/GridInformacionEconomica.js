import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import enviarDatos from './services/apiInformacionEconomica'

function App() {
  //const [enviarDatos, setEnviarDatos] = useState('')
  const [selectedOption, setSelectedOption] = useState('A');
  const [selectedOptionDos, setSelectedOptionDos] = useState('R');

  const handleActividadPrimariaChange = (e) => {
    const valorSeleccionado = e.target.value;
    setSelectedOption(valorSeleccionado);
    setDatos({
      ...datos,
      actividad_primaria: valorSeleccionado
    });
  };

  const handleActividadSecundariaChange = (e) => {
    const valorSeleccionado = e.target.value;
    setSelectedOptionDos(valorSeleccionado);
    setDatos({
      ...datos,
      actividad_secundaria: valorSeleccionado
    });
  };

  
  const [opcion, setOpcion] = useState(false);

  const handleOptionChange = (e) => {
    const newValue = e.target.value === 'true';
    setOpcion(newValue);
  };

  

  const [datos, setDatos]= useState({});

  const numericFields = { ingreso_total_venta: true, dias_mes_trabajo_cultivo: true, costo_mantenimiento: true, ingreso_total_hogar: true, dias_mes_trabajo_no_cultivo: true, }; 

  const inputChange = (e) => { 
    const name = e.target.name; const value = numericFields[name] ? parseFloat(e.target.value) : e.target.value; setDatos((prevDatos) => ({ ...prevDatos, [name]: value, })); console.log(datos); };
  
  const save = async () => {
      try{
        const newDatos  ={
            ...datos,
            ...{
              actividad_principal:selectedOption,
              actividad_secundaria:selectedOptionDos,
              es_asociado:opcion,
              nombre_asociacion:"",
            }
        }
        console.log(newDatos);

        const data = await enviarDatos(newDatos)
        console.log(datos)
      }catch(error){
        console.log(error)
        console.log(datos)
      }
      //toast.success('Datos enviados correctamente')
      
  }


  return (
    <>
    <Header/>
  
    <section className='bg-[#EDF1D6]'>
        <div className="py-6">
            <h2 className=" px-72 text-[#54925D] font-bold text-2xl">
              Datos Personales
            </h2>
        </div>
        <div className='flex flex-col-2 gap-x-4 gap-y-24 flex-wrap justify-center'>
        
        <div className='flex flex-col'>
          <div className=' flex flex-row gap-4 py-1'>
          <div className='w-[150px]'><h1>Nombre completo</h1></div>
          <div><input className='p-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black' name='nombre_completo' disabled/></div>
          </div>
          <div className='flex flex-row gap-4 py-1'>
          <div className='w-[150px]'><h1>Tipo Documento</h1></div>
          <div><input className='p-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black' name='tipo_documento' disabled/></div>
          
          </div>
          <div className='flex flex-row gap-4 py-1'>
          <div className='w-[150px]'><h1>N° Documento</h1></div>
          <input className='p-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black' name='numero_documento' disabled/>
          </div>
          <div className='flex flex-row gap-4 py-1'>
          <div className='w-[150px]'><h1>Fecha nacimiento</h1></div>
          <input className='p-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black' name='fecha_nacimiento' disabled/>
          </div>
          <div className='flex flex-row gap-4 py-1'>
          <div className='w-[150px]'><h1>Sexo</h1></div>
          <input className='p-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black' name='sexo' disabled/>
          </div>
          <div className='flex flex-row gap-4 py-1'>
          <div className='w-[150px]'><h1>Etnia</h1></div>
          <input className='p-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black' name='etnia' disabled/>
          </div>
        </div>

        <div className='flex flex-col'>
          <div className='flex flex-row gap-4 py-1'>
          <div className='w-[150px]'><h1>Condición</h1></div>
          <input className='p-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black' name='condicion' disabled/>
          </div>
          <div className='flex flex-row gap-4 py-1'>
          <div className='w-[150px]'><h1>Departamento</h1></div>
          <input className='p-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black' name='departamento' disabled/>
          </div>
          <div className='flex flex-row gap-4 py-1'>
          <div className='w-[150px]'><h1>Municipio</h1></div>
          <input className='p-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black' name='municipio' disabled/>
          </div>
          <div className='flex flex-row gap-4 py-1'>
          <div className='w-[150px]'><h1>Vereda</h1></div>
          <input className='p-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black' name='vereda' disabled/>
          </div>
          <div className='flex flex-row gap-4 py-1'>
          <div className='w-[150px]'><h1>Categoria</h1></div>
          <input className='p-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black' name='categoria' disabled/>
          </div>
          <div className='flex flex-row gap-4 py-1'>
          <div className='w-[150px]'><h1>Fecha Ingreso</h1></div>
          <input className='p-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black' name='fecha_ingreso' disabled />
          </div>
        </div>

        </div>
        
    </section>

    <section className='bg-[#EDF1D6]'>
    <div className='flex items-center flex-col py-4 '><span className='bg-[#609966] w-[780px] h-[2px] mt-2'></span> </div>
    <div className="py-6">
        <h2 className="px-72 text-[#54925D] font-bold text-2xl">
          Datos Economicos
        </h2>
    </div>
        <div className='flex gap-x-20 gap-y-24 flex-wrap justify-center'>
        
        <div className='flex flex-col text-center'>
          <div className='py-2'>
          <div className='w-[200px]'><h1>Actividad economica primaria</h1></div>
          <select className='p-2 rounded-md border-[#609966] w-[200px] border-s border-t border-y border-r text-base text-black' value={selectedOption} name='actividad_principal' onChange={handleActividadPrimariaChange}>
            <option value="A">Agricultura</option>
            <option value="R">Artesania</option>
            <option value="M">Mineria</option>
            <option value="G">Gobierno</option>
            <option value="T">Transporte</option>
            <option value="C">Comercio</option>
            <option value="E">Educacion</option>
            <option value="T">Turismo</option>
            <option value="I">Independiente</option>
            <option value="O">Otro</option>
          </select>
          </div>
          <div className='py-2'>
          <div className='w-[200px]'><h1>Ingreso Total por ventas de cacao</h1></div>
          <input className='p-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black' type='number' name='ingreso_total_venta' onChange={inputChange} />
          </div>
          <div className='py-2'>
          <div className='w-[200px]'><h1>Numero de dias al mes que trabaja fuera de la finca</h1></div>
          <input className='p-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black' type='number' name='dias_mes_trabajo_cultivo' onChange={inputChange} />
          </div>
        </div>

        <div className='flex flex-col text-center'>
          <div className='py-2'>
          <div className='w-[200px]'><h1>Actividad economica secundaria</h1></div>
          <select className='p-2 rounded-md border-[#609966] w-[200px] border-s border-t border-y border-r text-base text-black' value={selectedOptionDos} name='actividad_secundaria' onChange={handleActividadSecundariaChange}>
            <option value="A">Agricultura</option>
            <option value="R">Artesania</option>
            <option value="M">Mineria</option>
            <option value="G">Gobierno</option>
            <option value="T">Transporte</option>
            <option value="C">Comercio</option>
            <option value="E">Educacion</option>
            <option value="T">Turismo</option>
            <option value="I">Independiente</option>
            <option value="O">Otro</option>
          </select>
          </div>
          <div className='py-2'>
          <div className='w-[200px]'><h1>Costo mantenimiento cultivo($/año)</h1></div>
          <input className='p-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black' name='costo_mantenimiento' onChange={inputChange}/>
          </div>
          <div className=' flex flex-col gap-2 py-6'>
          <h1>Esta asociado</h1>
          <div className='flex flex-row gap-2 justify-center'>
          <input type="radio" className='checked:bg-[#609966]'  value="true" name='esta_asociado' checked={opcion === true} onChange={handleOptionChange} />
          <label>Si</label>
          <input type="radio" className='checked:bg-[#609966]'  value="false" name='esta_asociado' checked={opcion === false} onChange={handleOptionChange} />
          <label>No</label>
          </div>
          </div>
        </div>

        <div className='flex flex-col text-center'>
          <div className='py-2'>
          <div className='w-[200px]'><h1>Ingreso total hogar mes($/mes)</h1></div>
          <input className='p-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black' type='number' name='ingreso_total_hogar' onChange={inputChange}/>
          </div>
          <div className='py-2'>
          <div className='w-[200px]'><h1>Numero de dias al mes que trabaja en el cultivo</h1></div>
          <input className='p-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black' type='number' name='dias_mes_trabajo_no_cultivo' onChange={inputChange}/>
          </div>
          {opcion === true && (
          <div className='py-2'>         
          <div className='w-[200px]'><h1>Nombre asociación</h1></div>
          <input className='p-2 rounded-md border-[#609966] border-s border-t border-y border-r text-base text-black' name='nombre_asociacion' onChange={inputChange}/>
          </div>
          )}
        </div>
        
        </div>
        <div className='px-72 py-4'>
        <button className= 'bg-[#609966] w-[150px] h-[40px]  rounded-md text-xl font-bold text-white'> <h1 className='mb-1' onClick={save}>Guardar</h1></button>
        </div>
    </section>
    </>
  )
}

export default App