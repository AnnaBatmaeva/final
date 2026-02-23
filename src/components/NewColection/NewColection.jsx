import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from "react-redux";

import Products from "../../components/Products/Products";
import Loader from "../../components/States/Loader";

import styles from './newColection.module.scss'

import { fetchNew } from '../../slices/newSlice';



const NewCollection = () => {
    const dispatch = useDispatch();
    const newState = useSelector(state => state.newColectionBlock);
    const newColection = useSelector(state => state.newColectionBlock.items);
    useEffect(() => {
        dispatch(fetchNew({ limit: 10 }));
    }, []);

    return (
        <div className={styles.newColectionBlock}>
            <div className="content">
                <div className={styles.titles}>
                    <h2 className={styles.titles__newColection}>New Colection</h2>
                    <h2 className={styles.titles__goToNewColection}>Shop New Colection</h2>
                </div>
                <Products products={newColection} />
            </div>
        </div>

    );
};

export default NewCollection;
