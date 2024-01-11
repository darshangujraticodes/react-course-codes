
import { useState, useCallback, useEffect, useRef } from "react"

function PasswordGenerator(){

    const [length, setLength] = useState(8)
    const [numAllowed, setNumAllowed] = useState(false)
    const [symbAllowed, setSymbAllowed] = useState(false)
    const [password, setPassword] = useState('')

    // useRef Hook to set connection between two non connected data 
    // pass of ref and get reference 
    // eg here is input and button are 2 non connected html tag
    // we have to connect them with useRef hooks
    const passwordRef = useRef(null)


    // useCallback function is state management hook for 
    // with 2 values as parameter [function () , dependency as array format [] ] 
    // dependents are the one in which changes are been and on change they call function 
    const passGeneratorValue = useCallback( () => {
        let passVal = ''
        let letterStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        let numStr = '01234546789'
        let symbStr = '!@#$%^&*/'
    
        if (numAllowed) letterStr += numStr
        
        if (symbAllowed) letterStr += symbStr

        for( let i=1; i <= length; i++ ){
            let charIndex = Math.floor(Math.random() * letterStr.length + 1)
            passVal += letterStr.charAt(charIndex)
        }
        setPassword(passVal)

    } ,[length, numAllowed, symbAllowed])
    // here length, numallowed and symbol allowed are dependents 
    // due to which passwordgenerate useCallback fun() need to be recall again and again on change

    //useRef function 
    function copyPassword(){
        window.navigator.clipboard.writeText(password)
        passwordRef.current?.select();
        // selection range help us to copy range of data we want to select on clipboard
        // window.navigator.current?.setSelectionRange(0,30)
        alert('Password Copied !!')
    }

    // useEffect function are use to call function on any dependency change
    // on Changing length, num or symbol useEffect will get triggered..
    useEffect( () => {
        passGeneratorValue()
    }, [length, numAllowed, symbAllowed]
    )

    return(
        <div className="mt-5 password-generator-wrapper container text-center" >
            <h2 className="mb-4">
                React Password Generator
            </h2>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div class="input-group mb-3 w-10">
                            <input type="text" readOnly 
                                value={password}
                                ref={passwordRef}
                                className="form-control" 
                                placeholder="Password Generator"  />

                            <button 
                                className="btn btn-primary"
                                onClick={copyPassword} 
                                type="button" id="button-addon2">Copy</button>
                    </div>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="length-range-wrapper my-4">
                        <label for="customRange1" 
                            className="form-label">Pasword Length = {length} </label>
                        <input type="range" 
                            className="form-range" 
                            min={0} max={20}
                            onChange={ (e) => { setLength(e.target.value) } }
                            value={length} 
                            id="customRange1" />
                    </div>
                    <div class="input-group mb-3 justify-content-center">
                    <div class="input-group-prepend d-flex ">
                        <div class="input-group-text mx-2">
                            <input  
                                type="checkbox" 
                                defaultChecked = {numAllowed}
                                // callback fired to get previous state of setNumAllowed
                                onChange={
                                    () => {
                                        setNumAllowed( prev => !prev  ) 
                                        // again callback funt. to gain previous state value
                                        // console.log(setNumAllowed(prev));
                                    }
                                }
                                id="numberText"
                                className="mx-2" />
                            <label htmlFor="numberText">Numbers</label>
                        </div>

                        <div class="input-group-text mx-2">
                            <input  
                                type="checkbox"
                                defaultChecked = {symbAllowed} 
                                onChange={
                                    () => {
                                        setSymbAllowed( prev => !prev  ) 
                                        // again callback funt. to gain previous state value
                                        // console.log(setSymbAllowed(prev));
                                    }
                                }
                                id="symbolsText"
                                className="mx-2" />
                            <label htmlFor="symbolsText">Symbols</label>

                        </div>
                    </div>
                        
                        </div>
                </div>

                    

            </div>
        </div>
    )
}

export default PasswordGenerator;