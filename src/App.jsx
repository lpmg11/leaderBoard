import { useState } from 'react'
import asesores from './asesores.js'
import './App.css'

const obtenerAsesores = () => {
  return asesores.sort((a,b) => b.porcentaje - a.porcentaje)
}

const PositionTable = ({asesor, index}) => {
  return (
    <div>
      <div className="PositionTable">
        <div className="asesorPosition"><div style={{
          backgroundColor: index === 0 ? '#FFD700' : index === 1 ? '#C0C0C0' : index === 2 ? '#CD7F32' : '#1ca1fa',
        }}>{index+1}</div><img src={asesor.img} alt="asesor" /></div>
        <div className="asesorName">{asesor.nombre}</div>
        <div className="asesorPorcentaje">{asesor.porcentaje}%</div>
      </div>
    </div>
  )
}

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

const obtenerMes = () => {
  const date = new Date()
  return meses[date.getMonth()]
}

function App() {

  const [asesores, setAsesores] = useState(obtenerAsesores())

  return (
    <div className="crmCenterh">
      <div className="crmContainer">
        <div className="crmLeaderboardHeader">
          <h1>Top participanes de {obtenerMes()}</h1>
          <div className="asesores">
            <div className="asesor"><div className="thirdplace"><div className="numberPosition"
            style={{backgroundColor: "#CD7F32"}}
            >3</div>
            <div className="Porcentaje" >{asesores[2].porcentaje + '%'}</div>
            <img src={asesores[2].img} alt="Profile Photo" className="porfilePhoto" />
            </div></div>
            <div className="asesor"><div className="firstplace"><div className="numberPosition"
            style={{backgroundColor: "#FFD700"}}
            >1</div>
            <div className="Porcentaje" >{asesores[0].porcentaje+'%'}</div>
            <img src={asesores[0].img} alt="Profile Photo" className="porfilePhoto" />
            </div></div>
            <div className="asesor"><div className="secondplace"><div className="numberPosition"
            style={{backgroundColor: "#C0C0C0"}}
            >2</div>
            <div className="Porcentaje" >{asesores[1].porcentaje+"%"}</div>
            <img src={asesores[1].img} alt="Profile Photo" className="porfilePhoto" />
            </div></div>
          </div>
        </div>
        <div className="crmLeaderboardContent">
          <h1>Posiciones</h1>
            {asesores.map((asesor, index) => <PositionTable key={index} asesor={asesor} index={index}/>)}
        </div>
      </div>
    </div>
  )
}

export default App
