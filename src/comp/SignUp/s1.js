import './signup.css'

import {Progress,VStack, IconButton, useColorMode, Text, Box, SimpleGrid, ChakraProvider, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Link, Stack, Image,HStack} from '@chakra-ui/react';
import { useState } from "react";
import { FaUserInjured,FaUserMd,FaSun, FaMoon,FaHospitalSymbol } from 'react-icons/fa';
export default function (){
    const { colorMode, toggleColorMode } = useColorMode();
    const [user,setUser]=useState("")
    const [step,setStep]=useState(1)
    return(
        <>
            <ChakraProvider>
            <div className='container-fluid' style={{position:'fixed',width:'100%'}}>

                <div className="row" style={{width:'100%'}}>
                    <div className="col-4">
                        <img className="img-fluid"
                             src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                             alt="login form"  style={{borderRadius: '1rem 0 0 1rem',width:'100%'}} />
                    </div>
                    {step ==1 && <div className="col">
                        <div className='row'>
                            <div className='col-10' style={{padding:'2%'}}>
                                <Progress hasStripe colorScheme='purple' value={20}  />
                            </div>
                            <div className='col'>
                                <div style={{textAlign:'right'}}>
                                    <IconButton
                                        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
                                        isRound='true'
                                        size='lg'
                                        alignSelf='flex-end'
                                        onClick={toggleColorMode}
                                    />
                                </div>
                            </div>
                        </div>
                        <div style={{padding:'10%',textAlign:'center'}}>
                            <h1 style={{fontSize: '2.5em',fontFamily: 'Georgia, Times, serif'}}> Select User </h1>
                        </div>

                        <div className="row">

                            <div className="col-6" style={{padding:'10%',textAlign:'right'}} >

                                <Button leftIcon={<FaUserInjured />} colorScheme='violet' variant='outline' size='lg' onClick={()=>{
                                    setUser('P')
                                    setStep(2)
                                }}>
                                    Patient
                                </Button>


                            </div>
                            <div className="col-6" style={{padding:'10%',textAlign:'left'}}>

                                <Button leftIcon={<FaUserMd />}  colorScheme='violet' variant='outline' size='lg' onClick={()=>{
                                    setUser('D')
                                    setStep(2)
                                }}>
                                    Doctor
                                </Button>
                            </div>

                        </div>


                    </div>}


                </div>










            </div>
            </ChakraProvider>
        </>
    )

}