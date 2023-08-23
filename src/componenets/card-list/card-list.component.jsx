import { Component } from 'react';
import './card-list.style.css';
import Card from "../card/card.component";

class CardList extends  Component
{
    render(){

        const { monster }=this.props;

        return(
            <div className='card-list'>
                {
                    monster.map((monster) => {

                        return(
                            <Card monster={monster}/>
                        )
                        })
                }
            </div>
        );
    }
}

export default CardList;