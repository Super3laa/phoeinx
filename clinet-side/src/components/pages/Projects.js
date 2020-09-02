import React,{useState,useEffect} from 'react';
import RawPage from './RawPage';
import Items from "../HomePageComponents/items";
import TitleImg from '../SharedComponents/TitleImg';
import {getProjects} from '../../services/project';
export default function Projects(){
    const [projects,updateProjects]=useState([]);
    useEffect(()=>{
        async function fetch(){
            const temp = await getProjects();
            updateProjects(temp);
        }
        fetch();
    },[])
    return(
        <RawPage 
            content={
                <React.Fragment>
                    <TitleImg content={{title:"Projects"}}/>
                    <Items content={projects} type={"project"} />

                </React.Fragment>
            }
        />
    )
}