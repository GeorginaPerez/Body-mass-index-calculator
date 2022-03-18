import React, { Component } from 'react'
import Button from './Button'
import Label from './Label'
import UserInput from './UserInput'

 class Form extends Component {
    constructor(props){
        super(props)
        this.state = { Height: '' , Weight: '' , result:''}
        this.captureHeight = this.captureHeight.bind(this);
        this.captureWeight = this.captureWeight.bind(this);
        this.process= this.process.bind(this);

    }
    captureHeight(event){
      this.setState ({ Height: event.target.value})
    }
     captureWeight(event){
         this.setState ({ Weight : event.target.value})
     }
    process(event){
        event.preventDefault()
        let resultt = Math.round (this.state.Weight / Math.pow(this.state.Height,2))
      
        if(resultt < 16){
          this.setState ({ result: resultt.toString() + " Delgadez Severa"})
        }else if(resultt >= 16 && resultt<17){
          this.setState ({ result: resultt.toString() + " Delgadez Moderada"})
        }else if(resultt >= 17 && resultt<= 18.5){
          this.setState ({ result: resultt.toString() + " Delgadez Aceptable"})
        }else if(resultt >= 18.5 && resultt<= 25){
          this.setState ({ result: resultt.toString() + " Peso Normal"})
        }else if(resultt >= 25 && resultt<= 30){
          this.setState ({ result: resultt.toString() + " Sobrepeso"})
        }else if(resultt >= 30 && resultt<= 35){
          this.setState ({ result: resultt.toString() + " Obesidad Leve (Tipo 1)"})
        }else if(resultt >= 35 && resultt<= 40){
          this.setState ({ result: resultt.toString() + " Obesidad Media (Tipo 2)"})
        }else if( resultt < 40){
          this.setState ({ result: resultt.toString() + " Obesidad Morbida (Tipo 3)"})
        }
        

    }

  render() {
        console.log('state' ,this.state)
    return (
        <main className='form-signin m-5'>
          <form>
          <div>
            <Label leyenda = "CONOCE CUÁL ES TU ÍNDICE DE MASA CORPORAL (IMC) "/>
          </div>
          <div class="input-group mb-3">
            <Label leyenda = "Estatura:"/>
            <UserInput type = "number" step="any" nameI = "InputUser"  value = {this.state.Height} fun = {this.captureHeight}/>
          </div>
          <div class="input-group mb-3">
            <Label leyenda = "Peso:"/>
            <UserInput type= "number" step="any" nameI = "InputUser"  value = {this.state.Weight} fun = {this.captureWeight} />
          </div>
          <div class="input-group mb-3">
            <Button textBtn = "Calcular" onClick={this.process}/>
          </div>
          <div>
            <Label value = {"Tu Indice de masa corporal es :" + this.state.result}  />
          </div>
          </form>
      </main>
    )
  }
}

export default Form