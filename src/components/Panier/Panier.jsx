import React from 'react'
import './Panier.css'
import PanierCard from '../PanierCard/PanierCard'
import { useSelector } from 'react-redux'
import { CgUnavailable } from 'react-icons/cg';
function Panier() {
    let { panier_list,total } = useSelector((state) => state.panier);
    const displatPanierCards = panier_list?.map((p, index) => <PanierCard menu={p} key={index}/>)
    return (
        <div className='panier_section'>
            <div className="panier_header">
                <h3>Panier : </h3>
            </div>
            <div className="panier_list">

                {
                    panier_list.length == 0
                        ?
                        <div className='panier_empty'>
                            <CgUnavailable color='#5B913B' size="30px" />
                            <p>Panier empty</p>
                        </div> 
                        : displatPanierCards

                }


            </div>
            <div className="panier_total">
                <p className="total">Total : {total}$</p>
            </div>
        </div>
    )
}

export default Panier
