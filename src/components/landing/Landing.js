import React, {useState, useEffect, useContext} from "react";
import './Landing.css';
import Individual from './Landing individual'

import data from '../Data';


 
const Landing = (props)=>{
    
    return(
        <div className="landing">
            <div className="landing-oriental">
                <h1 > oriental Food</h1>
                <div className="landing-oriental-meals">
                    <div className="landing-oriental-meals-type">
                        <h1>Family Meal</h1>
                    {data.productData.map((item, index)=>{
                        return(
                            <Individual 
                            img={item.img} 
                            title={item.title}
                            price={item.price} 
                            contant={item.contant} 
                            item={item}
                            key={index}  
                            />
                        )
                    })}
                    </div>
                    <div className="landing-oriental-meals-type">
                        <h1>Individual Meal</h1>
                    {data.productData2.map((item, index)=>{
                        return(
                            <Individual 
                            img={item.img} 
                            title={item.title}
                            price={item.price} 
                            contant={item.contant} 
                            item={item}
                            key={index}  
                            />
                        )
                    })}
                    </div>
                    <div className="landing-oriental-meals-type">
                        <h1>Kides Meal</h1>
                    {data.productData3.map((item, index)=>{
                        return(
                            <Individual 
                            img={item.img} 
                            title={item.title}
                            price={item.price} 
                            contant={item.contant} 
                            item={item}
                            key={index}  
                            />
                        )
                    })}
                    </div>
                    <div className="landing-oriental-meals-type">
                        <h1>Samdwitch</h1>
                    {data.productData4.map((item, index)=>{
                        return(
                            <Individual 
                            img={item.img} 
                            title={item.title}
                            price={item.price} 
                            contant={item.contant} 
                            item={item}
                            key={index}  
                            />
                        )
                    })}
                    </div>
                </div>
            </div>
            <div className="landing-oriental">
                <h1 > western Food</h1>
                <div className="landing-oriental-meals">
                    <div className="landing-oriental-meals-type">
                        <h1>family meals</h1>
                    {data.productData5.map((item, index)=>{
                        return(
                            <Individual 
                            img={item.img} 
                            title={item.title}
                            price={item.price} 
                            contant={item.contant} 
                            item={item}
                            key={index}  
                            />
                        )
                    })}
                    </div>
                    <div className="landing-oriental-meals-type">
                        <h1>Individual Meal</h1>
                    {data.productData6.map((item, index)=>{
                        return(
                            <Individual 
                            img={item.img} 
                            title={item.title}
                            price={item.price} 
                            contant={item.contant} 
                            item={item}
                            key={index}  
                            />
                        )
                    })}
                    </div>
                    <div className="landing-oriental-meals-type">
                        <h1>Kides Meal</h1>
                    {data.productData7.map((item, index)=>{
                        return(
                            <Individual 
                            img={item.img} 
                            title={item.title}
                            price={item.price} 
                            contant={item.contant} 
                            item={item}
                            key={index}  
                            />
                        )
                    })}
                    </div>
                    <div className="landing-oriental-meals-type">
                        <h1>pizza</h1>
                    {data.productData8.map((item, index)=>{
                        return(
                            <Individual 
                            img={item.img} 
                            title={item.title}
                            price={item.price} 
                            contant={item.contant} 
                            item={item}
                            key={index}  
                            />
                        )
                    })}
                    </div>
                </div>
            </div>
            
        </div>   
    )
};

export default Landing;