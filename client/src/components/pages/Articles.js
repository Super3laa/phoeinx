import React,{useState,useEffect} from 'react';
import RawPage from './RawPage';
import Items from "../HomePageComponents/items";
import TitleImg from '../SharedComponents/TitleImg'
import {getArticles} from '../../services/article'
export default function Articles(){
    const [articles,updateArticles]=useState([]);
    useEffect(()=>{
        async function fetch(){
            let temp = await getArticles();
            updateArticles(temp);
        }
        fetch();
    },[])
    return(
        <RawPage 
            content={
                <React.Fragment>
                    <TitleImg content ={{title:"Articles"}}/>
                    <Items content={articles} type={"article"} />
                </React.Fragment>
            }
        />
    )
}