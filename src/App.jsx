 

import { useState } from 'react'; 

import { ethers } from 'ethers'; 

import HelloWorld from './artifacts/contracts/HelloWorld.sol/HelloWorld.json';
 

const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS; 

 
 

function App() { 

    const [hello, setHelloValue] = useState(); 

 
 

    async function requestAccount() { 

        await window.ethereum.request({ method: 'eth_requestAccounts' }); 

    } 

 
 

    // async function fetchHello() { 

    //     if (typeof window.ethereum !== 'undefined') { 

    //         await requestAccount(); 

    //         const provider = new ethers.providers.Web3Provider(window.ethereum); 

    //         const contract = new ethers.Contract( 

    //             contractAddress, 

    //             HelloWorld.abi, 

    //             provider 

    //         ); 

    //         try { 

    //             const data = await contract.hello(); 

    //             setHelloValue(data); 

    //             console.log('Greeting: ', data); 

    //             console.log('Contract Address: ', contract.address); 

    //         } catch (err) { 

    //             console.log('Error: ', err); 

    //         } 

    //     } 

    // } 

 
 

    async function setHello() { 

        if (!hello) return; 

        if (typeof window.ethereum !== 'undefined') { 

            await requestAccount(); 

            const provider = new ethers.providers.Web3Provider(window.ethereum); 

            const signer = provider.getSigner(); 

            const contract = new ethers.Contract( 

                contractAddress, 

                HelloWorld.abi, 

                signer 

            ); 

            const transaction = await contract.setHello(hello); 

            await transaction.wait(); 

            fetchHello(); 

        } 

    } 

 
 

    return ( 

        <div className='class-div'>

            <main> 

                <h3>Avalanche Dapp</h3> 

                <select>
                    <option value="borrower">Borrower</option>
                    <option value="bankAdmin">Bank Admin</option>
                </select>

                <br />

                {/* <button onClick={fetchHello}>Display Message</button>  */}

                <label>Enter blockchain address</label>
                <br />

                <input
                    onChange={(e) => setHelloValue(e.target.value)} 
                    placeholder='Enter blockchain address' 
                /> 
                <br />

                <label>Enter credit score tokens</label>
                <br/>
                
                <input 
                    onChange={(e) => setHelloValue(e.target.value)} 
                    placeholder='Enter credit score tokens'
                />
                <br />

                <button onClick={setHello}>Send Transaction</button> 

                <div>&nbsp;</div> 

            </main> 

        </div> 

    ); 

} 

 
 

export default App;